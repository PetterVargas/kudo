# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-06-19

### Added

#### Estructura dual Framework + SGSI
- Nueva sección `/framework` con los 8 dominios Kudo completos (127 archivos MDX)
- Nueva sección `/sgsi` con políticas y lineamientos del Sistema de Gestión
- `content/framework/` incluye: overview, COR, CIP, CIF, CAP, CCN, ADR, THP, DIA, Correlación (ISO 27001, PCI DSS, SOC 2, CIS Controls, CSA CCM, CSA AICM, NIST CSF), OSCAL y Cuestionarios
- `content/sgsi/` con políticas, lineamientos y estructura base del SGSI

#### Nuevos componentes
- `components/provider.tsx` — `RootProvider` con búsqueda estática personalizada
- `components/search.tsx` — diálogo de búsqueda usando Orama con `useDocsSearch`
- `components/sub-section-picker.tsx` — selector de subsecciones en sidebar
- `components/mdx.tsx` — `getMDXComponents` con soporte completo (Twoslash, Mermaid, Tabs, Steps, etc.)

#### Nuevos archivos lib
- `lib/shared.ts` — constantes de rutas, nombre de app y configuración de git
- `lib/layout.shared.tsx` — `baseOptions()`, `sectionTabs`, `getFrameworkSubTabs()`, `getSgsiSubTabs()`

#### Nuevas rutas de app
- `app/framework/layout.tsx` y `app/framework/[[...slug]]/page.tsx`
- `app/sgsi/layout.tsx` y `app/sgsi/[[...slug]]/page.tsx`

### Changed

#### Dependencias actualizadas
- **Next.js** `15.4.2` → `16.2.7`
- **Fumadocs** `15.6.5` → `16.9.3` (fumadocs-core, fumadocs-ui, fumadocs-mdx)
- **React** `19.1.0` → `^19.2.7`
- **TypeScript** `^5.8.3` → `^6.0.3`
- **Tailwind CSS** `^4.1.11` → `^4.3.0`
- Añadidas: `@orama/orama`, `@floating-ui/react-dom`, `fumadocs-twoslash`, `twoslash`, `feed`

#### Configuración base actualizada
- `source.config.ts` — ahora define `frameworkDocs`, `sgsiDocs` y `blogPosts` con `pageSchema`, `remarkMdxMermaid`, `remarkBlockId` y `transformerTwoslash`
- `next.config.mjs` — añade `serverExternalPackages: ['typescript', 'twoslash']`
- `tsconfig.json` — paths `@/*` y `collections/*`, `jsx: "react-jsx"`, `forceConsistentCasingInFileNames`
- `package.json` generado — nuevos scripts (`types:check`, elimina `export`/`deploy`)

#### Layout y UI
- `app/layout.tsx` — usa `Provider` personalizado en lugar de `RootProvider` directo
- `app/layout.config.tsx` — navbar apunta a rutas internas `/framework`, `/sgsi`, dominios locales
- `app/(home)/layout.tsx` — footer completo con columnas (Acerca de, Productos, Legal) y todas las redes sociales
- `app/global.css` — añade `fumadocs-twoslash/twoslash.css` y estilos de scroll/print
- `app/api/search/route.ts` — indexa tanto `frameworkSource` como `sgsiSource`

#### Organización de contenido
- Políticas movidas de `content/docs/politicas/` → `content/sgsi/politicas/`
- `copy-template.ts` actualizado con los nuevos paths de destino

### Removed
- `app/[...slug]/` — reemplazado por rutas dedicadas `app/framework/` y `app/sgsi/`
- `components/rate.tsx` — eliminado del template
- `lib/get-llm-text.ts` y `lib/utils.ts` — eliminados del template
- `base/mdx-components.tsx` — ya no necesario (fumadocs 16 pasa componentes explícitamente)
- `content/docs/` — reemplazado por `content/framework/` y `content/sgsi/`

---

## [0.1.0] - 2025-11-30

### Added

#### Core Features
- Versión inicial de `@divisioncero/create-kudo-app`
- CLI interactivo con `@clack/prompts`
- Selección de package manager (npm, pnpm, yarn)
- Instalación automática de dependencias
- Inicialización de repositorio Git (opcional)

#### Framework Kudo
- 25+ templates de políticas de ciberseguridad (formato Markdown)
- 8 dominios de seguridad: COR, CIP, CIF, CAP, CCN, ADR, THP, DIA
- Blog integrado para documentación y artículos

#### Tech Stack
- Next.js 15 con React 19 y App Router
- Fumadocs 15 para documentación técnica
- Tailwind CSS 4
- TypeScript 5.8
- MDX con KaTeX, Mermaid y syntax highlighting
- Búsqueda estática integrada
- Modo oscuro/claro
