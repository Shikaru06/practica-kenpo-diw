# Práctica 3.1: Maquetación Responsive con SASS y Vite

- **Asignatura:** Diseño de Interfaces Web (DIW) - 2º DAW
- **Autor:** Fernando Ortega Lomelí
- **Repositorio en GitHub:** [https://github.com/Shikaru06/practica-kenpo-diw](https://github.com/Shikaru06/practica-kenpo-diw)
- **Página desplegada en GitHub Pages:** [https://shikaru06.github.io/practica-kenpo-diw/](https://shikaru06.github.io/practica-kenpo-diw/)
- **Prototipo en Figma:** [https://www.figma.com/design/ODSs9L9ICIIdQ3lodIRxbN](https://www.figma.com/design/ODSs9L9ICIIdQ3lodIRxbN)

---

## Descripción de la Práctica

Maquetación web responsive de dos páginas (**Landing Page** y **Formulario de Contacto**) para la escuela de artes marciales "Kenpo Dojo", realizada a partir del diseño previo en **Figma** y desarrollada con **Vite** y **SASS**.

### Características principales:
- **Prototipo en Figma:** Diseñado con sistema de rejilla de 12 columnas en escritorio y 4 columnas en móvil, definiendo variables de color y tipografía.
- **HTML Semántico:** Uso de etiquetas estructurales (`<header>`, `<nav>`, `<main>`, `<section>`, `<form>`, `<label>`, `<footer>`).
- **SASS Modular:** Estructurado en parciales (`_variables.scss`, `_mixins.scss`, `_globals.scss`, `_layout.scss`, `_components.scss` y `main.scss`) usando la directiva `@use`.
- **Responsive:** Gestión de media queries mediante un mapa SASS de breakpoints y un mixin reutilizable, pasando de 3 columnas en escritorio a 1 columna apilada en pantallas móviles con menú desplegable.
- **Formulario:** Página de contacto accesible con validación básica de campos y diseño adaptable.

---

## Instrucciones de Ejecución

Para probar el proyecto en local:

1. **Instalar dependencias** (necesita Node.js):
   ```bash
   npm install
   ```

2. **Arrancar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

3. **Compilar para producción (genera la carpeta `docs/` para GitHub Pages):**
   ```bash
   npm run build
   ```

4. **Previsualizar la versión de producción:**
   ```bash
   npm run preview
   ```
