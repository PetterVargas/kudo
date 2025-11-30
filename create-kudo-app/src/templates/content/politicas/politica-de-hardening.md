---
title: "Política de Hardening"
description: "Configuración segura y fortalecimiento de sistemas y aplicaciones"
---

# Política de Hardening

## Propósito
Garantizar la seguridad de la información en entornos en la nube y locales, protegiendo datos, asegurando confidencialidad, integridad y disponibilidad, y alineándose con los estándares de la organización.

## Alcance
Aplica a todos los colaboradores y sistemas de la organización en la nube y en instalaciones físicas.

## Acceso y Cuentas
- Solo colaboradores autorizados (TI, seguridad y gerencia) acceden a sistemas y servicios.  
- Uso obligatorio de contraseñas fuertes y MFA.  
- Acceso basado en tokens debe rotarse cada 180 días.  
- Acceso SSH a servidores mediante bastión y restricciones por IP.  

## Infraestructura y Servidores
- Servidores Ubuntu actualizados regularmente; volúmenes separados para SO y datos (cifrados).  
- Cambios sujetos a gestión de cambios.  
- Políticas de contraseña fuertes en todos los sistemas.  
- Monitoreo automático de actualizaciones y parches semanales.  

## Seguridad de Red
- Segregación de red por confianza, sensibilidad y criticidad.  
- Uso de VPC única por entorno, WAF y balanceador de carga para HTTP/HTTPS.  
- Redes inalámbricas segregadas; Wi-Fi de invitados con restricciones estrictas.  
- Monitoreo y control de acceso a redes, autenticación y cifrado de conexiones.  

## Bases de Datos y Criptografía
- Bases de datos RDS cifradas en la región designada, respaldos diarios, retención 15 días.  
- Claves cifrado gestionadas por KMS del proveedor de nube.  
- Cifrado AES-256 en tránsito y reposo.  

## Gestión de Parches y Vulnerabilidades
- Ciclo de parches mensual.  
- Escaneo regular de vulnerabilidades con herramientas estándar.  
- Vulnerabilidades críticas atendidas de inmediato y plan de remediación documentado.  

## Pruebas de Penetración y Resiliencia
- Pruebas de penetración anuales o tras cambios significativos.  
- Pruebas avanzadas lideradas por amenazas cada tres años, incluyendo sistemas críticos en producción.  
- Evaluaciones de vulnerabilidades antes de implementar servicios críticos.  
- Reportes de hallazgos y plan de remediación para brechas críticas.  

## Prevención de Fuga de Datos (DLP)
- Identificación y clasificación de datos sensibles.  
- Monitoreo de canales como correo, dispositivos y transferencias de archivos.  
- Restricción de copia, pegado y carga a servicios externos.  
- Protección de respaldos con cifrado y control de acceso.  

## Inteligencia de Amenazas
- Participación en análisis de amenazas y vulnerabilidades de fuentes confiables.  
- Uso de información para decisiones proactivas de seguridad.  

## Monitoreo y Revisión
- Auditorías periódicas de cumplimiento y permisos.  
- Monitoreo de logs, eventos de seguridad y vulnerabilidades.  
- Revisión anual de la política y ajustes según amenazas o cambios de entorno.  
- Reporte inmediato de incidentes al equipo de seguridad de la información.
