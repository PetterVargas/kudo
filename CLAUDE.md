# Kudo - Libro Abierto de Ciberseguridad

Este proyecto es un monorepo que contiene el framework completo de **Kudo**, el framework open-source integral de políticas, procedimientos y controles de seguridad para Latinoamérica, desarrollado por DivisionCero.

## 🏗️ Tecnologías

- **Framework**: Next.js 15.4.2 con React 19.1.0
- **Documentation**: Fumadocs (fumadocs-ui 15.6.5, fumadocs-mdx 11.7.0, fumadocs-core 15.6.5)
- **Styling**: Tailwind CSS 4.1.11
- **Content**: MDX con soporte para matemáticas (KaTeX) y diagramas (Mermaid)
- **Package Manager**: pnpm
- **TypeScript**: 5.8.3
- **Validation**: Zod 4.0.5

## 📁 Estructura del Proyecto (Monorepo)

Este es un monorepo que contiene:

```
kudo/
├── app/                          # Portal de documentación (Next.js App Router)
│   ├── (home)/                   # Landing page y páginas principales
│   │   ├── page.tsx             # Landing principal
│   │   └── layout.tsx           # Layout home
│   ├── [...slug]/                # Páginas dinámicas de docs
│   │   ├── page.tsx             # Renderizado de docs
│   │   └── layout.tsx           # Layout de docs
│   ├── api/search/               # API de búsqueda
│   │   └── route.ts             # Endpoint de búsqueda
│   ├── layout.tsx                # Layout global
│   └── layout.config.tsx         # Configuración navbar y navegación
├── content/                      # Contenido MDX del portal
│   ├── blog/                     # Artículos del blog
│   └── docs/                     # Documentación principal
│       ├── index.mdx            # Página índice de docs
│       ├── meta.json            # Metadata de navegación
│       ├── adr/                 # Dominio: Análisis, Detección y Respuesta
│       ├── cap/                 # Dominio: Ciberseguridad en Aplicaciones
│       ├── ccn/                 # Dominio: Continuidad y Cambios del Negocio
│       ├── cip/                 # Dominio: Identidad y Puntos Finales
│       ├── cif/                 # Dominio: Ciberseguridad en Infraestructura
│       ├── cor/                 # Dominio: Coherencia Organizacional
│       ├── dia/                 # Dominio: Datos e Inteligencia Artificial
│       ├── thp/                 # Dominio: Talento Humano y Proveedores
│       ├── framework/           # Documentación detallada del framework
│       │   ├── index.mdx       # Introducción al framework Kudo
│       │   ├── adr-analisis-deteccion-y-respuesta-de-ciberseguridad/
│       │   ├── cap-ciberseguridad-en-aplicaciones/
│       │   ├── ccn-continuidad-y-cambios-del-negocio/
│       │   ├── cip-ciberseguridad-en-identidad-y-puntos-finales/
│       │   ├── cif-ciberseguridad-en-infraestructura/
│       │   ├── cor-coherencia-organizacional/
│       │   ├── dia-ciberseguridad-en-datos-e-inteligencia-artificial/
│       │   ├── thp-ciberseguridad-en-talento-humano-y-proveedores/
│       │   ├── correlacion-kudo-iso-27001-2022.mdx
│       │   ├── correlacion-kudo-cloud-security-alliance.mdx
│       │   ├── matriz-controles-nube-mcn.mdx
│       │   ├── responsabilidad-compartida.mdx
│       │   └── OSCAL/          # Open Security Controls Assessment Language
│       ├── politicas/           # Templates de políticas (25 documentos .md)
│       ├── cuestionarios/       # Cuestionarios de evaluación
│       └── components/          # Componentes de documentación
├── create-kudo-app/              # CLI para crear proyectos Kudo
│   ├── src/                      # Código fuente del CLI
│   │   ├── index.ts             # Entry point del CLI
│   │   ├── constants.ts         # Constantes
│   │   └── prompts.ts           # Prompts interactivos
│   ├── bin/                      # Ejecutables
│   │   └── cli.js               # Script ejecutable
│   ├── dist/                     # Compilado TypeScript
│   ├── test-app/                # Aplicación de prueba
│   ├── package.json             # Publicado en npm como create-kudo-app
│   └── README.md                # Documentación del CLI
├── components/                   # Componentes React
│   ├── page-actions.tsx         # Acciones de página
│   ├── rate.tsx                 # Sistema de calificación
│   └── ui/                      # Componentes UI reutilizables
├── lib/                          # Utilities y configuración
│   ├── source.ts                # Configuración de source de Fumadocs
│   ├── utils.ts                 # Utilidades generales
│   ├── cn.ts                    # Class name utilities
│   └── get-llm-text.ts          # Utilidades para LLM
├── .github/                      # GitHub workflows
│   └── workflows/
│       ├── ci.yml               # CI para create-kudo-app
│       └── publish.yml          # Publicación a npm
├── source.config.ts             # Configuración de Fumadocs MDX
└── package.json                 # Dependencias principales
```

## 🎯 Framework Kudo

### Dominios de Seguridad

Kudo está organizado en 8 dominios de seguridad que cubren todos los aspectos de la ciberseguridad organizacional:

1. **COR - Coherencia Organizacional**: Gobernanza y estructura organizacional
2. **CIP - Ciberseguridad en Identidad y Puntos Finales**: Gestión de identidades y dispositivos
3. **CIF - Ciberseguridad en Infraestructura**: Seguridad en infraestructura y redes
4. **CAP - Ciberseguridad en Aplicaciones**: Desarrollo seguro y AppSec
5. **CCN - Continuidad y Cambios del Negocio**: Gestión de cambios y continuidad
6. **ADR - Análisis, Detección y Respuesta de Ciberseguridad**: Detección y respuesta a incidentes
7. **THP - Ciberseguridad en Talento Humano y Proveedores**: Gestión de personas y proveedores
8. **DIA - Ciberseguridad en Datos e Inteligencia Artificial**: Protección de datos e inteligencia artificial

### Contenido

- **25 templates de políticas** organizacionales listas para usar (formato Markdown)
- **Controles de seguridad** específicos por dominio (baseline por cada dominio)
- **Herramientas y recursos** para implementación
- **Cuestionarios de evaluación** para cada dominio
- **Matriz de Controles de Nube (MCN)** para gestión de seguridad cloud
- **Correlaciones** con ISO 27001:2022, Cloud Security Alliance y otros frameworks
- **Soporte OSCAL** (Open Security Controls Assessment Language) para interoperabilidad
- **~70 archivos MDX** de documentación técnica

## 🚀 Productos Principales

### 🛡️ Portal de Documentación Kudo
El sitio web de documentación completa del framework, construido con Next.js y Fumadocs.

### 📦 @divisioncero/create-kudo-app - CLI Oficial

CLI para crear nuevas aplicaciones Kudo con templates de políticas de ciberseguridad.

**Instalación y uso:**
```bash
pnpm create @divisioncero/kudo-app
# o
npm create @divisioncero/kudo-app
# o
npx @divisioncero/create-kudo-app
```

**Características del CLI:**
- ✅ Scaffolding interactivo con @clack/prompts
- ✅ Next.js 15 + React 19 + TypeScript pre-configurado
- ✅ Fumadocs integrado y configurado
- ✅ Templates de políticas incluidos
- ✅ Soporte MDX con matemáticas (KaTeX) y diagramas (Mermaid)
- ✅ Blog opcional
- ✅ Configuración completa lista para producción

**Tecnologías del CLI:**
- Commander.js para CLI
- @clack/prompts para interactividad
- fs-extra para operaciones de archivos
- execa para ejecutar comandos
- ora para spinners y feedback visual
- picocolors para colores en terminal

**Publicación:**
- Paquete: `@divisioncero/create-kudo-app` en npm (v0.1.0)
- CI/CD automatizado con GitHub Actions y Trusted Publishing
- Requiere Node.js >=20.0.0
- Provenance automática para mayor seguridad

## 🚀 Comandos de Desarrollo

### Portal de Documentación
```bash
# Desarrollo local
pnpm run dev

# Build para producción
pnpm run build

# Exportar sitio estático
pnpm run export

# Procesar archivos MDX
pnpm run postinstall

# Iniciar servidor de producción
pnpm run start
```

### create-kudo-app
```bash
cd create-kudo-app

# Desarrollo con watch mode
pnpm run dev

# Build del CLI
pnpm run build

# Ejecutar tests
pnpm run test
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
- **Formato**: Markdown (.md)
- **Contexto empresarial**: DivisionCero (empresa SaaS hipotética)
- **Roles definidos**: CEO, CISO, CTO, equipos especializados
- **Versionado**: Semántico (vX.Y.Z)
- **Control de cambios**: Git con Pull Requests
- **Ubicación**: `/content/docs/politicas/`

### Documentación del Framework
- **Formato**: MDX (.mdx) para mayor interactividad
- **Componentes**: Uso de componentes React dentro del contenido
- **Matemáticas**: LaTeX renderizado con KaTeX
- **Diagramas**: Mermaid para visualizaciones

## 🔧 Configuración Técnica

### Source Configuration (`source.config.ts`)
- **Soporte matemáticas**: KaTeX con plugins remark-math y rehype-katex
- **Procesamiento MDX**: Plugins personalizados con fumadocs-mdx
- **Schemas validados**: Zod para frontmatter y metadatos
- **Git integration**: Last modified time desde Git (`lastModifiedTime: 'git'`)
- **Colecciones**: Blog posts con autor y fecha

### Layout Configuration (`app/layout.config.tsx`)
- Configuración del navbar y navegación principal
- Enlaces a productos y recursos de DivisionCero
- Integración con redes sociales y GitHub

### Features Habilitadas
- **Búsqueda**: API endpoint en `/app/api/search/route.ts`
- **Matemáticas**: Renderizado de LaTeX con KaTeX (rehype-katex v7.0.1)
- **Diagramas**: Mermaid (v11.9.0) para organigramas y flujos de proceso
- **Temas**: Next-themes (v0.4.6) para modo oscuro/claro
- **Iconos**: Lucide React (v0.511.0)
- **Syntax highlighting**: Shiki (v3.11.0) con @shikijs/rehype para bloques de código
- **Componentes interactivos**: Page actions y sistema de rating
- **LLM integration**: Utilidades para procesamiento de texto con LLM
- **Markdown avanzado**: remark-gfm (v4.0.1) para GitHub Flavored Markdown

## 📋 Workflows Principales

### Para Contenido de Kudo

#### Agregar/Editar Políticas
1. Navegar a `/content/docs/politicas/`
2. Crear/editar archivos `.md` (Markdown simple)
3. Seguir estructura de políticas establecida (contexto DivisionCero, roles, versionado)
4. Actualizar `meta.json` si es necesario
5. Validar con desarrollo local: `pnpm run dev`

#### Agregar Controles por Dominio (Baselines)
1. Para controles resumidos: navegar a `/content/docs/[dominio]/` (adr, cap, ccn, cip, cif, cor, dia, thp)
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

#### Agregar Cuestionarios
1. Navegar a `/content/docs/cuestionarios/`
2. Crear/editar archivos de cuestionarios en formato MDX
3. Usar componentes interactivos cuando sea apropiado

### Para Blog
1. Crear archivos en `/content/blog/`
2. Incluir frontmatter con `author` y `date` (formato ISO)
3. Seguir schema definido en `source.config.ts`
4. El blog se renderiza en `/blog` automáticamente

### Para create-kudo-app

#### Modificar Templates
1. Navegar a `/create-kudo-app/src/templates/`
2. Editar archivos de template
3. Actualizar prompts en `src/prompts.ts` si es necesario
4. Build y test: `pnpm build && pnpm test`

#### Actualizar CLI
1. Modificar código en `/create-kudo-app/src/`
2. Build: `pnpm build`
3. Test localmente: `node bin/cli.js` en test-app
4. Commit y push para activar CI

## 🎨 Componentes Disponibles

### Componentes Propios
- **page-actions.tsx**: Acciones de página (compartir, imprimir, etc.)
- **rate.tsx**: Sistema de calificación de contenido
- **ui/button.tsx**: Botones reutilizables con variantes

### Componentes de Fumadocs (MDX)
- **Cards**: Para enlaces de navegación y destacados
- **Callouts**: Para información importante, warnings, tips
- **Mermaid**: Para diagramas, organigramas y flujos de proceso
- **Files/Folder**: Para mostrar estructura de archivos y directorios
- **Accordions**: Para contenido colapsable
- **Tabs**: Para contenido organizado en pestañas
- **Code blocks**: Con syntax highlighting (Shiki) y soporte para múltiples lenguajes

## 🌐 Despliegue

### Portal de Documentación

El sitio está configurado para exportación estática:

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

### @divisioncero/create-kudo-app (npm)

**CI/CD Automatizado con Trusted Publishing:**
- **CI Workflow** (`.github/workflows/ci.yml`):
  - Se ejecuta en push/PR a main/develop
  - Tests en Node.js 20.x y 22.x
  - Build y verificación TypeScript

- **Publish Workflow** (`.github/workflows/publish.yml`):
  - Se activa con tags `v*` (ej: `v0.1.0`)
  - Build y publicación a npm con provenance
  - Usa Trusted Publishing (OIDC) - no requiere NPM_TOKEN
  - Mayor seguridad contra ataques de supply chain

**Publicación Manual:**
```bash
cd create-kudo-app
pnpm build
pnpm publish --provenance --access public
```

**Ventajas de Trusted Publishing:**
- No requiere gestionar tokens de npm
- npm verifica automáticamente que el paquete viene del repo GitHub oficial
- Genera provenance (trazabilidad de compilación)
- Recomendado por npm para máxima seguridad

## 📖 Enlaces Útiles

- **Documentación Fumadocs**: [fumadocs.dev](https://fumadocs.dev)
- **Next.js 15 Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **KaTeX**: [katex.org](https://katex.org) - Renderizado matemático
- **Mermaid**: [mermaid.js.org](https://mermaid.js.org) - Diagramas
- **Shiki**: [shiki.style](https://shiki.style) - Syntax highlighting
- **Kit de Ciberseguridad**: [divisioncero.com](https://divisioncero.com/home/kit-inicio-ciberseguridad)
- **Commander.js**: [github.com/tj/commander.js](https://github.com/tj/commander.js) - CLI framework
- **Clack**: [github.com/natemoo-re/clack](https://github.com/natemoo-re/clack) - Prompts hermosos

## 🔑 Conceptos Clave

### Monorepo
Este proyecto es un monorepo que contiene:
- **Portal de documentación**: Sitio web Next.js con todo el contenido
- **@divisioncero/create-kudo-app**: CLI publicado en npm para scaffolding de proyectos
- **Contenido compartido**: Templates, políticas y documentación utilizados por ambos

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

### CLI Scaffolding
create-kudo-app utiliza un patrón común de scaffolding:
1. Prompts interactivos para recopilar opciones del usuario
2. Copia de templates base
3. Personalización según opciones seleccionadas
4. Instalación de dependencias
5. Inicialización Git (opcional)

## 🤝 Contribuir

### Para el Portal de Documentación
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza cambios en `/content/docs/` o `/app/`
4. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
5. Push a la rama (`git push origin feature/nueva-funcionalidad`)
6. Crea un Pull Request

### Para create-kudo-app
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/cli-mejora`)
3. Realiza cambios en `/create-kudo-app/src/`
4. Build y test: `cd create-kudo-app && pnpm build`
5. Verifica que el CI pase localmente
6. Commit tus cambios (`git commit -am 'Mejora CLI'`)
7. Push a la rama (`git push origin feature/cli-mejora`)
8. Crea un Pull Request

## 📊 Estadísticas del Proyecto

- **Políticas**: 25 templates en formato Markdown
- **Dominios**: 8 dominios de seguridad
- **Archivos MDX**: ~70 documentos técnicos
- **Frameworks soportados**: ISO 27001:2022, Cloud Security Alliance
- **Node.js**: >=20.0.0 requerido
- **Versión CLI**: 0.1.0

## 📄 Licencia

Este proyecto está bajo la Licencia MIT/Open Source. Ver `LICENSE` para más detalles.

---

**Hecho con 💚 por y para la comunidad de Ciberseguridad de LatAm**
