#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "==> Verificando sesion en Cloudflare..."
if ! npx wrangler whoami >/dev/null 2>&1; then
  echo "Error: no hay sesion activa de Wrangler. Ejecuta: npx wrangler login"
  exit 1
fi

SHORT_SHA="$(git rev-parse --short HEAD 2>/dev/null || echo "no-git")"
DEFAULT_MESSAGE="Auto deploy ${SHORT_SHA} $(date -u +%Y-%m-%dT%H:%M:%SZ)"
DEPLOY_MESSAGE="${DEPLOY_MESSAGE:-$DEFAULT_MESSAGE}"
DEPLOY_TARGET="${DEPLOY_TARGET:-pages}"
PAGES_PROJECT_NAME="${PAGES_PROJECT_NAME:-homepage}"
PAGES_BRANCH="${PAGES_BRANCH:-main}"

echo "==> Build de Next.js..."
npm run build

if [[ -d "out" ]]; then
  find out -type f -name ".DS_Store" -delete
fi

if [[ "$DEPLOY_TARGET" == "pages" ]]; then
  echo "==> Deploy a Cloudflare Pages (project: ${PAGES_PROJECT_NAME}, branch: ${PAGES_BRANCH})..."
  npx wrangler pages deploy out \
    --project-name "${PAGES_PROJECT_NAME}" \
    --branch "${PAGES_BRANCH}" \
    --commit-dirty=true \
    --commit-hash "${SHORT_SHA}" \
    --commit-message "${DEPLOY_MESSAGE}"

  echo "==> Ultimos deployments de Pages:"
  npx wrangler pages deployment list --project-name "${PAGES_PROJECT_NAME}" | sed -n '1,20p' || true
  echo "Deploy completado (Pages)."
  exit 0
fi

if [[ "$DEPLOY_TARGET" == "worker" ]]; then
  if [[ ! -f "wrangler.jsonc" ]]; then
    echo "Error: no existe wrangler.jsonc en $ROOT_DIR (requerido para DEPLOY_TARGET=worker)"
    exit 1
  fi

  echo "==> Subiendo nueva version de Worker con Wrangler..."
  UPLOAD_LOG="$(mktemp)"
  trap 'rm -f "$UPLOAD_LOG"' EXIT

  npx wrangler versions upload 2>&1 | tee "$UPLOAD_LOG"

  VERSION_ID="$(
    grep -E "Worker Version ID:" "$UPLOAD_LOG" \
      | grep -Eo "[0-9a-f-]{36}" \
      | tail -n 1
  )"

  if [[ -z "${VERSION_ID}" ]]; then
    echo "Error: no se pudo detectar Worker Version ID en la salida de Wrangler."
    exit 1
  fi

  echo "==> Deploy version ${VERSION_ID} al 100%..."
  npx wrangler versions deploy \
    --version-id "${VERSION_ID}" \
    --percentage 100 \
    --yes \
    --message "${DEPLOY_MESSAGE}"

  echo "==> Estado actual del deployment de Worker:"
  npx wrangler deployments status --json || true
  echo "Deploy completado (Worker)."
  exit 0
fi

echo "Error: DEPLOY_TARGET debe ser 'pages' o 'worker'. Valor recibido: ${DEPLOY_TARGET}"
exit 1
