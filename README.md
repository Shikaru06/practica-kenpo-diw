# Práctica 3.1: Maquetación Responsive con SASS y Vite
> **Diseño de Interfaces Web (DIW) - S2DAW**  
> **Alumno:** Fernando Ortega  
> **Temática:** Kenpo Dojo (Escuela de Artes Marciales y Defensa Personal)

---

## 🥋 Resumen del Proyecto

Este proyecto consiste en la maquetación web responsive de dos páginas (**Landing Page** y **Formulario de Contacto**) diseñadas previamente en **Figma** y desarrolladas utilizando **Vite** y **SASS moderno**.

- **Figma Design:** Prototipo con rejilla de 12 columnas en escritorio y 4 columnas en móvil.
- **HTML Semántico:** Uso exhaustivo de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<footer>`).
- **SASS Modular:** Arquitectura de estilos dividida en parciales mediante la directiva `@use`.

---

## 📁 Estructura del Proyecto

```text
├── docs/                        # Carpeta de salida compilada para GitHub Pages
│   ├── index.html
│   ├── formulario.html
│   └── assets/
├── src/
│   ├── assets/                  # Recursos gráficos
│   ├── styles/
│   │   ├── _variables.scss      # Colores, tipografías y mapa de breakpoints
│   │   ├── _mixins.scss         # Mixin de media queries (respond-to) y mixin button
│   │   ├── _globals.scss        # Reset de CSS y estilos base
│   │   ├── _layout.scss         # Estructura (header, hero, grids, container, footer)
│   │   ├── _components.scss     # Botones, tarjetas interactivas y formulario
│   │   └── main.scss            # Archivo principal que une los módulos con @use
│   └── main.js                  # Punto de entrada JS y menú móvil
├── index.html                   # Página 1: Landing Page
├── formulario.html              # Página 2: Formulario de Contacto
├── package.json
└── vite.config.js               # Configuración multi-página y salida a docs/
```

---

## 🚀 Comandos para Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en servidor local de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Compilar para producción (genera la carpeta `/docs`):**
   ```bash
   npm run build
   ```

4. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 🌐 Despliegue en GitHub Pages

El proyecto ya está configurado con:
- `base: './'` en `vite.config.js` para asegurar que las rutas relativas funcionen sin errores en GitHub Pages.
- `outDir: 'docs'` para que baste con ir a los **Settings > Pages** del repositorio en GitHub, seleccionar la rama `main` y la carpeta `/docs`.
