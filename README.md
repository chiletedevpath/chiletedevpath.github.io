# Chilete DevPath Web

Web oficial de Chilete DevPath, marca personal de Adrian Pisco para documentar aprendizaje, proyectos, criterio tecnico y comunidad.

Sitio publicado:

https://chiletedevpath.github.io/

## Objetivo

Presentar Chilete DevPath como una experiencia navegable de aprendizaje: una marca personal con origen, ruta tecnica, proyectos con contexto, recursos, criterios de publicacion responsable y canales de comunidad.

La web funciona como punto de entrada mas claro que un repositorio para personas que quieran aprender, revisar avance real o seguir el proyecto.

## Version actual

`V4.5`

- Fecha de cierre: 25/06/2026
- Estado: en revision
- Sitio: https://chiletedevpath.github.io/

Esta version corrige la voz publica de la web, simplifica formularios a correo, usa imagenes editoriales en heroes clave y mejora la lectura visual de secciones internas.

## Tecnologias

- Astro
- React
- Tailwind CSS
- HTML
- CSS
- JavaScript
- Lucide React
- SVG propio
- PWA base
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
|   |-- i18n/
|   |-- layouts/
|   |-- pages/
|   |-- scripts/
|   `-- styles/
|       |-- components/
|       |-- core/
|       `-- pages/
|-- .github/
|   `-- workflows/
|-- astro.config.mjs
|-- package.json
|-- README.md
`-- CHANGELOG.md
```

## Alcance de V4.5

- Textos publicos reescritos con una voz mas cercana, como mensaje directo a la comunidad.
- Formularios simplificados a correo; WhatsApp queda solo como boton flotante.
- Heroes de Ruta y Proyectos reemplazados por imagenes editoriales sin texto superpuesto.
- Acceso al mapa con mejor espaciado y texto mas claro.
- Formularios de feedback y sugerencias rediseñados con mejor jerarquia y microcopy.
- Seccion Sobre ajustada para explicar Chilete DevPath como marca, ruta y comunidad.

## Decisiones de diseno

- Identidad visual inspirada en Chilete, Cajamarca, sin usar simbolos institucionales como marca propia.
- Paleta basada en azul profundo, verde tecnico, camino dorado y acentos sobrios.
- Paleta preparada para modo claro y modo oscuro.
- Ruta presentada como avance progresivo, con practica y evidencia esperada.
- Navegacion pensada para comunidad, no solo para mostrar repositorios.
- Separacion entre aprendizaje, evidencia academica, portafolio futuro y criterios de publicacion segura.
- La PWA es basica: permite instalacion y cache inicial, pero no reemplaza una auditoria avanzada de aplicacion con backend.

## Validacion realizada

- Ejecucion de `npm audit`.
- Ejecucion de `npm run build`.
- Generacion de 7 paginas estaticas.
- Revision visual en movil, tablet, escritorio y pantalla amplia.
- Verificacion de ausencia de desbordes horizontales en breakpoints principales.

## Criterio editorial

El contenido debe mantenerse alineado con las politicas de Chilete DevPath: autoria clara, uso responsable de IA, publicacion segura y bienestar en el aprendizaje tecnico.

## Autor

Adrian Pisco - Chilete DevPath.
