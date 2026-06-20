# Guía de Uso - create-kudo-app

Esta guía te ayudará a usar `create-kudo-app` para crear nuevos proyectos de documentación de Ciberseguridad basados en el framework Kudo.

## Instalación

No necesitas instalar `create-kudo-app` globalmente. Ejecútalo directamente:

### npm
```bash
npm create kudo-app
npm create kudo-app mi-empresa-security
```

### pnpm (Recomendado)
```bash
pnpm create kudo-app
pnpm create kudo-app mi-empresa-security
```

### yarn
```bash
yarn create kudo-app
yarn create kudo-app mi-empresa-security
```

## Modo Interactivo

Al ejecutar sin argumentos, el CLI te guía paso a paso:

```bash
pnpm create kudo-app
```

### Preguntas del modo interactivo

1. **Nombre del proyecto** — nombre del directorio que se creará
2. **Package manager** — `pnpm` (recomendado), `npm` o `yarn`
3. **¿Incluir blog?** — agrega `content/blog/` con posts de ejemplo
4. **Dominios a incluir** — selección múltiple de los 8 dominios Kudo
5. **Políticas** — selección de las políticas disponibles en los dominios elegidos

## Opciones de CLI

```
Arguments:
  project-name                    Nombre del proyecto (opcional)

Options:
  -V, --version                   Versión de create-kudo-app
  -p, --package-manager <pm>      Package manager: npm | pnpm | yarn
  -h, --help                      Ayuda
```

### Ejemplos

```bash
# Interactivo completo
pnpm create kudo-app

# Con nombre predefinido (sigue siendo interactivo para el resto)
pnpm create kudo-app mi-empresa

# Especificar package manager
pnpm create kudo-app mi-empresa -p npm
```

## Estructura del proyecto generado

```
mi-empresa/
├── app/
│   ├── (home)/
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Layout con banner y footer
│   │   └── blog/
│   │       ├── page.tsx          # Listado de posts
│   │       └── [slug]/page.tsx   # Post individual
│   ├── framework/
│   │   ├── layout.tsx            # DocsLayout con tabs de sección
│   │   └── [[...slug]]/page.tsx  # Páginas del framework
│   ├── sgsi/
│   │   ├── layout.tsx            # DocsLayout con tabs de sección
│   │   └── [[...slug]]/page.tsx  # Páginas del SGSI
│   ├── api/search/route.ts       # Búsqueda estática (framework + sgsi)
│   ├── layout.tsx                # Root layout con Provider
│   ├── layout.config.tsx         # Navbar del home
│   └── global.css
├── components/
│   ├── mdx.tsx                   # getMDXComponents (Twoslash, Mermaid, etc.)
│   ├── mdx/mermaid.tsx           # Renderizador Mermaid
│   ├── page-actions.tsx          # Botón "Abrir con IA"
│   ├── provider.tsx              # RootProvider con búsqueda
│   ├── search.tsx                # Diálogo de búsqueda Orama
│   ├── sub-section-picker.tsx    # Selector de subsección en sidebar
│   └── ui/button.tsx
├── lib/
│   ├── cn.ts                     # tailwind-merge
│   ├── layout.shared.tsx         # baseOptions, sectionTabs, subTabs
│   ├── shared.ts                 # Rutas, appName, gitConfig
│   └── source.ts                 # frameworkSource, sgsiSource, blog
├── content/
│   ├── framework/                # 127 archivos MDX del framework Kudo
│   │   ├── overview/
│   │   ├── cor/ cip/ cif/ cap/ ccn/ adr/ thp/ dia/
│   │   ├── correlacion/          # ISO 27001, PCI DSS, SOC 2, CIS, NIST, CSA...
│   │   └── cuestionarios/
│   ├── sgsi/
│   │   ├── index.mdx
│   │   ├── meta.json
│   │   ├── politicas/            # Políticas seleccionadas por el usuario
│   │   └── lineamientos/
│   └── blog/                     # Posts de ejemplo (si se eligió)
├── next.config.mjs
├── source.config.ts              # frameworkDocs + sgsiDocs + blogPosts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Comandos del proyecto generado

```bash
# Desarrollo
pnpm dev              # Servidor en localhost:3000

# Build y producción
pnpm build            # Compila como sitio estático (output: 'export')
pnpm start            # Sirve el directorio out/

# Verificación de tipos
pnpm types:check      # fumadocs-mdx + tsc --noEmit
```

## Personalización

### Cambiar nombre y branding
Edita `app/layout.config.tsx` — ahí está el logo SVG y el nombre "Kudo" en el navbar del home.  
Para los layouts de docs edita `lib/layout.shared.tsx` → función `baseOptions()`.

### Agregar políticas después
1. Crea un `.md` o `.mdx` en `content/sgsi/politicas/`
2. Agrega el slug al array `"pages"` en `content/sgsi/politicas/meta.json`

```markdown
---
title: "Política de Ejemplo"
description: "Descripción breve"
---

Contenido de la política...
```

### Agregar contenido al framework
Los archivos en `content/framework/` son las páginas del framework Kudo. Puedes editarlos o agregar nuevas secciones creando una carpeta con `index.mdx` y `meta.json`.

### Agregar posts al blog
Crea archivos en `content/blog/` con este frontmatter:

```markdown
---
title: "Título del post"
description: "Descripción"
author: "Tu nombre"
date: "2026-01-01"
---
```

### Cambiar el link de GitHub
Edita `lib/shared.ts`:

```ts
export const gitConfig = {
  user: 'tu-usuario',
  repo: 'tu-repo',
  branch: 'main',
};
```

## Solución de Problemas

### Error: "El directorio ya existe"
El CLI te pregunta si deseas sobrescribirlo. Elige "Sí" o usa otro nombre.

### Falla la instalación de dependencias
```bash
cd mi-empresa
pnpm install
```

### Error en `pnpm dev` — `.source` no encontrado
El script `postinstall` genera ese directorio. Ejecútalo manualmente:
```bash
pnpm postinstall  # alias de: fumadocs-mdx
```

### Puerto 3000 en uso
```bash
PORT=3001 pnpm dev
```

## Recursos

- [Documentación Kudo](https://kudo.divisioncero.com)
- [Fumadocs](https://fumadocs.dev)
- [Next.js](https://nextjs.org/docs)
- [DivisionCero](https://divisioncero.com)
- [Issues](https://github.com/PetterVargas/kudo/issues)
