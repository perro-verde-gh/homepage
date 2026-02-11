# 🐕💚 PERRO VERDE - Proyecto Completo

## Tu Mejor Amigo Digital - Sistema de Identidad de Marca Completo

---

## 📦 Contenido del Paquete

Este paquete contiene TODO lo necesario para lanzar Perro Verde como marca de software/tecnología:

### ✅ Incluye:
- **Brandbook completo** con identidad de marca, valores, voz, paleta, tipografía
- **2 Logos profesionales** (principal + isotipo/favicon)
- **Sitio web base** HTML con scroll snap
- **Sistema de diseño** documentado
- **Guías de uso** y aplicación

---

## 🎨 Identidad de Marca

### Concepto
**Perro Verde** combina:
- 🐕 **Lealtad** (como un perro fiel)
- 🌱 **Frescura** (como el verde del crecimiento)
- 💚 **Cercanía** (tech humano, no corporativo frío)

### Propuesta de Valor
> "El mejor amigo de tu negocio digital. Combinamos la lealtad de un perro con código fresco y moderno."

### Personalidad
- Amigables pero profesionales
- Técnicos pero accesibles
- Un poco juguetones sin perder seriedad
- Hablamos claro, sin jerga innecesaria

---

## 🎨 Paleta de Colores

### Principales
```
Verde Perro (Hero):    #4CAF50  - CTAs, acentos, corazón de la marca
Verde Bosque:          #2E7D32  - Texto importante, fondos oscuros
Verde Pasto:           #81C784  - Hover states, elementos secundarios
Crema Hueso:           #FFF8E1  - Fondo principal, calidez
```

### Secundarios
```
Tierra Café:           #6D4C41  - Detalles, complemento cálido
Naranja Pelota:        #FF9800  - Elementos juguetones
Azul Cielo:            #03A9F4  - Links, confianza
Gris Asfalto:          #616161  - Texto secundario
```

---

## 🔤 Tipografía

### Nunito (Headers, Títulos)
- Redondeada, amigable
- Pesos: 400, 600, 800
- Uso: H1, H2, H3, navegación, CTAs

### Inter (Body Text)
- Limpia, moderna
- Pesos: 400, 500, 700
- Uso: Párrafos, texto corrido

### JetBrains Mono (Código)
- Monospace con personalidad
- Uso: Bloques de código, elementos técnicos

---

## 🐕 Los Logos

### Logo Principal (`logo-principal.svg`)
- **Uso**: Website header, presentaciones, documentos
- **Descripción**: Perro amigable con cola verde (hoja) + texto "PERRO VERDE"
- **Formato**: SVG escalable
- **Colores**: Verde Perro + Verde Bosque

### Isotipo (`isotipo-favicon.svg`)
- **Uso**: Favicon, app icons, espacios pequeños
- **Descripción**: Solo el perro sobre fondo crema
- **Formato**: SVG 100x100 con bordes redondeados
- **Ideal para**: Favicon, avatares sociales

### Reglas de Uso del Logo
- ✅ **Espacio mínimo**: Altura de una pata alrededor
- ✅ **Tamaño mínimo**: 40px alto (digital), 15mm (print)
- ❌ **No hacer**: Cambiar colores, distorsionar, agregar sombras

---

## 💬 Tono de Voz

### Ejemplos BUENOS ✅
- "¡Ladramos de emoción por empezar tu proyecto!"
- "No mordemos, pero sí entregamos"
- "Código fresco como pasto recién cortado"
- "Somos tu compañero digital, no solo un proveedor"

### Ejemplos MALOS ❌
- "Implementamos soluciones enterprise de alta escalabilidad..."
- "Nuestro ecosistema digital integral..."
- (Evitar corporativo frío y pretencioso)

### Vocabulario Característico
**Usar con moderación**:
- "Ladramos de..."
- "Nuevos trucos" (para skills/features)
- "Huesos duros de roer" (problemas difíciles)
- "Tu compañero/amigo digital"

**Evitar**:
- Abusar de metáforas de perros
- Jerga corporativa excesiva
- Términos muy técnicos sin explicar

---

## 📐 Sistema de Diseño

### Espaciado (base 8px)
```css
--xs: 8px
--sm: 16px
--md: 24px
--lg: 32px
--xl: 48px
--2xl: 64px
```

### Border Radius
```css
--buttons: 8px    /* amigable */
--cards: 16px     /* moderno */
--modales: 24px   /* distintivo */
```

### Sombras
```css
/* Soft */
box-shadow: 0 2px 8px rgba(46, 125, 50, 0.1);

/* Medium */
box-shadow: 0 4px 16px rgba(46, 125, 50, 0.15);

/* Strong */
box-shadow: 0 8px 32px rgba(46, 125, 50, 0.2);
```

### Animaciones
- Duración: `300ms` (estándar)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Principio: Vivas pero no mareantes

---

## 🌐 Sitio Web

### Características
- **Scroll snap** con resistencia configurable
- **Scroll snap** con resistencia
- **Responsive** mobile-first
- **Performance**: CSS animations optimizadas
- **Sin dependencias**: Solo Google Fonts

### Secciones
1. **Hero**: Mensaje principal + CTAs
2. **Servicios**: Grid de 4 servicios
3. **Valores**: 4 valores fundamentales
4. **CTA Final**: Contacto
5. **Footer**: Info legal

### Personalización
```css
/* En index.html, cambiar variables: */
:root {
  --verde-perro: #TU_COLOR;
  --verde-bosque: #TU_COLOR;
  /* etc */
}
```

---

## 📱 Aplicaciones de Marca

### Website
- Fondo: Crema Hueso
- CTAs: Verde Perro → hover Verde Bosque
- Cards: Blanco con sombra soft
- Links: Azul Cielo

### Email Signature
```
[Logo Isotipo]
Nombre Apellido
Cargo | Perro Verde
email@perroverde.com | +598 XXXX
🐕 Tu mejor amigo digital
```

### Redes Sociales
- **Avatar**: Isotipo sobre Verde Perro
- **Bio**: "🐕💚 Tu mejor amigo digital | Software con lealtad y código fresco"
- **Hashtags**: #PerroVerde #CodigoFresco

---

## 🎯 Target Audience

### Primario
- PyMEs en crecimiento
- Startups early-stage  
- Emprendedores digitales
- 25-45 años
- Valoran relaciones cercanas

### Diferenciadores vs Competencia
1. **Cercanía humana** (vs frialdad corporate)
2. **Comunicación clara** (vs tecnicismos)
3. **Compromiso real** (vs transaccionalidad)
4. **Flexibilidad** (vs rigidez)

---

## ✅ Checklist Pre-Publicación

Antes de publicar CUALQUIER material:

- [ ] ¿Usa colores de la paleta oficial?
- [ ] ¿Logo tiene espacio adecuado?
- [ ] ¿Tono es amigable pero profesional?
- [ ] ¿Tipografía es Nunito o Inter?
- [ ] ¿Evita jerga corporativa innecesaria?
- [ ] ¿Suena como "nosotros" hablaríamos?
- [ ] ¿Generaría confianza en un cliente?

---

## 🚫 Nunca Hacer

- ❌ Verde neón o colores fuera de paleta
- ❌ Logo con efectos 3D, sombras no autorizadas
- ❌ Copiar estética "corporate cold"
- ❌ Abusar del humor hasta parecer poco serio
- ❌ Stock photos de oficinas grises
- ❌ Prometer lo que no podemos cumplir

---

## 📂 Estructura de Archivos

```
perro-verde/
├── docs/
│   └── PERRO-VERDE-BRANDBOOK.md     # Brandbook completo
├── assets/
│   └── logos/
│       ├── logo-principal.svg        # Logo completo
│       └── isotipo-favicon.svg       # Solo perro (favicon)
├── website/
│   └── index.html                    # Sitio web principal
└── README.md                         # Este archivo
```

---

## 🚀 Próximos Pasos

### 1. Revisar Brandbook
Leer `docs/PERRO-VERDE-BRANDBOOK.md` completo

### 2. Personalizar Website
- Abrir `website/index.html`
- Ajustar textos a tu negocio real
- Cambiar email de contacto
- Agregar enlaces a redes sociales

### 3. Exportar Logos
- Usar SVGs para web
- Exportar a PNG para apps/social
  - Favicon: 512x512px
  - Social: 1200x1200px

### 4. Crear Materiales
- Presentación de ventas
- Email signature
- Tarjetas de presentación
- Perfiles sociales

### 5. Deploy
- Subir `index.html` a servidor
- Configurar dominio
- Setup analytics
- Configurar emails @perroverde.com

---

## 💡 Ideas para Expandir

### Contenido
- [ ] Blog Next.js (como Kodeva)
- [ ] Casos de estudio
- [ ] Página de servicios detallada
- [ ] Página de equipo
- [ ] FAQ

### Marketing
- [ ] Landing pages por servicio
- [ ] Calculadora de presupuesto
- [ ] Newsletter
- [ ] Webinars/tutoriales

### Producto
- [ ] Client portal
- [ ] Project tracker
- [ ] Onboarding automatizado

---

## 📞 Contacto de Marca

**Email**: brand@perroverde.com  
**Responsable**: Equipo Perro Verde  
**Versión**: 1.0  
**Fecha**: Enero 2026

---

## 💚 Filosofía Interna

> "Si no lo harías por un amigo, no lo hagas."

Cada proyecto es una oportunidad para ser el mejor compañero que alguien puede tener.

---

## 🎓 Recursos Útiles

### Fonts
- Nunito: https://fonts.google.com/specimen/Nunito
- Inter: https://fonts.google.com/specimen/Inter
- JetBrains Mono: https://fonts.google.com/specimen/JetBrains+Mono

### Inspiración de Diseño
- Paleta verde cálida y accesible
- UI redondeada y amigable
- Micro-interacciones suaves
- Iconografía orgánica

### Herramientas
- Figma (diseño)
- Coolors (paletas)
- Fontpair (combinaciones tipográficas)

---

**🐕 ¡Ladramos de emoción por tu éxito!** 💚

---

*Creado con 💚 y muchas croquetas*
*Perro Verde © 2026*
