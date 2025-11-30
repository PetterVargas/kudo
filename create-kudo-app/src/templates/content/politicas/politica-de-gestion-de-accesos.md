---
title: "Política de Gestión de Accesos"
description: "Control y gestión de acceso a sistemas y recursos de información"
---

# Política de Gestión de Accesos

## Propósito

Establecer cómo la organización controla el acceso a sistemas e información, gestionando el ciclo de vida completo de las identidades y garantizando autenticación segura, asignación y revisión periódica de permisos, y uso responsable de herramientas privilegiadas.

## Alcance

Aplica a todas las identidades humanas y no humanas, sistemas, aplicaciones, programas utilitarios y accesos temporales dentro de la organización, incluyendo terceros.

## Principios Clave

- Acceso basado en necesidad y rol.
- Segregación de funciones para minimizar riesgos.
- Registro y auditoría de todos los derechos de acceso.
- Uso de autenticación robusta y multifactor.
- Control estricto de programas utilitarios y accesos privilegiados.

## Roles y Responsabilidades

- Propietarios de Sistemas: Revisar y aprobar accesos, supervisar cumplimiento, reportar discrepancias.
- TI: Implementar accesos, aplicar cambios a la Matriz de Control, auditar y monitorear sistemas y programas utilitarios.
- Gerencia: Validar cambios estratégicos, revisar riesgos y autorizar accesos privilegiados.
- Usuarios: Cumplir con la política y reportar incidentes.

## Gestión de Cuentas e Identidades

### Aprovisionamiento

- Solicitud de acceso mediante sistema de tickets, con justificación.
- Revisión y aprobación según la Matriz de Control de Acceso.
- Documentar todas las decisiones para transparencia.
- Control de accesos de terceros con NDAs y verificación de confianza.
- Separación de roles de aprobación e implementación para evitar conflictos de interés.
- Automatización donde sea posible para reducir errores y mejorar eficiencia.

### Desaprovisionamiento

- Eliminación de accesos mediante tickets.
- Revisión conjunta de Propietarios de Sistemas, TI y Gerencia.
- Revocar privilegios innecesarios y eliminar identidades duplicadas.
- Eliminación oportuna de accesos para cambios de rol o salida de la organización.
- Accesos temporales limitados a periodos definidos y revocados automáticamente.
- Automatización donde sea posible para reducir errores y mejorar eficiencia.

## Estándares de Autenticación

- Selección de métodos según la sensibilidad de la información.
- Autenticación multifactor obligatoria para sistemas.
- Protección contra fuerza bruta: bloqueo o restablecimiento tras intentos fallidos.
- Validación completa de credenciales antes de mostrar información sensible.
- Notificación en canal separado de último inicio de sesión y fallos.
- Duración de sesiones limitada para aplicaciones.

## Programas Utilitarios y Accesos Privilegiados

- Acceso restringido a un mínimo de usuarios autorizados y confiables.
- Segregación de programas utilitarios de software de aplicación y su tráfico de red.
- Disponibilidad limitada a periodos específicos y registro obligatorio de uso.
- Eliminación o desactivación de utilitarios innecesarios, respetando segregación de funciones.

## Cambios a la Matriz de Control de Acceso

- Todos los cambios requieren aprobación de Propietario del Sistema, TI y Gerencia (En los casos que se considere necesario).
- Documentar cambios y razones para transparencia.
- TI responsable de implementar cambios y mantener la Matriz actualizada.

## Monitoreo y Auditoría

- Revisión de cumplimiento por Propietarios de Sistemas y TI.
- Registro central de todos los derechos de acceso y cambios.
- Auditorías periódicas de accesos, identidades y programas utilitarios.
- Ajuste de accesos privilegiados según evaluación de riesgos.