/** @type {import('next').NextConfig} */
const isCloudflare = process.env.CF_PAGES === '1'
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repository = process.env.GITHUB_REPOSITORY || ''
const repositoryName = repository.split('/')[1] || ''
const isUserOrOrgPages = repositoryName.endsWith('.github.io')

// No basePath para Cloudflare, solo para GitHub Pages
const basePath = isCloudflare
  ? ''
  : (isGithubActions && repositoryName && !isUserOrOrgPages ? `/${repositoryName}` : '')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
