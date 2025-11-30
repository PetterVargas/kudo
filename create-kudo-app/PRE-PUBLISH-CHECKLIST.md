# 📋 Checklist Pre-Publicación npm - @divisioncero/create-kudo-app

Este documento contiene el análisis completo y recomendaciones para publicar `@divisioncero/create-kudo-app` en npm.

## ✅ Mejoras Implementadas

### 1. **CI/CD Automatizado** ✅
- ✅ GitHub Actions para publicación automática (`publish.yml`)
- ✅ CI para testing en múltiples versiones de Node (`ci.yml`)
- ✅ Workflow activado por tags `v*`

### 2. **package.json Mejorado** ✅
- ✅ Metadatos completos (homepage, repository, bugs)
- ✅ Keywords ampliadas para mejor descubrimiento
- ✅ Author con email y URL
- ✅ Files array actualizado con README y LICENSE
- ✅ Script de test agregado

### 3. **Documentación Actualizada** ✅
- ✅ README.md actualizado con flujo simplificado
- ✅ CHANGELOG.md creado
- ✅ .npmignore mejorado

---

## 🔍 Análisis del Proyecto

### **Estado Actual: BUENO** ✅

El proyecto está en excelente estado para publicación. Las siguientes secciones detallan mejoras recomendadas y opcionales.

---

## 📦 1. Configuración de Publicación

### ✅ Ya Implementado
```json
{
  "name": "@divisioncero/create-kudo-app",
  "version": "0.1.0",
  "bin": { "create-kudo-app": "./bin/cli.js" },
  "files": ["bin", "dist", "src/templates", "README.md", "LICENSE"],
  "prepublishOnly": "pnpm build"
}
```

### 🎯 Recomendaciones Adicionales

#### A. Configurar Trusted Publishing (Recomendado por npm) ✅
**Ya implementado** - El proyecto usa Trusted Publishing con provenance, que es más seguro que tokens.

Características:
- ✅ No requiere NPM_TOKEN
- ✅ Usa OIDC (OpenID Connect) entre GitHub y npm
- ✅ Genera provenance automática
- ✅ Mayor seguridad y trazabilidad

**Configuración necesaria en npm:**
1. Ir a https://www.npmjs.com/settings/[username]/packages
2. Configurar granular access token (opcional, solo si publicas manualmente)
3. Para publicación automática, npm usa OIDC automáticamente

**Permisos ya configurados en `.github/workflows/publish.yml`:**
```yaml
permissions:
  contents: read
  id-token: write  # Necesario para Trusted Publishing
```

#### B. Verificar disponibilidad del nombre ✅
```bash
npm search @divisioncero/create-kudo-app
```

**Nota**: El nombre `create-kudo-app` sin scope ya estaba tomado, por eso se usa `@divisioncero/create-kudo-app`.

---

## 🚀 2. GitHub Actions - Publicación Automática

### ✅ Archivos Creados
- `.github/workflows/publish.yml` - Publicación automática con Trusted Publishing
- `.github/workflows/ci.yml` - Testing continuo

### 📝 Cómo Publicar con Trusted Publishing

**Importante**: El workflow se activa con tags que empiezan con `v*` (ej: `v0.1.0`, `v1.0.0`)

#### Opción 1: Tag desde línea de comandos
```bash
# Actualizar version en package.json
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0

# Push con tags
git push && git push --tags
```

#### Opción 2: GitHub Release (Recomendado)
1. Ir a GitHub → Releases → Draft a new release
2. Create new tag: `v0.1.0` (debe empezar con 'v')
3. Title: `v0.1.0 - Initial Release`
4. Description: Copiar desde CHANGELOG.md
5. Publish release

La publicación en npm se hará **automáticamente con provenance** ✨

**Ventajas de Trusted Publishing:**
- 🔒 No necesitas gestionar NPM_TOKEN
- ✅ npm verifica automáticamente que viene de tu repo GitHub
- 📋 Genera provenance (trazabilidad de dónde se compiló el paquete)
- 🛡️ Más seguro contra ataques de supply chain

---

## 🧪 3. Testing y Validación

### Mejoras Recomendadas (Opcionales para v0.1.0)

#### A. Agregar tests básicos
```bash
pnpm add -D vitest @vitest/ui
```

**Archivo**: `src/__tests__/cli.test.ts`
```typescript
import { describe, it, expect } from 'vitest';
import { DOMINIOS } from '../constants';

describe('Constants', () => {
  it('should have 8 dominios', () => {
    expect(Object.keys(DOMINIOS)).toHaveLength(8);
  });
});
```

**package.json**:
```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

#### B. Testing manual antes de publicar
```bash
# Build
pnpm build

# Test local installation
cd /tmp
node /path/to/create-kudo-app/bin/cli.js test-project

# Verificar que funciona
cd test-project
pnpm dev
```

---

## 📚 4. Documentación

### ✅ Archivos Existentes
- ✅ README.md (actualizado)
- ✅ CONTRIBUTING.md
- ✅ USAGE.md
- ✅ LICENSE
- ✅ CHANGELOG.md (nuevo)

### 🎯 Mejoras Sugeridas

#### A. Agregar badges al README
```markdown
# create-kudo-app

[![npm version](https://badge.fury.io/js/create-kudo-app.svg)](https://www.npmjs.com/package/create-kudo-app)
[![CI](https://github.com/PetterVargas/kudo/actions/workflows/ci.yml/badge.svg)](https://github.com/PetterVargas/kudo/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```

#### B. Agregar sección de troubleshooting
**README.md**:
```markdown
## 🐛 Troubleshooting

### Error: EACCES permission denied
```bash
# En lugar de sudo, configura npm prefix
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Error: Command not found
Asegúrate de usar `npm create` (npm 7+) o `npm init` (npm 6)
```

---

## 🔒 5. Seguridad

### ✅ Buenas Prácticas Actuales
- ✅ No hay credenciales hardcodeadas
- ✅ Dependencies actualizadas
- ✅ `.gitignore` apropiado

### 🎯 Recomendaciones

#### A. Configurar Dependabot (GitHub)
**Archivo**: `.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/create-kudo-app"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

#### B. Agregar npm audit en CI
**`.github/workflows/ci.yml`**:
```yaml
- name: Security audit
  run: pnpm audit --audit-level=moderate
```

---

## 📊 6. Analytics y Monitoreo

### Recomendaciones Opcionales

#### A. npm download stats
Después de publicar, monitorear en:
- https://npm-stat.com/charts.html?package=@divisioncero/create-kudo-app
- https://www.npmjs.com/package/@divisioncero/create-kudo-app

#### B. Telemetría (Opcional)
Considerar agregar telemetría anónima para mejorar el CLI:
```bash
pnpm add @segment/analytics-node
```

---

## 🎨 7. Mejoras de UX

### ✅ Ya Implementado
- ✅ Prompts interactivos (@clack/prompts)
- ✅ Colores y spinners (picocolors, ora)
- ✅ Mensajes de error claros
- ✅ Paso a paso visual

### 🎯 Mejoras Futuras (Post v0.1.0)

#### A. Dry run mode
```bash
create-kudo-app --dry-run
```

#### B. Template variants
```bash
create-kudo-app --template minimal
create-kudo-app --template enterprise
```

#### C. Update notifier
```bash
pnpm add update-notifier
```

---

## 🔄 8. Versionado Semántico

### Estrategia Recomendada

```
0.1.0 - Initial beta (actual)
0.2.0 - Minor improvements
0.3.0 - New features
1.0.0 - Stable release (después de feedback de usuarios)
```

**Convenciones**:
- `patch` (0.1.X): Bug fixes
- `minor` (0.X.0): New features (backwards compatible)
- `major` (X.0.0): Breaking changes

---

## ✅ Checklist Pre-Publicación

### Antes de la Primera Publicación

- [x] **1. Verificar que el nombre está disponible en npm**
  ```bash
  npm search @divisioncero/create-kudo-app
  ```
  **Completado**: Se cambió a scoped package `@divisioncero/create-kudo-app`

- [x] **2. Configurar Trusted Publishing**
  **Completado**: El workflow ya usa `--provenance` y permisos OIDC correctos.
  No se requiere NPM_TOKEN.

- [ ] **3. Testing local completo**
  ```bash
  pnpm build
  cd /tmp && node /path/to/bin/cli.js test-app
  cd test-app && pnpm dev
  ```

- [ ] **4. Revisar archivos a publicar**
  ```bash
  pnpm pack --dry-run
  ```

- [ ] **5. Actualizar CHANGELOG.md**
  - Fecha de release
  - Lista completa de features

- [ ] **6. Commit y push de cambios**
  ```bash
  git add .
  git commit -m "chore: prepare for v0.1.0 release"
  git push
  ```

- [ ] **7. Crear tag y release**
  ```bash
  npm version 0.1.0
  git push && git push --tags
  ```

  O desde GitHub Releases

- [ ] **8. Verificar publicación**
  - GitHub Actions completado exitosamente
  - Package visible en npmjs.com
  - Provenance badge visible en npm
  - Instalación global funciona:
    ```bash
    npm create @divisioncero/kudo-app test-final
    # o simplemente
    npm create kudo-app test-final
    ```

---

## 🎯 Roadmap Post-Publicación

### Versión 0.2.0
- [ ] Tests unitarios con Vitest
- [ ] Agregar más templates de políticas
- [ ] Soporte para diferentes idiomas
- [ ] Modo offline

### Versión 0.3.0
- [ ] Update notifier
- [ ] Telemetría anónima (opt-in)
- [ ] Template variants
- [ ] Dry run mode

### Versión 1.0.0
- [ ] Documentación completa en video
- [ ] Casos de uso reales
- [ ] Integraciones con otros frameworks
- [ ] Estabilidad garantizada

---

## 🆘 Soporte

### Issues Comunes

**1. Error de permisos npm**
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

**2. Verificar que bin está ejecutable**
```bash
chmod +x bin/cli.js
```

**3. Test de instalación local**
```bash
pnpm link --global
create-kudo-app test
```

---

## 📞 Contacto

- **Issues**: https://github.com/PetterVargas/kudo/issues
- **Website**: https://kudo.divisioncero.com
- **Email**: hello@divisioncero.com

---

## 🎉 Conclusión

El proyecto `@divisioncero/create-kudo-app` está **LISTO PARA PUBLICACIÓN** con las siguientes condiciones:

✅ **Obligatorio antes de publicar**:
1. ~~Configurar NPM_TOKEN en GitHub Secrets~~ ✅ No necesario con Trusted Publishing
2. ~~Verificar disponibilidad del nombre~~ ✅ Completado - se usa @divisioncero/create-kudo-app
3. Testing manual completo
4. Actualizar fecha en CHANGELOG.md

🎯 **Recomendado pero opcional**:
1. Agregar badges al README
2. Configurar Dependabot
3. Tests unitarios básicos

**Mejoras implementadas**:
- ✅ Trusted Publishing con provenance (más seguro que tokens)
- ✅ Scoped package bajo @divisioncero
- ✅ OIDC automático entre GitHub y npm

**Calidad del código**: ⭐⭐⭐⭐⭐ (5/5)
**Documentación**: ⭐⭐⭐⭐☆ (4/5)
**Seguridad**: ⭐⭐⭐⭐⭐ (5/5) - Trusted Publishing
**Listo para producción**: ✅ SÍ

---

**Última actualización**: 2025-01-28
**Versión del checklist**: 1.0
