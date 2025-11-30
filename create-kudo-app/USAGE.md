# Guía de Uso - create-kudo-app

Esta guía te ayudará a usar `create-kudo-app` para crear nuevos proyectos de documentación de Ciberseguridad basados en el framework Kudo.

## 📦 Instalación

No necesitas instalar `create-kudo-app` globalmente. Puedes ejecutarlo directamente usando tu package manager favorito:

### npm

```bash
npm create kudo-app
# o con nombre de proyecto
npm create kudo-app my-security-docs
```

### pnpm (Recomendado)

```bash
pnpm create kudo-app
# o con nombre de proyecto
pnpm create kudo-app my-security-docs
```

### yarn

```bash
yarn create kudo-app
# o con nombre de proyecto
yarn create kudo-app my-security-docs
```

## 🎯 Modo Interactivo

Si ejecutas el comando sin argumentos, se iniciará el modo interactivo que te guiará paso a paso:

```bash
pnpm create kudo-app
```

### Preguntas del modo interactivo:

1. **Nombre del proyecto**: El nombre de tu aplicación (se creará un directorio con este nombre)
   - Debe contener solo letras, números, guiones y guiones bajos
   - Ejemplo: `mi-documentacion-cybersec`

2. **Package manager**: ¿Qué herramienta usarás para gestionar dependencias?
   - `pnpm` (Recomendado - más rápido y eficiente)
   - `npm` (Viene con Node.js)
   - `yarn` (Alternativa popular)

## 🚀 Inicio Rápido

Para crear un proyecto con configuración por defecto:

```bash
# Crear proyecto con todos los dominios
pnpm create kudo-app my-docs

# El CLI te preguntará por las opciones
```

Después de crear el proyecto:

```bash
cd my-docs
pnpm install  # Solo si usaste --skip-install
pnpm dev      # Inicia el servidor de desarrollo
```

## 🎛️ Opciones de CLI

### Argumentos

- `[project-name]`: Nombre del proyecto (opcional, se preguntará si no se proporciona)

### Opciones

- `-V, --version`: Muestra la versión de create-kudo-app
- `-h, --help`: Muestra ayuda del comando
- `--skip-install`: No instala las dependencias automáticamente
- `--skip-git`: No inicializa un repositorio Git
- `-p, --package-manager <pm>`: Especifica el package manager (npm, pnpm, yarn)

### Ejemplos

```bash
# Crear proyecto sin instalar dependencias
pnpm create kudo-app my-docs --skip-install

# Crear proyecto sin Git
pnpm create kudo-app my-docs --skip-git

# Crear proyecto con npm como package manager
pnpm create kudo-app my-docs -p npm

# Combinar opciones
pnpm create kudo-app my-docs --skip-install --skip-git -p yarn
```

## 🛠️ Después de Crear el Proyecto

### Estructura generada

```
my-docs/
├── app/                      # Next.js App Router
│   ├── (home)/              # Landing y blog
│   │   ├── page.tsx        # Página principal
│   │   ├── layout.tsx      # Layout home
│   │   └── blog/           # Blog posts
│   ├── [...slug]/          # Docs dinámicas
│   │   ├── page.tsx        # Página de documentación
│   │   └── layout.tsx      # Layout de docs
│   ├── api/search/         # Búsqueda
│   ├── layout.tsx          # Layout global
│   └── layout.config.tsx   # Config navegación
├── content/
│   ├── docs/
│   │   ├── politicas/      # Templates de políticas
│   │   └── framework/      # Docs del framework
│   └── blog/               # Posts del blog
├── components/             # Componentes React
├── lib/                    # Utilidades
├── public/                 # Assets estáticos
├── package.json
├── next.config.mjs
├── source.config.ts
└── tsconfig.json
```

### Comandos disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor en localhost:3000

# Producción
pnpm build        # Compila el proyecto
pnpm start        # Inicia servidor de producción

# Exportar
pnpm export       # Genera sitio estático
pnpm deploy       # Build + Export

# Postinstall
pnpm postinstall  # Procesa archivos MDX (automático)
```

### Personalización

1. **Logo y branding**: Edita `app/layout.config.tsx`
2. **Estilos**: Modifica `app/global.css` y Tailwind config
3. **Contenido**: Agrega/edita archivos en `content/docs/`
4. **Políticas**: Personaliza templates en `content/docs/politicas/`
5. **Blog**: Agrega posts en `content/blog/`

### Agregar nuevas políticas

1. Crea un archivo `.md` o `.mdx` en `content/docs/politicas/`
2. Agrega frontmatter:
```markdown
---
title: "Nombre de la Política"
description: "Descripción breve"
---

# Contenido de la política
```
3. Actualiza `content/docs/politicas/meta.json` si quieres organizar en la navegación

## 🐛 Solución de Problemas

### Error: "El directorio ya existe"

Si el directorio ya existe, el CLI te preguntará si quieres sobrescribirlo. Di "Sí" para continuar o elige otro nombre.

### Error de instalación de dependencias

Si falla la instalación automática:

```bash
cd my-docs
pnpm install
```

### Error de Git

Si falla la inicialización de Git (porque no está instalado):

```bash
# Instala Git primero
sudo apt install git  # Ubuntu/Debian
brew install git      # macOS

# Luego inicializa manualmente
cd my-docs
git init
git add .
git commit -m "Initial commit"
```

### Puerto 3000 en uso

Si el puerto 3000 ya está en uso:

```bash
# Usa otro puerto
PORT=3001 pnpm dev
```

## 📖 Recursos Adicionales

- [Documentación Kudo](https://kudo.divisioncero.com)
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)
- [DivisionCero](https://divisioncero.com)

## 🤝 Soporte

¿Necesitas ayuda?

- [GitHub Issues](https://github.com/PetterVargas/kudo/issues)
- [Documentación](https://kudo.divisioncero.com)

## 📄 Licencia

MIT © DivisionCero
