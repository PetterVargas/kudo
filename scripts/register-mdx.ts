// Permite que los scripts de Node (tsx) importen el contenido `.mdx` y
// `.source/` generados por fumadocs-mdx. Se carga con `tsx --import`.
import { registerHooks } from 'node:module';
import { register } from 'fumadocs-mdx/node';

register();

// El MDX compilado importa las imágenes que referencia; los scripts no las
// necesitan, así que se reemplazan por un módulo vacío.
registerHooks({
  load(url, context, nextLoad) {
    if (/\.(png|jpe?g|gif|webp|avif|svg|ico)$/i.test(url)) {
      return {
        format: 'module',
        source: 'export default { src: "", width: 0, height: 0 };',
        shortCircuit: true,
      };
    }
    return nextLoad(url, context);
  },
});
