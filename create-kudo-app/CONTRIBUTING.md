# Contribuir a create-kudo-app

¡Gracias por tu interés en contribuir!

## Desarrollo Local

### Prerequisitos

- Node.js >= 20.0.0
- pnpm

### Setup

```bash
git clone https://github.com/PetterVargas/kudo.git
cd kudo/create-kudo-app
pnpm install
pnpm run build
```

### Watch mode

```bash
pnpm run dev   # tsc --watch
```

### Probar el CLI localmente

```bash
# Ejecutar directamente
cd /tmp
node /ruta/a/kudo/create-kudo-app/bin/cli.js test-project

# Verificar el proyecto generado
cd test-project
pnpm install
pnpm dev
# Abrir localhost:3000 — debe mostrar home, /framework y /sgsi
```

---

## Estructura del proyecto

```
create-kudo-app/
├── bin/
│   └── cli.js                    # Entry point ejecutable (shebang Node)
├── src/
│   ├── index.ts                  # CLI principal (Commander)
│   ├── prompts.ts                # Prompts interactivos (@clack/prompts)
│   ├── constants.ts              # DOMINIOS, PACKAGE_MANAGERS, tipos
│   └── utils/
│       ├── copy-template.ts      # Lógica de copia de templates al destino
│       ├── install-deps.ts       # Instalación de dependencias (execa + ora)
│       ├── git-init.ts           # Inicialización de Git
│       └── logger.ts             # Logger con picocolors
├── src/templates/                # Archivos copiados al proyecto generado
│   ├── base/                     # Configuración raíz
│   │   ├── next.config.mjs
│   │   ├── source.config.ts      # frameworkDocs + sgsiDocs + blogPosts
│   │   ├── tsconfig.json
│   │   ├── postcss.config.mjs
│   │   ├── package.json.template # Procesado con {{PROJECT_NAME}} etc.
│   │   ├── README.md.template
│   │   └── .gitignore
│   ├── app/
│   │   ├── (home)/               # Landing, blog
│   │   ├── framework/            # DocsLayout para framework
│   │   ├── sgsi/                 # DocsLayout para SGSI
│   │   ├── api/search/           # Búsqueda estática (framework + sgsi)
│   │   ├── layout.tsx
│   │   ├── layout.config.tsx     # Navbar del home
│   │   └── global.css
│   ├── components/
│   │   ├── mdx.tsx               # getMDXComponents
│   │   ├── mdx/mermaid.tsx       # Renderizador Mermaid
│   │   ├── provider.tsx          # RootProvider con SearchDialog
│   │   ├── search.tsx            # Búsqueda Orama
│   │   ├── sub-section-picker.tsx
│   │   ├── page-actions.tsx      # Botón "Abrir con IA"
│   │   └── ui/button.tsx
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── shared.ts             # appName, rutas, gitConfig
│   │   ├── layout.shared.tsx     # baseOptions(), sectionTabs, subTabs
│   │   └── source.ts             # frameworkSource, sgsiSource, blog
│   └── content/
│       ├── framework/            # 127 archivos MDX del framework Kudo
│       ├── sgsi/
│       │   ├── index.mdx
│       │   ├── meta.json
│       │   ├── politicas/        # Plantillas de políticas (seleccionadas por CLI)
│       │   └── lineamientos/
│       └── blog/                 # Posts de ejemplo
├── dist/                         # Compilado por tsc (no incluir en git)
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

---

## Áreas de contribución

### Agregar o actualizar políticas

Las plantillas de políticas están en `src/templates/content/sgsi/politicas/`.

1. Agrega el archivo `.md` o `.mdx`
2. Actualiza `src/constants.ts` — agrega el nombre del archivo al array `politicas` del dominio correspondiente
3. El `meta.json` de politicas se actualiza automáticamente según la selección del usuario

### Agregar contenido al framework

El contenido en `src/templates/content/framework/` se copia íntegramente al proyecto generado. Para agregar una nueva sección:

1. Crea la carpeta con `index.mdx` y `meta.json`
2. Actualiza `src/templates/content/framework/meta.json` si es una sección raíz

### Modificar templates de código

Los archivos en `src/templates/app/`, `components/`, `lib/` y `base/` son copiados directamente. Los únicos archivos procesados con variables son los `.template`:

| Variable | Valor |
|---|---|
| `{{PROJECT_NAME}}` | Nombre del proyecto |
| `{{PACKAGE_MANAGER}}` | pnpm |
| `{{AUTHOR}}` | Autor (por defecto: DivisionCero) |

### Modificar el flujo del CLI

- `src/index.ts` — orquesta el flujo: prompts → copiar base → copiar políticas
- `src/prompts.ts` — preguntas interactivas (nombre, PM, dominios, políticas, blog)
- `src/utils/copy-template.ts` — lógica de copia, procesa `.template`, copia framework y sgsi

---

## Convenciones

- TypeScript estricto (`"strict": true`)
- ESM (`"type": "module"`)
- Imports con extensión `.js` (requerido por TypeScript ESM)
- Usar `logger` para todos los outputs al usuario, no `console.log` directo
- Usar `@clack/prompts` para interacción, no `readline`

---

## Pull Requests

1. Fork del repositorio
2. Rama desde `main`: `git checkout -b feature/mi-cambio`
3. Hacer cambios en `create-kudo-app/`
4. `pnpm run build` — verificar que compila sin errores
5. Test manual del CLI
6. Commit con mensaje descriptivo
7. Push y abrir PR

---

## Reporte de Bugs

Abrir issue en [GitHub Issues](https://github.com/PetterVargas/kudo/issues) con:

- Descripción del problema
- Comando exacto ejecutado
- Comportamiento esperado vs actual
- Versión de Node.js y OS
- Logs de error

---

## Licencia

Al contribuir aceptas que tus cambios serán licenciados bajo MIT.
