## 🥋 Resumen del Proyecto

Este proyecto consiste en la maquetación web responsive de dos páginas (**Landing Page** y **Formulario de Contacto**) diseñadas previamente en **Figma** y desarrolladas utilizando **Vite** y **SASS moderno**.

- **Figma Design:** Prototipo con rejilla de 12 columnas en escritorio y 4 columnas en móvil.
- **HTML Semántico:** Uso exhaustivo de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<footer>`).
- **SASS Modular:** Arquitectura de estilos dividida en parciales mediante la directiva `@use`.

---

## 📁 Estructura del Proyecto

```text
├── docs/                       
│   ├── index.html
│   ├── formulario.html
│   └── assets/
├── src/
│   ├── assets/                  
│   ├── styles/
│   │   ├── _variables.scss      # Colores, tipografías y mapa de breakpoints
│   │   ├── _mixins.scss        
│   │   ├── _globals.scss        
│   │   ├── _layout.scss         # Estructura
│   │   ├── _components.scss     # Botones, tarjetas interactivas y formulario
│   │   └── main.scss           
│   └── main.js                 
├── index.html                   # Página 1: Landing Page
├── formulario.html              # Página 2: Formulario de Contacto
├── package.json
└── vite.config.js               # Configuración multi-página y salida a docs/
```

---

## 🌐 Despliegue en GitHub Pages

https://shikaru06.github.io/practica-kenpo-diw/index.html
