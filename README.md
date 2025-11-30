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

### 🚀 @divisioncero/create-kudo-app - CLI Oficial

Inicia tu proyecto Kudo en segundos:

```bash
pnpm create @divisioncero/kudo-app
```

**Incluye:**
- ✅ Next.js 15 + React 19 + TypeScript
- ✅ 25+ templates de políticas en 8 dominios de seguridad
- ✅ Fumadocs pre-configurado
- ✅ Soporte MDX con matemáticas y diagramas
- ✅ Blog opcional
- ✅ Configuración completa lista para producción
- ✅ Publicación segura con Trusted Publishing

Ver [documentación completa](./create-kudo-app/README.md)

## 📁 Estructura del Proyecto

Este es un monorepo que contiene:

```
kudo/
├── app/                          # Portal de documentación (Next.js)
│   ├── (home)/                   # Landing page y páginas principales
│   ├── [...slug]/                # Páginas dinámicas de docs
│   ├── api/search/               # API de búsqueda
│   └── layout.config.tsx         # Configuración de navegación
├── content/                      # Contenido MDX del portal
│   ├── blog/                     # Artículos del blog
│   └── docs/                     # Documentación del framework Kudo
│       ├── politicas/            # 25+ templates de políticas
│       ├── framework/            # Documentación detallada
│       └── [dominios]/           # 8 dominios de seguridad (COR, CIP, CIF, CAP, CCN, ADR, THP, DIA)
├── create-kudo-app/              # CLI para crear proyectos Kudo
│   ├── src/                      # Código fuente del CLI
│   │   ├── templates/            # Templates base del proyecto
│   │   └── index.ts              # Entry point del CLI
│   ├── bin/                      # Ejecutables
│   └── package.json              # Publicado en npm como @divisioncero/create-kudo-app
├── lib/                          # Utilities y configuración
└── source.config.ts              # Configuración de Fumadocs
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
