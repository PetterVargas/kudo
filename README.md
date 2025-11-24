# DivisionCero Documentation

> **Framework de Ciberseguridad por y para LatAm**

Documentación completa de **Kudo**, el framework open-source de Ciberseguridad para Latinoamérica.

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Exportar sitio estático
pnpm run export
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🏗️ Tecnologías

- **Framework**: Next.js 15.4.2 con React 19.1.0
- **Documentation**: Fumadocs (UI y MDX)
- **Styling**: Tailwind CSS 4.1.11
- **Content**: MDX con soporte para matemáticas (KaTeX) y diagramas (Mermaid)
- **Package Manager**: pnpm
- **TypeScript**: 5.8.3

## 🎯 Productos Principales

### 🛡️ Kudo - Framework de Ciberseguridad
- **25+ Templates** de políticas organizacionales.
- **8 Dominios** de seguridad estructurados.
- **Marco completo** de controles y procedimientos.
- **Diseñado específicamente** para el contexto de LatAm.

## 📁 Estructura del Proyecto

```
divisioncero-docs/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Landing page y páginas principales
│   ├── docs/                     # Layout de documentación
│   ├── api/search/               # API de búsqueda
│   └── layout.tsx               # Layout global
├── content/                      # Contenido MDX
│   ├── blog/                     # Artículos del blog
│   ├── docs/                     # Documentación principal
│   │   └── kudo/                 # Framework Kudo
│   │       ├── dominios/         # Baselines por dominios
│   │       └── politicas/        # Templates de políticas (25+)
├── lib/                          # Utilities y configuración
└── source.config.ts             # Configuración de Fumadocs
```

## 📋 Rutas Principales

| Ruta                      | Descripción                                           |
| ------------------------- | ----------------------------------------------------- |
| `/`                       | Landing page con Kudo como protagonista              |
| `/docs/kudo`             | Framework principal de ciberseguridad                |
| `/docs/kudo/politicas`   | 25+ templates de políticas organizacionales          |
| `/docs/kudo#-dominios`    | 8 dominios de seguridad estructurados                |
| `/blog`                   | Artículos y actualizaciones                         |

## 🎨 Características

- **🌙 Tema oscuro/claro**: Soporte completo con next-themes
- **🔍 Búsqueda avanzada**: API endpoint integrado
- **📊 Matemáticas**: Renderizado LaTeX con KaTeX
- **📈 Diagramas**: Soporte Mermaid para organigramas
- **📱 Responsive**: Diseño optimizado para todos los dispositivos
- **⚡ Performance**: Exportación estática optimizada

## 🔧 Configuración

### Source Configuration (`source.config.ts`)
- Soporte para matemáticas con KaTeX
- Procesamiento MDX con plugins personalizados  
- Schemas de frontmatter validados con Zod

### Layout Configuration (`app/layout.config.tsx`)
- Configuración del navbar y navegación
- Enlaces a productos y recursos
- Integración con redes sociales

## 📝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📖 Recursos

- **[Fumadocs](https://fumadocs.dev)** - Framework de documentación
- **[Next.js Documentation](https://nextjs.org/docs)** - React framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[KaTeX](https://katex.org)** - Renderizado matemático
- **[Mermaid](https://mermaid.js.org)** - Generación de diagramas
- **[Kit de Ciberseguridad](https://divisioncero.com/home/kit-inicio-ciberseguridad)** - Recursos adicionales

## 📄 Licencia

Este proyecto está bajo la Licencia Open Source. Ver `LICENSE` para más detalles.

---

**Hecho con 💚 por y para la comunidad de Ciberseguridad de LatAm**
