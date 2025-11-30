# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2025-11-30

### Added

#### Core Features
- 🎉 Initial release of `@divisioncero/create-kudo-app`
- ✨ Interactive CLI with beautiful prompts using `@clack/prompts`
- 📦 Package manager selection (npm, pnpm, yarn)
- 🔧 Automatic dependency installation
- 🎯 Git repository initialization (optional)

#### Framework Kudo
- 🛡️ 25+ templates de políticas de ciberseguridad (formato Markdown)
- 📚 8 dominios de seguridad completos:
  - COR - Coherencia Organizacional
  - CIP - Ciberseguridad en Identidad y Puntos Finales
  - CIF - Ciberseguridad en Infraestructura
  - CAP - Ciberseguridad en Aplicaciones
  - CCN - Continuidad y Cambios del Negocio
  - ADR - Análisis, Detección y Respuesta
  - THP - Talento Humano y Proveedores
  - DIA - Datos e Inteligencia Artificial
- 📝 Controles de seguridad por cada dominio
- 📖 Blog integrado para documentación y artículos

#### Tech Stack
- ⚛️ **Next.js 15** con React 19 y App Router
- 📚 **Fumadocs** para documentación técnica
- 🎨 **Tailwind CSS 4** para estilos
- 📘 **TypeScript 5.8** configurado
- 📄 **MDX** con soporte completo para:
  - 🧮 Matemáticas (KaTeX)
  - 📊 Diagramas (Mermaid)
  - 💻 Syntax highlighting (Shiki)
- 🧩 Componentes React reutilizables
- 🔍 API de búsqueda integrada
- 🌓 Soporte para modo oscuro/claro

#### Developer Experience
- 🚀 Scaffolding rápido y sin configuración
- 📦 Publicado en npm como `@divisioncero/create-kudo-app`
- ✅ Configuración completa lista para producción
- 📋 Estructura de proyecto optimizada
- 🎯 Templates pre-configurados

### Changed
- Simplified CLI flow: siempre incluye todos los dominios y blog
- Removed Google Analytics configuration from initial setup
- Updated navbar to link to external Kudo documentation
- Simplified footer design

### Technical
- CI/CD automatizado con GitHub Actions
- Trusted Publishing configurado (provenance automática)
- Tests en Node.js 20.x y 22.x
- Build automático antes de publicación
