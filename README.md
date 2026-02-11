# 🐕💚 PERRO VERDE - 10 Proyectos Next.js

## Estructura Completa de Proyectos

Este directorio contiene **10 proyectos Next.js independientes**, cada uno con una landing page diferente para Perro Verde.

```
perro-verde/
├── 01-parque-verde/          # Diseño Orgánico
├── 02-minimalista-pro/       # Diseño Limpio
├── 03-juguelon/              # Interactivo y Divertido
├── 04-corporativo/           # Formal Empresarial
├── 05-onepage-scroll/        # Narrativa con Scroll
├── 06-dark-mode/             # Terminal/Developer
├── 07-split-screen/          # Pantalla Dividida
├── 08-cards-storytelling/    # Tarjetas Grandes
├── 09-parallax/              # Efecto de Profundidad
└── 10-fullscreen-slider/     # Presentación Slides
```

---

## 🚀 Inicio Rápido

### Opción 1: Un Solo Proyecto

```bash
# Entrar a cualquier proyecto
cd 01-parque-verde

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir navegador
open http://localhost:3000
```

### Opción 2: Todos los Proyectos

```bash
# Script para instalar en todos
for dir in */; do
    if [ -f "$dir/package.json" ]; then
        echo "📦 Instalando $dir..."
        cd "$dir" && npm install && cd ..
    fi
done
```

---

## 📋 Características de Cada Proyecto

| # | Proyecto | Estilo | Puerto Sugerido |
|---|----------|--------|-----------------|
| 01 | Parque Verde | Orgánico con blobs | 3001 |
| 02 | Minimalista Pro | Limpio tipo Apple | 3002 |
| 03 | Juguetón | Interactivo | 3003 |
| 04 | Corporativo | Formal B2B | 3004 |
| 05 | One Page Scroll | Narrativo | 3005 |
| 06 | Dark Mode | Terminal | 3006 |
| 07 | Split Screen | Formulario | 3007 |
| 08 | Cards Storytelling | Visual | 3008 |
| 09 | Parallax | 3D | 3009 |
| 10 | Fullscreen Slider | Slides | 3010 |

---

## 🛠️ Stack Tecnológico

Todos los proyectos comparten:

- **Framework**: Next.js 14 (App Router)
- **React**: 18.2
- **TypeScript**: 5.3
- **Styling**: CSS Modules
- **Fonts**: Nunito + Inter (Google Fonts)

---

## 📁 Estructura de Cada Proyecto

```
01-parque-verde/
├── app/
│   ├── layout.tsx           # Layout con metadata
│   ├── page.tsx             # Página principal
│   ├── page.module.css      # Estilos modulares
│   └── globals.css          # Estilos globales
├── public/
│   └── assets/
│       └── logos/
│           ├── perro-verde-real.png  # Logo PNG
│           └── perro-verde-real.svg  # Logo SVG
├── components/              # Componentes (vacío por ahora)
├── styles/                  # Estilos extras (vacío)
├── package.json
├── tsconfig.json
├── next.config.js
├── .gitignore
└── README.md
```

---

## 🎨 Personalización

### Cambiar Puerto de Desarrollo

```bash
# En package.json, cambiar:
"dev": "next dev -p 3001"

# O ejecutar directamente:
npm run dev -- -p 3001
```

### Cambiar Colores

Edita `app/globals.css`:

```css
:root {
  --verde-perro: #TU_COLOR;
  --verde-bosque: #TU_COLOR;
}
```

### Cambiar Logo

Reemplaza archivos en `public/assets/logos/`:
- `perro-verde-real.png`
- `perro-verde-real.svg`

---

## 📦 Build para Producción

```bash
# En cualquier proyecto
npm run build
npm start

# O exportar estático
npm run build
# Los archivos estarán en: .next/
```

---

## 🔧 Scripts Útiles

### Instalar Todas las Dependencias

```bash
#!/bin/bash
for dir in */; do
    if [ -f "$dir/package.json" ]; then
        echo "📦 $dir"
        (cd "$dir" && npm install)
    fi
done
```

### Ejecutar Todos en Puertos Diferentes

```bash
#!/bin/bash
PORT=3001
for dir in */; do
    if [ -f "$dir/package.json" ]; then
        echo "🚀 $dir en puerto $PORT"
        (cd "$dir" && npm run dev -- -p $PORT &)
        PORT=$((PORT + 1))
    fi
done
```

---

## 🎯 Casos de Uso

### Para Desarrollo

**Usa 01-parque-verde**: Base completa con todos los estilos

### Para Presentar a Clientes

**Ejecuta varios**:
```bash
cd 03-juguelon && npm run dev -p 3003 &
cd 06-dark-mode && npm run dev -p 3006 &
cd 08-cards-storytelling && npm run dev -p 3008 &
```

### Para Producción

**Elige uno** → Build → Deploy a Vercel/Netlify

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# En cualquier proyecto
npm install -g vercel
vercel

# Seguir instrucciones
```

### Netlify

```bash
npm run build
# Subir carpeta .next/ o usar Netlify CLI
```

### Servidor Propio

```bash
npm run build
npm start
# Corre en http://localhost:3000
```

---

## ✅ Checklist Pre-Deploy

- [ ] Cambiar emails de ejemplo por reales
- [ ] Actualizar textos con información real
- [ ] Verificar logos están correctos
- [ ] Testear en mobile
- [ ] Optimizar imágenes si es necesario
- [ ] Configurar dominio
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Agregar meta tags SEO
- [ ] Configurar favicon

---

## 📝 Notas Técnicas

### Por Qué Next.js

- ✅ SSR (Server Side Rendering)
- ✅ SEO optimizado
- ✅ Image Optimization
- ✅ TypeScript nativo
- ✅ Deploy fácil (Vercel)

### Por Qué CSS Modules

- ✅ Scoped styles (no conflictos)
- ✅ No dependencias externas
- ✅ Fácil de mantener
- ✅ Performance óptimo

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'next'"

```bash
npm install
```

### Error: Puerto en uso

```bash
# Cambiar puerto
npm run dev -- -p 3001
```

### Imágenes no cargan

```bash
# Verificar ruta
public/assets/logos/perro-verde-real.png
```

---

## 🤝 Contribuir

Cada proyecto es independiente. Para mejorar:

1. Elegí un proyecto
2. Hacé cambios en `app/page.tsx` o `app/page.module.css`
3. Testeá con `npm run dev`
4. Commit y push

---

## 📞 Soporte

**Perro Verde**
- Email: hola@perroverde.com
- Uruguay 🇺🇾

---

## 🐕💚 Licencia

© 2026 Perro Verde

*Código con 💚 y muchas croquetas*

---

**¡Listo para desarrollar! Elegí un proyecto y empezá:**

```bash
cd 01-parque-verde && npm install && npm run dev
```
