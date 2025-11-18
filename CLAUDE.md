# Kudo - Libro Abierto de Ciberseguridad

Este proyecto contiene la documentación completa de Kudo, el framework integral de políticas, procedimientos y controles de seguridad de DivisionCero para Latinoamérica.

## 🏗️ Tecnologías

- **Framework**: Next.js 15.4.2 con React 19.1.0
- **Documentation**: Fumadocs (fumadocs-ui 15.6.5, fumadocs-mdx 11.7.0)
- **Styling**: Tailwind CSS 4.1.11
- **Content**: MDX con soporte para matemáticas (KaTeX) y diagramas (Mermaid)
- **Package Manager**: pnpm
- **TypeScript**: 5.8.3
- **Validation**: Zod 4.0.5

## 📁 Estructura del Proyecto

```
divisioncero-docs/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Landing page y blog
│   │   ├── page.tsx             # Landing principal
│   │   ├── blog/                # Rutas del blog
│   │   │   ├── page.tsx        # Lista de posts
│   │   │   └── [slug]/         # Posts individuales
│   │   └── layout.tsx          # Layout home
│   ├── [...slug]/               # Páginas dinámicas de docs
│   │   ├── page.tsx            # Renderizado de docs
│   │   └── layout.tsx          # Layout de docs
│   ├── api/search/              # API de búsqueda
│   │   └── route.ts            # Endpoint de búsqueda
│   ├── layout.tsx               # Layout global
│   └── layout.config.tsx        # Configuración navbar y navegación
├── content/                      # Contenido MDX
│   ├── blog/                     # Artículos del blog
│   └── docs/                     # Documentación principal
│       ├── index.mdx            # Página índice de docs
│       ├── meta.json            # Metadata de navegación
│       ├── adr/                 # Dominio: Análisis, Detección y Respuesta
│       ├── cap/                 # Dominio: Ciberseguridad en Aplicaciones
│       ├── ccn/                 # Dominio: Continuidad y Cambios del Negocio
│       ├── cip/                 # Dominio: Identidad y Puntos Finales
│       ├── cnb/                 # Dominio: Ciberseguridad en Nube
│       ├── cor/                 # Dominio: Coherencia Organizacional
│       ├── dia/                 # Dominio: Datos e Inteligencia Artificial
│       ├── thp/                 # Dominio: Talento Humano y Proveedores
│       ├── framework/           # Documentación detallada del framework
│       │   ├── index.mdx       # Introducción al framework Kudo
│       │   ├── adr-analisis-deteccion-y-respuesta-de-ciberseguridad/
│       │   ├── cap-ciberseguridad-en-aplicaciones/
│       │   ├── ccn-continuidad-y-cambios-del-negocio/
│       │   ├── cip-ciberseguridad-en-identidad-y-puntos-finales/
│       │   ├── cnb-ciberseguridad-en-nube/
│       │   ├── cor-coherencia-organizacional/
│       │   ├── dia-ciberseguridad-en-datos-e-inteligencia-artificial/
│       │   ├── thp-ciberseguridad-en-talento-humano-y-proveedores/
│       │   ├── correlacion-kudo-iso-27001-2022.mdx
│       │   ├── correlacion-kudo-cloud-security-alliance.mdx
│       │   ├── matriz-controles-nube-mcn.mdx
│       │   ├── responsabilidad-compartida.mdx
│       │   └── OSCAL/          # Open Security Controls Assessment Language
│       ├── politicas/           # Templates de políticas (67 documentos)
│       └── components/          # Componentes de documentación
├── components/                   # Componentes React
│   ├── page-actions.tsx         # Acciones de página
│   ├── rate.tsx                 # Sistema de calificación
│   └── ui/                      # Componentes UI reutilizables
├── lib/                          # Utilities y configuración
│   ├── source.ts                # Configuración de source de Fumadocs
│   ├── utils.ts                 # Utilidades generales
│   ├── cn.ts                    # Class name utilities
│   └── get-llm-text.ts          # Utilidades para LLM
└── source.config.ts             # Configuración de Fumadocs MDX
```

## 🎯 Framework Kudo

### Dominios de Seguridad

Kudo está organizado en 8 dominios de seguridad que cubren todos los aspectos de la ciberseguridad organizacional:

1. **COR - Coherencia Organizacional**: Gobernanza y estructura organizacional
2. **CIP - Identidad y Puntos Finales**: Gestión de identidades y dispositivos
3. **CNB - Ciberseguridad en Nube**: Seguridad en infraestructura cloud
4. **CAP - Ciberseguridad en Aplicaciones**: Desarrollo seguro y AppSec
5. **CCN - Continuidad del Negocio**: Gestión de cambios y continuidad
6. **ADR - Análisis y Respuesta**: Detección y respuesta a incidentes
7. **THP - Talento Humano**: Gestión de personas y proveedores
8. **DIA - Datos e IA**: Protección de datos e inteligencia artificial

### Contenido

- **67 templates de políticas** organizacionales listas para usar
- **Controles de seguridad** específicos por dominio (baseline por cada dominio)
- **Herramientas y recursos** para implementación
- **Matriz de Controles de Nube (MCN)** para gestión de seguridad cloud
- **Correlaciones** con ISO 27001:2022, Cloud Security Alliance y otros frameworks
- **Soporte OSCAL** (Open Security Controls Assessment Language) para interoperabilidad

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo local
pnpm run dev

# Build para producción
pnpm run build

# Exportar sitio estático
pnpm run export

# Procesar archivos MDX
pnpm run postinstall
```

## 📝 Convenciones de Contenido

### Frontmatter Estándar
```yaml
---
title: "Título del documento"
description: "Descripción breve"
icon: "Icono" # Opcional
---
```

### Estructura de Políticas (Kudo)
Cada política sigue la estructura:
- **Contexto empresarial**: DivisionCero (empresa SaaS hipotética)
- **Roles definidos**: CEO, CISO, CTO, equipos especializados
- **Versionado**: Semántico (vX.Y.Z)
- **Control de cambios**: Git con Pull Requests

## 🔧 Configuración Técnica

### Source Configuration (`source.config.ts`)
- **Soporte matemáticas**: KaTeX con plugins remark-math y rehype-katex
- **Procesamiento MDX**: Plugins personalizados con fumadocs-mdx
- **Schemas validados**: Zod para frontmatter y metadatos
- **Git integration**: Last modified time desde Git
- **Colecciones**: Blog posts con autor y fecha

### Layout Configuration (`app/layout.config.tsx`)
- Configuración del navbar y navegación principal
- Enlaces a productos y recursos de DivisionCero
- Integración con redes sociales y GitHub

### Features Habilitadas
- **Búsqueda**: API endpoint en `/app/api/search/route.ts`
- **Matemáticas**: Renderizado de LaTeX con KaTeX
- **Diagramas**: Mermaid para organigramas y flujos de proceso
- **Temas**: Next-themes (v0.4.6) para modo oscuro/claro
- **Iconos**: Lucide React (v0.511.0)
- **Syntax highlighting**: Shiki (v3.11.0) para bloques de código
- **Componentes interactivos**: Page actions y sistema de rating
- **LLM integration**: Utilidades para procesamiento de texto con LLM

## 📋 Workflows Principales

### Para Contenido de Kudo

#### Agregar/Editar Políticas
1. Navegar a `/content/docs/politicas/`
2. Crear/editar archivos `.mdx`
3. Seguir estructura de políticas establecida (contexto DivisionCero, roles, versionado)
4. Validar con desarrollo local: `pnpm run dev`

#### Agregar Controles por Dominio (Baselines)
1. Para controles resumidos: navegar a `/content/docs/[dominio]/` (adr, cap, ccn, cip, cnb, cor, dia, thp)
2. Para documentación detallada: navegar a `/content/docs/framework/[dominio-nombre-completo]/`
3. Crear/editar archivos de controles en formato MDX
4. Actualizar `meta.json` del dominio si es necesario
5. Validar con desarrollo local

#### Agregar Correlaciones y Matrices
1. Navegar a `/content/docs/framework/`
2. Editar archivos de correlación existentes o crear nuevos:
   - `correlacion-kudo-iso-27001-2022.mdx`
   - `correlacion-kudo-cloud-security-alliance.mdx`
   - `matriz-controles-nube-mcn.mdx`
   - `responsabilidad-compartida.mdx`
3. Para OSCAL: trabajar en `/content/docs/framework/OSCAL/`

### Para Blog
1. Crear archivos en `/content/blog/`
2. Incluir frontmatter con `author` y `date` (formato ISO)
3. Seguir schema definido en `source.config.ts`
4. El blog se renderiza en `/blog` automáticamente

## 🎨 Componentes Disponibles

### Componentes Propios
- **page-actions.tsx**: Acciones de página (compartir, imprimir, etc.)
- **rate.tsx**: Sistema de calificación de contenido
- **ui/**: Componentes UI reutilizables base

### Componentes de Fumadocs (MDX)
- **Cards**: Para enlaces de navegación y destacados
- **Callouts**: Para información importante, warnings, tips
- **Mermaid**: Para diagramas, organigramas y flujos de proceso
- **Files/Folder**: Para mostrar estructura de archivos y directorios
- **Accordions**: Para contenido colapsable
- **Tabs**: Para contenido organizado en pestañas
- **Code blocks**: Con syntax highlighting (Shiki) y soporte para múltiples lenguajes

## 🌐 Despliegue

El sitio está configurado para exportación estática y desarrollo turbo:

```bash
# Desarrollo con Turbo mode (más rápido)
pnpm run dev

# Build para producción
pnpm run build

# Exportación estática completa
pnpm run predeploy  # Build
pnpm run deploy     # Export con fumadocs-export

# Iniciar servidor de producción
pnpm run start
```

### Proceso de Build
1. `pnpm run build` compila el sitio con Next.js 15
2. `pnpm run export` genera archivos estáticos con fumadocs-export
3. Los archivos estáticos están listos para desplegar en cualquier hosting estático

## 📖 Enlaces Útiles

- **Documentación Fumadocs**: [fumadocs.dev](https://fumadocs.dev)
- **Next.js 15 Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **KaTeX**: [katex.org](https://katex.org) - Renderizado matemático
- **Mermaid**: [mermaid.js.org](https://mermaid.js.org) - Diagramas
- **Shiki**: [shiki.style](https://shiki.style) - Syntax highlighting
- **Kit de Ciberseguridad**: [divisioncero.com](https://divisioncero.com/home/kit-inicio-ciberseguridad)

## 🔑 Conceptos Clave

### Fumadocs
Fumadocs es el framework de documentación que potencia este sitio. Proporciona:
- Generación automática de navegación desde estructura de archivos
- Sistema de búsqueda integrado
- Componentes MDX especializados para documentación técnica
- Soporte para múltiples colecciones de contenido
- Integración con Git para metadatos

### Estructura de Rutas
- **Static routes**: Páginas en `app/(home)/`
- **Dynamic docs**: Páginas en `app/[...slug]/` que renderizan contenido de `/content/docs/`
- **API routes**: Endpoints en `app/api/` para funcionalidad como búsqueda

### MDX
Los archivos `.mdx` permiten combinar Markdown con componentes React, ideal para documentación técnica interactiva.