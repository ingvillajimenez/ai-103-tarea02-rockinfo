# 🎸 RockInfo - Página de Información de Bandas de Rock

Una aplicación web moderna y responsiva construida con **React + Vite** que permite explorar información detallada de bandas de rock, con funcionalidad de carga de fotos interactiva.

## 🎯 Descripción del Proyecto

RockInfo es una plataforma estática enfocada en The Strokes que muestra:
- **Información de banda:** Ubicación, año de formación, géneros musicales
- **Miembros:** Lista completa con roles
- **Discografía:** Álbumes con años de lanzamiento
- **Tours:** Próximas fechas confirmadas
- **Biografía:** Historia detallada y línea de tiempo
- **Datos destacados:** Logros y datos curiosos
- **Carga de fotos:** Upload interactivo con drag & drop

## 🏗️ Arquitectura

```
rockinfo/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── Header.jsx       # Menú sidebar con navegación
│   │   ├── UploadSection.jsx    # Área drag & drop para cargar fotos
│   │   ├── BandCard.jsx     # Tarjeta principal con info de banda
│   │   ├── QuickInfo.jsx    # Información rápida (4 columnas)
│   │   ├── UpcomingTours.jsx    # Tabla de próximos tours
│   │   ├── Discography.jsx  # Listado de álbumes
│   │   ├── Biography.jsx    # Biografía e historia
│   │   └── HighlightedData.jsx  # Datos destacados
│   ├── data/
│   │   └── bandData.js      # Datos estáticos de The Strokes
│   ├── styles/
│   │   └── App.css          # Estilos globales (theme dark, responsive)
│   ├── App.jsx              # Componente raíz
│   ├── App.css              # Styles
│   ├── index.css            # Reset global
│   └── main.jsx             # Punto de entrada
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## ✨ Características

### 📱 Funcionalidades
- ✅ **Upload de fotos** — Drag & drop o clic para cargar imágenes locales
- ✅ **Información estática** — Datos de The Strokes sin conexión a BD
- ✅ **Vista previa en tiempo real** — La foto se muestra inmediatamente en la tarjeta
- ✅ **Menú interactivo** — Sidebar con navegación visual (sin enrutamiento)
- ✅ **Tours confirmados** — Próximas fechas y ciudades

### 🎨 Diseño
- ✅ **Tema dark** — Fondo negro (#0d0d0d), acentos rojo (#E63946) y naranja
- ✅ **Responsive** — Funciona en desktop, tablet y mobile
- ✅ **Layout moderno** — Grid layout con sidebar + contenido principal
- ✅ **Transiciones suaves** — Efectos hover y animaciones
- ✅ **Tipografía clara** — Segoe UI con espaciados legibles

### 🔧 Tecnología
- **React 18** — Componentes funcionales con Hooks
- **Vite** — Build tool rápido (HMR en desarrollo)
- **CSS3** — Estilos modular con variables CSS
- **FileReader API** — Carga local de imágenes sin servidor

## 🚀 Instalación y Configuración

### Requisitos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar o navegar al proyecto:**
```bash
cd /Users/juan/code/azure-ia-103/tarea02-entregable/rockinfo
```

2. **Instalar dependencias** (si no lo has hecho):
```bash
npm install
```

3. **Ejecutar servidor de desarrollo:**
```bash
npm run dev
```
La aplicación abrirá en `http://localhost:5173/`

4. **Compilar para producción:**
```bash
npm run build
```

5. **Previsualizar build:**
```bash
npm run preview
```

## 📖 Uso

### Subir Foto
1. Haz clic en el área **"SUBE UNA FOTO DE TU BANDA"** o arrastra una imagen
2. La foto se cargará y mostrará en la tarjeta de The Strokes
3. La foto permanece en la sesión (se pierde al recargar)

### Explorar Información
- **Información Rápida:** Géneros, origen, años activos, miembros (4 columnas)
- **Tours:** Próximas fechas confirmadas con ciudad y venue
- **Discografía:** 6 álbumes desde 2001 hasta 2020
- **Biografía:** Historia completa con línea de tiempo
- **Datos Destacados:** Logros, influencias y hechos curiosos

## 🎯 Datos Incluidos

### The Strokes
- **Origen:** Nueva York, EE.UU.
- **Formación:** 1998
- **Géneros:** Rock Alternativo, Garage Rock, Indie Rock
- **Miembros:** Julian Casablancas (voz), Nick Valensi (guitarra), Albert Hammond Jr. (guitarra), Nikolai Fraiture (bajo), Fabrizio Moretti (batería)
- **Discografía:** 6 álbumes (Is This It, Room on Fire, First Impressions of Earth, Angles, Comedown Machine, The New Abnormal)
- **Tours:** 4 fechas confirmadas (mayo-junio 2024)

## 💾 Datos Estáticos

Todos los datos se encuentran en `src/data/bandData.js`:
```javascript
export const bandData = {
  name: "The Strokes",
  location: "Nueva York, EE.UU.",
  founded: 1998,
  genre: ["Rock Alternativo", "Garage Rock", "Indie Rock"],
  members: [...],
  biography: "...",
  discography: [...],
  upcomingTours: [...],
  highlights: [...]
}
```

## 📱 Responsividad

| Breakpoint | Características |
|-----------|-----------------|
| Desktop (>1200px) | 2 columnas, sidebar visible, grid completo |
| Tablet (768-1200px) | 1-2 columnas, sidebar visible, grid ajustado |
| Mobile (<768px) | 1 columna, menú hamburger, estilos compactos |

## 🎨 Paleta de Colores

```css
--primary-red: #E63946          /* Acentos principales */
--accent-orange: #ff6b35        /* Acentos secundarios */
--dark-bg: #0d0d0d              /* Fondo principal */
--darker-bg: #1a1a1a            /* Fondo secundario */
--card-bg: #2a2a2a              /* Fondo de cards */
--text-light: #ffffff           /* Texto principal */
--text-gray: #cccccc            /* Texto secundario */
--border-color: #444444         /* Bordes */
```

## 📦 Dependencias

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^8.0.9",
    "eslint": "^9.0.0",
    "@eslint/js": "^9.0.0"
  }
}
```

## ✅ Checklist de Funcionalidades

- [x] Página principal con información de banda
- [x] Upload de fotos con drag & drop
- [x] Menú sidebar con navegación visual
- [x] Información de miembros
- [x] Discografía con álbumes
- [x] Próximas fechas de tours
- [x] Biografía e historia
- [x] Datos destacados (Grammy, influencias, etc.)
- [x] Diseño responsive
- [x] Tema dark con acentos rojo/naranja
- [x] Estilos CSS modular con variables
- [x] Componentes React reutilizables
- [x] FileReader API para carga de imágenes

## 🔮 Posibles Mejoras Futuras

1. **Múltiples Bandas** — Agregar más bandas y selector de banda
2. **Persistencia** — LocalStorage para guardar foto cargada
3. **Búsqueda** — Filtrar bandas por género, año, etc.
4. **Enrutamiento** — React Router para navegación entre vistas
5. **API Integration** — Conectar con Spotify, LastFM, etc.
6. **Dark/Light Mode** — Toggle entre temas
7. **Favoritas** — Guardar bandas favoritas
8. **Comentarios** — Sistema de comentarios
9. **Backend** — Express/Node.js para datos dinámicos
10. **Base de Datos** — MongoDB/PostgreSQL para persistencia

## 📝 Notas de Desarrollo

- **Foto local:** La imagen se carga usando `FileReader API` y `URL.createObjectURL()`
- **Sin persistencia:** Al recargar la página, la foto se pierde (comportamiento esperado)
- **Sin BD:** Todos los datos son estáticos en `bandData.js`
- **CSS modular:** Todas las clases usan nomenclatura BEM modificada
- **Variables CSS:** Facilita cambio de tema y colores

## 🧪 Testing Manual

1. Verificar que todos los componentes renderizan correctamente
2. Probar upload de foto en diferentes formatos (JPG, PNG)
3. Verificar responsive en Chrome DevTools (desktop, tablet, mobile)
4. Probar hover effects en todos los botones e items
5. Validar que la foto se muestra en la tarjeta principal
6. Confirmar que el menú sidebar funciona visualmente

## 👨‍💻 Autor

**Juan** - AI-103 Tarea 02 - RockInfo

## 📄 Licencia

Este proyecto es parte del curso AI-103. Derechos reservados.

---

**¡Disfruta explorando la información de The Strokes! 🎸**
