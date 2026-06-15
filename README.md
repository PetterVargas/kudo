# Kudo - DivisionCero

> **Framework de Ciberseguridad por y para LatAm**

Documentación completa de **Kudo**, el framework open-source de Ciberseguridad para Latinoamérica.

## 🚀 @divisioncero/create-kudo-app - CLI Oficial

Inicia tu proyecto Kudo en segundos:

```bash
pnpm create @divisioncero/kudo-app
```

**Incluye:**
- Next.js 16 + React 19 + TypeScript
- 25+ templates de políticas en 8 dominios de seguridad
- Fumadocs pre-configurado
- Soporte MDX con matemáticas y diagramas
- Blog incluido
- Configuración completa lista para producción
- Publicación segura con Trusted Publishing

Ver [documentación completa](./create-kudo-app/README.md)

## 📁 Estructura del Proyecto

Este es un monorepo que contiene:

```
kudo/
├── app/                          # Portal de documentación (Next.js)
│   ├── (home)/                   # Landing page y páginas principales
│   ├── framework/                # Sección del framework Kudo
│   │   └── [[...slug]]/          # Páginas dinámicas del framework
│   ├── sgsi/                     # Sistema de Gestión de Seguridad de la Información
│   │   └── [[...slug]]/          # Políticas y lineamientos
│   ├── blog/                     # Blog
│   ├── api/search/               # API de búsqueda (Orama)
│   ├── og/                       # Imágenes Open Graph
│   └── layout.config.tsx         # Configuración de navegación
├── content/                      # Contenido MDX del portal
│   ├── blog/                     # Artículos del blog
│   ├── framework/                # Documentación del framework Kudo
│   │   ├── overview/             # Vista general y dominios
│   │   ├── correlacion/          # Correlaciones con estándares (ISO 27001, CSA, OSCAL)
│   │   ├── cuestionarios/        # Cuestionarios de evaluación
│   │   └── [dominios]/           # 8 dominios (COR, CIP, CIF, CAP, CCN, ADR, THP, DIA)
│   └── sgsi/                     # Sistema de Gestión de Seguridad
│       ├── politicas/            # 25+ templates de políticas organizacionales
│       └── lineamientos/         # Lineamientos de seguridad
├── components/                   # Componentes React reutilizables
│   ├── mdx/                      # Componentes MDX personalizados
│   ├── ui/                       # Componentes de interfaz
│   └── graph-view.tsx            # Visualización de grafo de conocimiento
├── create-kudo-app/              # CLI para crear proyectos Kudo
│   ├── src/                      # Código fuente del CLI
│   │   ├── templates/            # Templates base del proyecto
│   │   └── index.ts              # Entry point del CLI
│   ├── bin/                      # Ejecutables
│   └── package.json              # Publicado en npm como @divisioncero/create-kudo-app
├── scripts/
│   ├── lint.ts                   # Validación de enlaces internos
│   └── export-pdf.ts             # Exportación a PDF con Puppeteer
├── lib/                          # Utilities y configuración
└── source.config.ts              # Configuración de Fumadocs
```

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm run dev

# Verificar tipos (TypeScript + Fumadocs)
pnpm run types:check

# Validar enlaces internos
pnpm run lint:links

# Build para producción (exportación estática)
pnpm run build

# Servir build estático localmente
pnpm run start

# Exportar documentación a PDF
pnpm run export:pdf
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Tecnologías

- **Framework**: Next.js 16.2.7 con React 19.2.7
- **Documentation**: Fumadocs 16.9.3 (UI y MDX)
- **Styling**: Tailwind CSS 4.3.0
- **Content**: MDX con soporte para matemáticas (KaTeX) y diagramas (Mermaid)
- **Search**: Orama (búsqueda full-text en el cliente)
- **Graphs**: D3 Force + react-force-graph-2d
- **Package Manager**: pnpm
- **TypeScript**: 6.0.3

## 🎯 Productos Principales

### 🛡️ Kudo - Framework de Ciberseguridad

- **8 Dominios** de seguridad estructurados.
- **25+ Templates** de políticas organizacionales.
- **Cuestionarios** de evaluación por dominio.
- **Correlaciones** con ISO 27001:2022, Cloud Security Alliance y OSCAL.
- **Vista de grafo** del conocimiento entre dominios y controles.
- **Diseñado específicamente** para el contexto de LatAm.

### 📋 Dominios del Framework

| Dominio | Nombre | Descripción |
|---------|--------|-------------|
| COR | Coherencia Organizacional | Gobernanza y estructura |
| CIP | Ciberseguridad en Identidad y Puntos Finales | Identidades y dispositivos |
| CIF | Ciberseguridad en Infraestructura | Infraestructura y redes |
| CAP | Ciberseguridad en Aplicaciones | Desarrollo seguro y AppSec |
| CCN | Continuidad y Cambios del Negocio | Gestión de cambios y continuidad |
| ADR | Análisis, Detección y Respuesta | Detección y respuesta a incidentes |
| THP | Talento Humano y Proveedores | Gestión de personas y proveedores |
| DIA | Datos e Inteligencia Artificial | Protección de datos e IA |

### 📄 SGSI - Políticas y Lineamientos

Más de 25 templates de documentos listos para adaptar, incluyendo:

- Política de Seguridad de la Información
- Política de Gestión de Accesos
- Política de Gestión de Incidentes
- Política de Gestión de Riesgos
- Política de Desarrollo Seguro
- Política de Servicios en la Nube
- Política de Seguridad ICS/OT
- Plan de Continuidad de Negocio
- Y muchos más...

## 🎨 Características

- **Tema oscuro/claro**: Soporte completo con next-themes
- **Búsqueda avanzada**: Full-text search con Orama en el cliente
- **Matemáticas**: Renderizado LaTeX con KaTeX
- **Diagramas**: Soporte Mermaid para organigramas y flujos
- **Grafo de conocimiento**: Visualización interactiva D3 Force
- **Exportación PDF**: Scripts para generar PDFs con Puppeteer
- **Validación de enlaces**: Lint integrado de links internos
- **Responsive**: Diseño optimizado para todos los dispositivos
- **Performance**: Exportación estática optimizada (`output: 'export'`)
- **OG Images**: Generación automática de imágenes para redes sociales

## 🔧 Configuración

### Source Configuration (`source.config.ts`)
- Soporte para matemáticas con KaTeX
- Procesamiento MDX con plugins personalizados
- Schemas de frontmatter validados con Zod

### Layout Configuration (`app/layout.config.tsx`)
- Configuración del navbar y navegación
- Menú de dominios con descripción por ítem
- Links a Login y Registro en divisioncero.com
- Integración con GitHub

## 📖 Recursos

- **[Fumadocs](https://fumadocs.dev)** - Framework de documentación
- **[Next.js Documentation](https://nextjs.org/docs)** - React framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[KaTeX](https://katex.org)** - Renderizado matemático
- **[Mermaid](https://mermaid.js.org)** - Generación de diagramas
- **[Orama](https://oramasearch.com)** - Motor de búsqueda
- **[Kit de Ciberseguridad](https://divisioncero.com/home/kit-inicio-ciberseguridad)** - Recursos adicionales

## 📄 Licencia

Este proyecto está bajo la Licencia Open Source. Ver `LICENSE` para más detalles.

---

**Hecho con 💚 por y para la comunidad de Ciberseguridad de LatAm**
