# @divisioncero/create-kudo-app

CLI oficial para crear nuevas aplicaciones Kudo con templates de políticas y controles de ciberseguridad de DivisionCero.

## 🚀 Uso

### Modo interactivo

```bash
# npm
npm create @divisioncero/kudo-app

# pnpm (recomendado)
pnpm create @divisioncero/kudo-app

# yarn
yarn create @divisioncero/kudo-app

# npx
npx @divisioncero/create-kudo-app
```

El modo interactivo te permitirá:

- ✅ Elegir el nombre del proyecto
- ✅ Seleccionar tu package manager preferido (npm/pnpm/yarn)
- ✅ Incluye automáticamente todos los dominios de seguridad (COR, CIP, CIF, CAP, CCN, ADR, THP, DIA)
- ✅ Incluye automáticamente el blog

## 📦 ¿Qué incluye?

### Proyecto base

- **Next.js 15** con React 19
- **Fumadocs** para documentación
- **Tailwind CSS** para estilos
- **TypeScript** configurado
- **MDX** con soporte para:
  - Matemáticas (KaTeX)
  - Diagramas (Mermaid)
  - Syntax highlighting (Shiki)
- **Componentes** reutilizables
- **Configuración completa** lista para usar

### Templates de Políticas

25+ templates de políticas organizacionales organizadas en 8 dominios:

1. **COR** - Coherencia Organizacional
2. **CIP** - Ciberseguridad en Identidad y Puntos Finales
3. **CIF** - Ciberseguridad en Infraestructura
4. **CAP** - Ciberseguridad en Aplicaciones
5. **CCN** - Continuidad y Cambios del Negocio
6. **ADR** - Análisis, Detección y Respuesta
7. **THP** - Talento Humano y Proveedores
8. **DIA** - Datos e Inteligencia Artificial

## 🏗️ Estructura del proyecto generado

```
my-kudo-project/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Landing y blog
│   ├── [...slug]/                # Páginas de documentación
│   ├── api/search/               # API de búsqueda
│   └── layout.config.tsx         # Configuración de navegación
├── content/
│   ├── docs/
│   │   ├── politicas/           # Templates de políticas
│   │   ├── [dominios]/          # Controles por dominio
│   │   └── framework/           # Documentación del framework
│   └── blog/                    # Blog posts (opcional)
├── components/                   # Componentes React
├── lib/                         # Utilidades
└── public/                      # Assets estáticos
```

## 🛠️ Comandos disponibles

Después de crear tu proyecto:

```bash
cd my-kudo-project

# Desarrollo local
pnpm dev

# Build para producción
pnpm build

# Exportar sitio estático
pnpm export

# Iniciar servidor de producción
pnpm start
```

## 📚 Documentación

- [Kudo Framework](https://kudo.divisioncero.com/framework)
- [Fumadocs](https://fumadocs.dev)
- [DivisionCero](https://divisioncero.com)

## 🤝 Contribuir

¿Encontraste un bug o tienes una sugerencia? [Abre un issue](https://github.com/PetterVargas/kudo/issues)

## 📄 Licencia

MIT © DivisionCero
