# ZenForge Docs

Documentación oficial de **ZenForge Studio**, construida con **Next.js 16** y **Fumadocs**.

Este proyecto sirve como wiki/documentación para plugins, configuraciones y recursos de ZenForge. El contenido principal vive en `content/docs` y se renderiza como un sitio navegable bajo la ruta `/docs`.

---

## Stack

- **Next.js**
- **React 19**
- **Fumadocs UI / Fumadocs MDX**
- **TypeScript**
- **Tailwind CSS**

---

## Requisitos

- **Node.js** 20+
- **npm**

---

## Scripts disponibles

```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:3000`.

```bash
npm run build
```
Genera la build de producción.

```bash
npm run start
```
Levanta la build generada.

```bash
npm run types:check
```
Regenera archivos de Fumadocs, genera tipos de Next y ejecuta TypeScript.

---

## Estructura del proyecto

```text
zenforgedocs/
├── content/docs/           # Contenido de la documentación
│   ├── index.mdx           # Portada de /docs
│   ├── meta.json           # Navegación raíz
│   ├── plugins/            # Documentación de plugins
│   ├── config/             # Configuraciones
│   ├── setups/             # Guías de setup
│   └── recursos/           # FAQs, roadmap, créditos, etc.
├── src/app/                # App Router de Next.js
│   ├── (home)/             # Landing principal
│   └── docs/               # Layout y páginas de la documentación
├── src/components/         # Componentes reutilizables
├── src/lib/                # Source loader, layout config y utilidades
├── documentation/          # Archivos fuente o borradores de documentación
├── .source/                # Archivos generados por Fumadocs
└── source.config.ts        # Configuración de colecciones MDX
```

---

## Cómo funciona el contenido

La documentación se organiza principalmente en `content/docs`.

### Archivos importantes

- `content/docs/meta.json`  
  Define el orden de navegación de la documentación.

- `content/docs/index.mdx`  
  Página principal de `/docs`.

- `content/docs/plugins/meta.json`  
  Define el orden de aparición de los plugins en el sidebar.

- `content/docs/plugins/<plugin>/meta.json`  
  Define el título y el orden de páginas internas de cada plugin.

- `src/lib/source.tsx`  
  Carga el árbol de documentación desde Fumadocs y aplica postprocesado visual.

- `src/app/docs/[[...slug]]/page.tsx`  
  Renderiza cualquier página de documentación según el slug.

---

## Añadir o editar documentación

### Editar documentación existente

1. Ubica el archivo dentro de `content/docs/...`
2. Edita el `.md` o `.mdx`
3. Si cambias navegación, actualiza el `meta.json` correspondiente

### Añadir una nueva sección o plugin

1. Crea la carpeta en `content/docs/...`
2. Añade un `meta.json`
3. Crea las páginas `.md` o `.mdx`
4. Registra la carpeta en el `meta.json` del nivel superior si quieres que aparezca en el sidebar

Ejemplo:

```text
content/docs/plugins/zenexample/
├── meta.json
├── introduccion.mdx
├── instalacion.md
└── comandos.md
```

Ejemplo de `meta.json`:

```json
{
  "title": "ZenExample",
  "pages": ["introduccion", "instalacion", "comandos"]
}
```

---

## Notas sobre Fumadocs

Fumadocs genera archivos internos en `.source/`. Si notas comportamientos extraños en rutas, sidebar o imports de contenido, normalmente ayuda ejecutar:

```bash
npm run types:check
```

o al menos:

```bash
npx fumadocs-mdx
```

Esto regenera los archivos usados por el loader de documentación.

---

## Convenciones usadas en este proyecto

- Los nombres de páginas suelen estar en español: `introduccion`, `instalacion`, `comandos`, etc.
- La navegación visible depende del orden en `meta.json`.
- El badge `Soon` en el sidebar se activa añadiendo `(Soon)` al `title` de un `meta.json`.
- Algunas páginas fuente largas o borradores pueden vivir en `documentation/` antes de pasarse al sitio final en `content/docs`.

---

## Solución de problemas

### `/docs` o alguna página devuelve 404

Revisa:
- que el archivo exista en `content/docs`
- que el slug esté incluido en el `meta.json` correcto
- que no haya errores de sintaxis en JSON
- que Fumadocs haya regenerado `.source`

### Error en `meta.json`

Asegúrate de que el JSON sea válido:
- comas correctas
- comillas dobles
- sin comentarios

### Cambios no reflejados en desarrollo

Prueba:

```bash
npx fumadocs-mdx
```

Si sigue igual, reinicia el servidor de desarrollo.

---

## Enlaces útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)
- [Fumadocs MDX](https://fumadocs.dev/docs/mdx)

---

## Objetivo del repositorio

Mantener una documentación clara, navegable y fácil de extender para todos los productos de **ZenForge Studio**.
