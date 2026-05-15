# TechBlog - Modern Web Development SPA

![TechBlog Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

TechBlog es una **Single Page Application (SPA)** construida completamente desde cero utilizando **Vanilla JavaScript, HTML5 semántico y CSS3 moderno**. 

Este proyecto fue diseñado con el propósito de demostrar un dominio profundo de los fundamentos del desarrollo web, construyendo características complejas como enrutamiento del lado del cliente, filtrado en tiempo real y animaciones avanzadas sin depender de frameworks pesados como React, Angular o Vue.

## 🚀 Características Principales

- **Enrutamiento SPA Customizado:** Sistema de navegación fluido sin recargas de página, construido mediante la API `History.pushState` nativa de JavaScript.
- **Buscador Dinámico :** Barra de búsqueda integrada en la navegación con filtrado en tiempo real de artículos y lógica de re-dirección automática con *smooth scroll*.

- **Renderizado Condicional y Animaciones:** Revelado de elementos al hacer scroll (`IntersectionObserver`) para una experiencia dinámica.
- **Totalmente Responsivo:** Arquitectura CSS basada en Flexbox y Grid Layout, garantizando una experiencia de usuario perfecta en móviles, tablets y monitores de alta resolución.

## 💻 Stack Tecnológico

Al evitar el uso de dependencias externas, el proyecto garantiza un tiempo de carga (TTFB) extremadamente rápido y una huella de memoria mínima en el navegador.

- **Frontend:** HTML5 (Estructura semántica), CSS3 (Variables, Animaciones, Media Queries)
- **Lógica & Estado:** JavaScript Moderno (ES6+, Manipulación del DOM, Event Listeners)
- **Despliegue:** Preparado para ser servido estáticamente en plataformas como Vercel, Netlify o GitHub Pages.

## ⚙️ Arquitectura del Proyecto

El código fuente está estructurado de manera modular para garantizar escalabilidad y fácil mantenimiento:

```text
📁 Blog-Desarrollo-aplicaciones
├── 📄 index.html        # Estructura principal y contenedores de vistas
├── 📁 css
│   └── 📄 style.css     # Sistema de diseño, tokens (variables) y responsive design
└── 📁 js
    └── 📄 main.js       # Core de la SPA: Enrutador, observadores y lógica de búsqueda
```

### El Enrutador (Router)
La navegación de la aplicación está controlada por una función central `navigateTo(pageId)` en `main.js`. Esta función administra las clases `.active` de las etiquetas `<main>`, actualiza el estado de los enlaces en la barra de navegación y manipula la URL del navegador permitiendo el uso correcto de los botones "Atrás" y "Adelante" del historial nativo.

## 🛠️ Instalación y Uso Local

Al ser una aplicación puramente estática, no requiere compilación (build steps) ni instalación de paquetes mediante `npm`.

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/TechBlog.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd TechBlog
   ```
3. Ejecuta la aplicación:
   - Simplemente abre el archivo `index.html` en cualquier navegador moderno.
   - Alternativamente, para una experiencia de desarrollo óptima, puedes usar la extensión **Live Server** en VS Code o cualquier servidor estático ligero (`npx serve .`).

## 👨‍💻 Autor

**Andrés Rodríguez**
*Full Stack Developer*

Especializado en JavaScript y el ecosistema Full Stack, con experiencia construyendo interfaces dinámicas, APIs REST, integración de bases de datos y desarrollo de soluciones enfocadas en el rendimiento y mantenibilidad.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/andresisfx)
