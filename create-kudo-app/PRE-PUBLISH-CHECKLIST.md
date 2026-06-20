# Checklist Pre-Publicación — @divisioncero/create-kudo-app

## Estado actual: v0.2.0

---

## Checklist

### Antes de publicar

- [ ] **1. Build limpio**
  ```bash
  cd create-kudo-app
  npm install
  npm run build
  # Debe terminar sin errores de TypeScript
  ```

- [ ] **2. Test local del CLI**
  ```bash
  cd /tmp
  node /ruta/a/kudo/create-kudo-app/bin/cli.js test-app
  cd test-app
  pnpm install
  pnpm dev
  # Verificar: home en /, framework en /framework, sgsi en /sgsi
  ```

- [ ] **3. Verificar archivos incluidos en el paquete**
  ```bash
  npm pack --dry-run
  # Deben aparecer: bin/, dist/, src/templates/, README.md, LICENSE
  # src/templates/content/framework/ (~127 archivos MDX)
  # src/templates/content/sgsi/ (politicas, lineamientos, index, meta)
  ```

- [ ] **4. Actualizar versión en package.json**
  ```bash
  npm version minor   # 0.1.0 → 0.2.0
  # o editar manualmente
  ```

- [ ] **5. Verificar CHANGELOG.md**
  - Fecha correcta en la entrada de la versión
  - Todas las features listadas

- [ ] **6. Commit y push**
  ```bash
  git add .
  git commit -m "chore: release v0.2.0"
  git push
  ```

- [ ] **7. Crear release en GitHub**
  - Ir a GitHub → Releases → Draft a new release
  - Tag: `v0.2.0`
  - Título: `v0.2.0 — Framework + SGSI dual sections`
  - Descripción: copiar desde CHANGELOG.md
  - Publish release → GitHub Actions publica en npm automáticamente

- [ ] **8. Verificar publicación**
  - GitHub Actions completado sin errores
  - Paquete visible en npmjs.com con provenance badge
  - Instalación funciona:
    ```bash
    pnpm create kudo-app test-final
    ```

---

## Configuración de publicación

### Trusted Publishing (ya configurado)
El workflow `.github/workflows/publish.yml` usa OIDC — no requiere `NPM_TOKEN`.

```yaml
permissions:
  contents: read
  id-token: write   # Requerido para Trusted Publishing
```

### Archivos publicados (`files` en package.json)
```json
["bin", "dist", "src/templates", "README.md", "LICENSE"]
```

`src/templates/` incluye todo el contenido del proyecto generado:
- `app/` — framework, sgsi, (home), api/search
- `components/` — mdx, provider, search, sub-section-picker, page-actions
- `lib/` — source, shared, layout.shared, cn
- `content/framework/` — 127 archivos MDX del framework Kudo completo
- `content/sgsi/` — politicas (plantillas), lineamientos, index, meta
- `content/blog/` — posts de ejemplo
- `base/` — next.config.mjs, source.config.ts, tsconfig.json, package.json.template

---

## .tgz en el repositorio

El archivo `divisioncero-create-kudo-app-0.1.0.tgz` es el resultado de `npm pack` versión 0.1.0.
**Está desactualizado y no debería estar en git.** Para limpiarlo:

```bash
cd create-kudo-app
rm divisioncero-create-kudo-app-0.1.0.tgz
# Agregar al .gitignore:
echo "*.tgz" >> .gitignore
```

Para generar uno nuevo para testing local (sin publicar):
```bash
npm pack
# Genera: divisioncero-create-kudo-app-0.2.0.tgz
# Instalar localmente en otro proyecto:
npm install /ruta/al/divisioncero-create-kudo-app-0.2.0.tgz
```

---

## Roadmap

### v0.2.0 (actual)
- [x] Estructura dual Framework + SGSI
- [x] 127 archivos MDX del framework Kudo incluidos
- [x] Next.js 16, Fumadocs 16, React 19
- [x] Componentes modernos: Provider, Search (Orama), SubSectionPicker
- [x] layout.shared.tsx con tabs de sección
- [x] Footer completo con columnas y redes sociales

### v0.3.0
- [ ] Tests unitarios básicos con Vitest
- [ ] Update notifier (avisar cuando hay nueva versión)
- [ ] `--dry-run` mode

### v1.0.0
- [ ] Estabilidad garantizada de API
- [ ] Soporte para personalización del nombre/branding vía CLI
- [ ] Documentación en video

---

## Contacto

- Issues: https://github.com/PetterVargas/kudo/issues
- Website: https://kudo.divisioncero.com
- Email: hello@divisioncero.com
