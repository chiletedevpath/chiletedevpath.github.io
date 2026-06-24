# Chilete DevPath Web

Web oficial de Chilete DevPath, marca personal de Adrián Pisco para documentar aprendizaje, proyectos, criterio técnico y comunidad.

Sitio publicado:

https://chiletedevpath.github.io/

## Objetivo

Presentar Chilete DevPath como un ecosistema navegable: una marca personal con origen, ruta de aprendizaje, proyectos, recursos, criterios de publicación responsable y canales de comunidad.

La web funciona como base pública de la marca y como punto de entrada más claro que un repositorio para personas que quieran conocer el avance, estudiar contenido o seguir el proyecto.

## Versión actual

`V2.2 | Ruta interactiva y contenido conectado`

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

Esta versión conecta la ruta de aprendizaje con contenido real del ecosistema, mejora la organización de recursos y presenta las políticas con formato visual institucional.

## Tecnologías

- Astro
- HTML
- CSS
- JavaScript
- Google Fonts
- GitHub Pages
- GitHub Actions

## Estructura

```txt
chiletedevpath-web/
|-- public/
|   `-- assets/
|       `-- img/
|-- src/
|   |-- components/
|   |-- data/
|   |-- layouts/
|   |-- pages/
|   |-- scripts/
|   `-- styles/
|-- .github/
|   `-- workflows/
|-- astro.config.mjs
|-- package.json
|-- README.md
`-- CHANGELOG.md
```

## Alcance de V2.2

- Ruta de aprendizaje conectada con secciones del repositorio `aprendizaje`.
- Estados visibles para contenido disponible, en crecimiento, en revisión y en construcción.
- Recursos organizados por utilidad: práctica guiada, práctica autónoma, consulta y criterio editorial.
- Políticas presentadas como documentos visuales con encabezado de marca, objetivo, alcance, responsable, versión y estado.
- Ajuste de paleta hacia una base más sobria y profesional.
- Conservación de la identidad visual y arquitectura Astro ya establecidas.

## Decisiones de diseño

- Identidad visual inspirada en Chilete, Cajamarca, sin usar símbolos institucionales como marca propia.
- Paleta basada en tonos tierra, camino, agua, verde y azul oscuro.
- Ruta presentada como avance progresivo, con propósito y evidencia esperada.
- Navegación pensada para comunidad, no solo para mostrar repositorios.
- Contenido redactado con nombres más públicos y atractivos que las carpetas internas del ecosistema.
- Separación entre contenido publicado, contenido en construcción y criterios de publicación segura.

## Validación realizada

- Instalación de dependencias con npm.
- Ejecución de `npm audit`.
- Ejecución de `npm run build`.
- Generación de 7 páginas estáticas.
- Revisión de estructura del proyecto.
- Verificación de archivos ignorados para no publicar dependencias, caché ni compilados locales.

## Criterio editorial

El contenido debe mantenerse alineado con las políticas de Chilete DevPath: autoría clara, uso responsable de IA, publicación segura y bienestar en el aprendizaje técnico.

## Autor

Adrián Pisco - Chilete DevPath.
