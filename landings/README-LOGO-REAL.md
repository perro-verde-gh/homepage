# 🐕💚 Landings con Logo Real de Perro Verde

## ¿Qué hay de nuevo?

Todas las landing pages han sido actualizadas para usar el **logo real** de Perro Verde que subiste.

---

## 📂 Archivos Actualizados

### Logos Reales Incluidos

```
perro-verde/assets/logos/
├── perro-verde-real.png    (33 KB) - Logo PNG para usar
├── perro-verde-real.svg    (37 KB) - Logo SVG original
├── logo-principal.svg       (2.7 KB) - Logo antiguo (placeholder)
└── isotipo-favicon.svg      (2.3 KB) - Favicon antiguo
```

### Landings Actualizadas (Sufijo `-REAL`)

Todas las 10 landings tienen ahora dos versiones:

| Versión Original | Versión con Logo Real |
|------------------|----------------------|
| `v1-parque-verde.html` | **`v1-parque-verde-REAL.html`** ✨ |
| `v2-minimalista-pro.html` | **`v2-minimalista-pro-REAL.html`** ✨ |
| `v3-juguelon.html` | **`v3-juguelon-REAL.html`** ✨ |
| `v4-corporativo.html` | **`v4-corporativo-REAL.html`** ✨ |
| `v5-onepage-scroll.html` | **`v5-onepage-scroll-REAL.html`** ✨ |
| `v6-dark-mode.html` | **`v6-dark-mode-REAL.html`** ✨ |
| `v7-split-screen.html` | **`v7-split-screen-REAL.html`** ✨ |
| `v8-cards-storytelling.html` | **`v8-cards-storytelling-REAL.html`** ✨ |
| `v9-parallax.html` | **`v9-parallax-REAL.html`** ✨ |
| `v10-fullscreen-slider.html` | **`v10-fullscreen-slider-REAL.html`** ✨ |

---

## ✨ Cambios Implementados

### 1. **Header/Navegación**

**ANTES** (con emoji):
```html
<a href="#" class="logo">🐕 PERRO VERDE</a>
```

**AHORA** (con logo real):
```html
<a href="#" class="logo-container">
    <img src="../assets/logos/perro-verde-real.png" alt="Perro Verde" class="logo-img">
    <span class="logo-text">PERRO VERDE</span>
</a>
```

### 2. **Hero Section**

Las landings que tenían `hero-image` o ilustraciones ahora muestran el **logo real animado**:

```html
<div class="hero-image">
    <img src="../assets/logos/perro-verde-real.png" alt="Perro Verde Logo" class="hero-logo-large">
</div>
```

Con animación de flotación suave:
```css
.hero-logo-large {
    width: 100%;
    max-width: 450px;
    height: auto;
    filter: drop-shadow(0 10px 40px rgba(76, 175, 80, 0.2));
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

### 3. **Estilos CSS Agregados**

```css
.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
}

.logo-img {
    width: 50px;
    height: auto;
}

.logo-text {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--verde-bosque);
}
```

---

## 🎨 Diferencias Visuales

### Logo en Header
- ✅ **Nuevo**: Logo real del perro verde (50px de ancho)
- ✅ **Texto**: "PERRO VERDE" al lado con tipografía Nunito
- ✅ **Hover**: Mantiene efectos de la versión original

### Logo en Hero
- ✅ **Grande y centrado**: ~450px de ancho máximo
- ✅ **Animación**: Efecto float (sube y baja suavemente)
- ✅ **Sombra**: Drop shadow verde para dar profundidad

---

## 📁 Estructura de Rutas

Las versiones `-REAL` usan rutas relativas:

```
landings/
  v1-parque-verde-REAL.html
  └── Carga: ../assets/logos/perro-verde-real.png

assets/
  logos/
    perro-verde-real.png  ← Aquí está el logo
```

**IMPORTANTE**: Para que funcionen correctamente:

1. **Si abres directo desde `/landings/`**: 
   - ✅ Todo funciona (la ruta `../assets/logos/` es correcta)

2. **Si mueves los HTML a otro lugar**:
   - ⚠️ Debes ajustar la ruta o copiar el logo

---

## 🚀 Cómo Usar

### Opción 1: Usar Directo (Recomendado)

```bash
# Extraer el .tar.gz
tar -xzf PERRO-VERDE-CON-LOGO-REAL.tar.gz

# Navegar a landings
cd perro-verde/landings/

# Abrir cualquier versión -REAL en navegador
open v1-parque-verde-REAL.html
# o
xdg-open v6-dark-mode-REAL.html
```

### Opción 2: Subir a Servidor

```bash
# Subir toda la carpeta perro-verde/
scp -r perro-verde/ usuario@servidor:/var/www/html/

# URLs funcionarán:
https://tudominio.com/landings/v1-parque-verde-REAL.html
```

### Opción 3: Usar Solo una Landing

```bash
# Copiar landing + assets
mkdir mi-sitio
cp perro-verde/landings/v3-juguelon-REAL.html mi-sitio/index.html
cp -r perro-verde/assets mi-sitio/

# Estructura:
mi-sitio/
├── index.html
└── assets/
    └── logos/
        └── perro-verde-real.png
```

---

## 🔧 Personalización

### Cambiar Tamaño del Logo en Header

```css
.logo-img {
    width: 50px;  /* Cambiar a 40px, 60px, etc. */
    height: auto;
}
```

### Cambiar Tamaño del Logo en Hero

```css
.hero-logo-large {
    max-width: 450px;  /* Cambiar a 300px, 600px, etc. */
}
```

### Desactivar Animación Float

```css
.hero-logo-large {
    animation: none;  /* Quitar animación */
}
```

---

## 📊 Comparación: Original vs REAL

| Aspecto | Versión Original | Versión REAL |
|---------|------------------|--------------|
| **Logo Header** | Emoji 🐕 | Logo PNG real |
| **Logo Hero** | Ilustración SVG / Emoji | Logo PNG animado |
| **Tamaño archivo** | ~15-18 KB | ~18-21 KB |
| **Carga** | Instant (todo inline) | Rápida (logo 33KB PNG) |
| **Profesionalismo** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Consistencia marca** | Placeholder | ✅ Identidad real |

---

## ✅ Checklist Pre-Launch

Antes de publicar cualquier versión `-REAL`:

- [ ] Logo se ve bien en header
- [ ] Logo se ve bien en hero (si aplica)
- [ ] Ruta `../assets/logos/perro-verde-real.png` funciona
- [ ] Animación float se ve suave
- [ ] Responsive: logo se adapta en mobile
- [ ] Cambiar emails a reales (hola@perroverde.com)
- [ ] Actualizar textos con info real
- [ ] Testear en Chrome, Firefox, Safari

---

## 🎯 ¿Cuál Usar?

### Usa versiones **ORIGINALES** si:
- Quieres prototipar rápido
- No tienes el logo final
- Necesitas placeholder temporal

### Usa versiones **-REAL** si:
- Vas a producción
- Quieres máximo profesionalismo
- Tienes el logo listo (✅ ya lo tenés!)

---

## 💡 Tips Extra

### Para Favicon
Usa el logo PNG como favicon:

```html
<link rel="icon" type="image/png" href="assets/logos/perro-verde-real.png">
```

### Para Open Graph (Redes Sociales)
```html
<meta property="og:image" content="https://tudominio.com/assets/logos/perro-verde-real.png">
```

### Para Email Signature
El logo PNG funciona perfecto en firmas de email.

---

## 🐕💚 Resumen

✅ **10 landings actualizadas** con logo real
✅ **Logo en header** (50px) + texto
✅ **Logo en hero** (450px max) con animación
✅ **Rutas relativas** funcionando
✅ **Estilos CSS** agregados automáticamente
✅ **Listo para producción**

**¡Ahora todas tus landings tienen el logo profesional de Perro Verde!** 🎾✨

---

*Generado automáticamente con script Python*
*Perro Verde • 2026*
