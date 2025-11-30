export const DOMINIOS = {
  COR: {
    id: 'cor',
    nombre: 'COR - Coherencia Organizacional',
    descripcion: 'Gobernanza y estructura organizacional',
    politicas: [
      'politica-de-seguridad-de-la-informacion.md',
      'politica-de-documentos-y-registros.md',
      'politica-de-gestion-de-riesgos.md',
      'politica-de-gestion-de-cumplimiento.md',
    ],
  },
  CIP: {
    id: 'cip',
    nombre: 'CIP - Ciberseguridad en Identidad y Puntos Finales',
    descripcion: 'Gestión de identidades y dispositivos',
    politicas: [
      'politica-de-gestion-de-accesos.md',
      'politica-de-hardening.md',
    ],
  },
  CIF: {
    id: 'cif',
    nombre: 'CIF - Ciberseguridad en Infraestructura',
    descripcion: 'Seguridad en infraestructura y redes',
    politicas: [
      'politica-de-seguridad-fisica.md',
      'politica-de-seguridad-de-it.md',
      'politica-de-seguridad-de-comunicaciones.md',
      'politica-de-seguridad-ics-ot.md',
      'politica-de-servicios-en-la-nube.md',
      'politicas-de-bakups-y-recuperacion.md',
      'politica-de-registro-y-monitoreo.md',
    ],
  },
  CAP: {
    id: 'cap',
    nombre: 'CAP - Ciberseguridad en Aplicaciones',
    descripcion: 'Desarrollo seguro y AppSec',
    politicas: [
      'politica-de-desarrollo-seguro.md',
    ],
  },
  CCN: {
    id: 'ccn',
    nombre: 'CCN - Continuidad y Cambios del Negocio',
    descripcion: 'Gestión de cambios y continuidad',
    politicas: [
      'politica-de-continuidad-del-negocio.md',
      'plan-de-continuidad-de-negocio.md',
      'procedimiento-de-analisis-de-impacto-en-el-negocio.md',
      'politica-de-gestion-de-crisis.md',
      'procedimiento-y-plan-de-comunicacion.md',
      'politica-de-gestion-de-cambios-y-configuraciones.md',
    ],
  },
  ADR: {
    id: 'adr',
    nombre: 'ADR - Análisis, Detección y Respuesta',
    descripcion: 'Detección y respuesta a incidentes',
    politicas: [
      'politica-de-gestion-de-incidentes.md',
    ],
  },
  THP: {
    id: 'thp',
    nombre: 'THP - Talento Humano y Proveedores',
    descripcion: 'Gestión de personas y proveedores',
    politicas: [
      'politica-de-seguridad-de-recursos-humanos.md',
      'politica-de-gestion-de-concienciacion.md',
      'politica-de-gestion-de-proveedores.md',
    ],
  },
  DIA: {
    id: 'dia',
    nombre: 'DIA - Datos e Inteligencia Artificial',
    descripcion: 'Protección de datos e IA',
    politicas: [
      'politica-de-privacidad.md',
      'politica-de-gestion-de-activos.md',
    ],
  },
} as const;

export const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn'] as const;

export type PackageManager = typeof PACKAGE_MANAGERS[number];
export type DominioId = keyof typeof DOMINIOS;
