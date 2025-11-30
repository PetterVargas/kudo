# Contribuir a create-kudo-app

¡Gracias por tu interés en contribuir a create-kudo-app!

## Desarrollo Local

### Prerequisitos

- Node.js >= 20.0.0
- pnpm (recomendado)

### Setup

1. Clona el repositorio:
```bash
git clone https://github.com/PetterVargas/kudo.git
cd kudo/create-kudo-app
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Compila el código TypeScript:
```bash
pnpm build
```

### Desarrollo con Watch Mode

Para desarrollo continuo:

```bash
pnpm dev
```

Esto compilará automáticamente los cambios en TypeScript.

### Probar el CLI Localmente

Después de compilar, puedes probar el CLI localmente:

```bash
# Crear un link global
pnpm link --global

# Usar el CLI
create-kudo-app test-project

# O ejecutar directamente
node bin/cli.js test-project
```

## Estructura del Proyecto

```
create-kudo-app/
├── src/
│   ├── index.ts              # Entry point principal del CLI
│   ├── prompts.ts            # Prompts interactivos
│   ├── constants.ts          # Constantes y tipos
│   ├── utils/                # Utilidades
│   │   ├── copy-template.ts  # Lógica de copia de templates
│   │   ├── install-deps.ts   # Instalación de dependencias
│   │   ├── git-init.ts       # Inicialización de Git
│   │   └── logger.ts         # Logger con colores
│   └── templates/            # Templates del proyecto
│       ├── base/             # Configuración base
│       ├── app/              # Estructura de app/
│       ├── components/       # Componentes React
│       ├── lib/              # Librerías y utilidades
│       └── content/          # Contenido MDX (políticas, blog)
├── bin/
│   └── cli.js               # Entry point ejecutable
├── dist/                     # Código compilado (generado)
└── package.json
```

## Agregar Nuevas Políticas

Para agregar nuevas políticas a los templates:

1. Agrega el archivo de política en `src/templates/content/politicas/`
2. Actualiza `src/constants.ts` para incluir la nueva política en el dominio correspondiente
3. Actualiza `src/templates/content/politicas/meta.json` si es necesario

## Modificar Templates Base

Los templates base están en `src/templates/base/`. Los archivos con extensión `.template` serán procesados y los placeholders `{{VARIABLE}}` serán reemplazados durante la creación del proyecto.

Variables disponibles:
- `{{PROJECT_NAME}}` - Nombre del proyecto
- `{{PACKAGE_MANAGER}}` - Package manager seleccionado (npm/pnpm/yarn)
- `{{AUTHOR}}` - Autor del proyecto

## Testing

Actualmente no hay tests automatizados. Para probar:

1. Compila el proyecto: `pnpm build`
2. Ejecuta el CLI en un directorio temporal:
```bash
cd /tmp
node /path/to/kudo/create-kudo-app/bin/cli.js test-app
```
3. Verifica que el proyecto generado funcione:
```bash
cd test-app
pnpm install
pnpm dev
```

## Convenciones de Código

- Usa TypeScript estricto
- Usa ESM (ES Modules)
- Usa imports relativos con extensión `.js` (TypeScript lo requiere para ESM)
- Mantén las utilidades pequeñas y enfocadas
- Usa el logger para todos los outputs al usuario
- Usa @clack/prompts para todos los prompts interactivos

## Pull Requests

1. Haz fork del repositorio
2. Crea una rama desde `main`: `git checkout -b feature/mi-feature`
3. Realiza tus cambios
4. Compila y prueba localmente
5. Commit tus cambios con mensajes descriptivos
6. Push a tu fork
7. Abre un Pull Request

## Reporte de Bugs

Abre un issue en [GitHub Issues](https://github.com/PetterVargas/kudo/issues) con:

- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Versión de Node.js y sistema operativo
- Logs de error si aplica

## Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la licencia MIT del proyecto.
