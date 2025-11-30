import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { docs, blogPosts } from '@/.source';
import { Book, Building2, ShieldCheck, Cloud, Code, RefreshCw, Search, Users, Database, FileText, ClipboardCheck } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  // Icon configuration for main category tabs only
  icon: (iconName) => {
    const iconMap: Record<string, React.ComponentType> = {
      'Book': Book,              // Para Kudo (libro/documentación)
      'Building2': Building2,    // Para COR (Coherencia Organizacional)
      'ShieldCheck': ShieldCheck, // Para CIP (Identidad y Puntos Finales)
      'Cloud': Cloud,            // Para CIF (Ciberseguridad en Infraestructura)
      'Code': Code,              // Para CAP (Ciberseguridad en Aplicaciones)
      'RefreshCw': RefreshCw,    // Para CCN (Continuidad del Negocio)
      'Search': Search,          // Para ADR (Análisis y Respuesta)
      'Users': Users,            // Para THP (Talento Humano y Proveedores)
      'Database': Database,      // Para DIA (Datos e IA)
      'FileText': FileText,      // Para Políticas
      'ClipboardCheck': ClipboardCheck  // Para Cuestionarios
    };

    if (iconName && typeof iconName === 'string' && iconName in iconMap) {
      return createElement(iconMap[iconName]);
    }
    return undefined;
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});