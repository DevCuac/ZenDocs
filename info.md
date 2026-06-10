# 🛠️ Guía de Integraciones y Componentes Avanzados de Fumadocs

Esta guía detalla las 17 integraciones, componentes lógicos y elementos de interfaz de usuario (UI) que tienes disponibles en tu proyecto **ZenForge Docs**. Aquí aprenderás qué es cada uno, cómo puede aplicarse a los plugins de Minecraft de **ZenForge Studios** y ejemplos listos para copiar y pegar en tus archivos MDX.

---

## 🚀 1. Integraciones y Herramientas del Sistema

### 🔍 Validate Links (Validador de Enlaces)
* **¿Qué es?** Un validador que escanea todos los enlaces de tus archivos MDX durante el proceso de compilación (`npm run build`).
* **Utilidad para Minecraft:** Evita que publiques páginas con links rotos. Si accidentalmente escribes `[Comandos](comndos)` en lugar de `[Comandos](comandos)`, la compilación fallará y te mostrará la línea exacta del error.
* **Cómo usar:** Funciona de forma automática en el compilador de fondo; no requiere código adicional.

### 💬 FeedBack (Calificaciones de Usuarios)
* **¿Qué es?** Un componente al final de las páginas que permite a los usuarios calificar si una guía fue útil con votos de 👍 y 👎, o comentarios breves.
* **Utilidad para Minecraft:** Excelente para medir si tus guías de configuración de bases de datos o comandos son fáciles de entender para los administradores de servidores.
* **Cómo usar:** Se puede activar en el diseño inferior de las páginas agregando un backend simple para almacenar las puntuaciones.

### 💻 Content Generators TypeScript (Generador de API desde Código)
* **¿Qué es?** Un extractor que lee archivos `.ts` y genera tablas de documentación técnicas a partir de tus tipos y comentarios de código.
* **Utilidad para Minecraft:** Si en el futuro ofreces APIs de desarrollo en TypeScript/JavaScript para tus tableros web, esto autogenerará la documentación del programador de forma instantánea a partir del código fuente.

---

## 🗂️ 2. Componentes Headless (Navegación e Índices)

### 🍞 Breadcrumb (Migas de Pan)
* **¿Qué es?** La barra de navegación que muestra la jerarquía actual del documento (ej. `Docs > Plugins > ZenRewards > Comandos`).
* **Utilidad para Minecraft:** Permite que los administradores de servidores sepan exactamente en qué sección de la documentación se encuentran. Ya viene activo por defecto en la barra superior de tu wiki.

### 🔗 Link (Enlace Inteligente)
* **¿Qué es?** Un componente optimizado para enlaces internos que pre-carga páginas de forma instantánea. Además, añade automáticamente un icono de flecha hacia arriba a la derecha si es un enlace externo.
* **Utilidad para Minecraft:** Ideal para enlazar a tu servidor de Discord, la página de compra en SpigotMC o tu organización de GitHub.
* **Ejemplo MDX:**
  ```mdx
  Visita nuestro [Discord Oficial](https://discord.gg/zenforge) para obtener soporte en tiempo real.
  ```

### 📋 TOC (Table of Contents / Tabla de Contenidos)
* **¿Qué es?** El menú flotante que aparece en la derecha de la pantalla listando los títulos de la página.
* **Utilidad para Minecraft:** Crucial en páginas extensas (como la guía completa de placeholders de un plugin). Permite a los usuarios saltar directamente a una sección haciendo clic a la derecha sin hacer scroll infinito.

---

## 🎨 3. Componentes de Interfaz de Usuario (UI)

### 📑 Tabs (Pestañas Interactivas)
* **¿Qué es?** Pestañas que permiten alternar bloques de contenido en el mismo espacio físico.
* **Utilidad para Minecraft:** El estándar de oro para separar instrucciones según el software de servidor (Paper, Spigot, Folia) o el tipo de base de datos.
* **Ejemplo MDX:**
  ```mdx
  import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

  <Tabs items={['Paper / Purpur', 'Spigot', 'Folia']}>
    <Tab value="Paper / Purpur">
      Coloca el archivo `.jar` en la carpeta `plugins/` y enciende tu servidor.
    </Tab>
    <Tab value="Spigot">
      Asegúrate de contar con la librería externa **XSeries** para compatibilidad de bloques en 1.21.
    </Tab>
    <Tab value="Folia">
      Compatible nativamente. El plugin dividirá automáticamente las tareas de guardado de datos en tareas regionales.
    </Tab>
  </Tabs>
  ```

---

### 📊 Type Table (Tablas de Parámetros)
* **¿Qué es?** Una tabla moderna y premium diseñada específicamente para describir propiedades, tipos de datos, valores por defecto y explicaciones detalladas.
* **Utilidad para Minecraft:** La mejor forma de detallar archivos `config.yml` o placeholders de PlaceholderAPI de forma limpia y legible.
* **Ejemplo MDX:**
  ```mdx
  import { TypeTable } from 'fumadocs-ui/components/type-table';

  ### Opciones de Base de Datos (config.yml)

  <TypeTable
    type={{
      "database.type": {
        type: 'string',
        default: 'sqlite',
        description: 'Tipo de almacenamiento de datos. Valores soportados: `sqlite`, `mysql` y `postgresql`.'
      },
      "database.sync-interval": {
        type: 'integer',
        default: '300',
        description: 'Intervalo en segundos para sincronizar y guardar la información del jugador en la base de datos.'
      },
      "hooks.placeholderapi": {
        type: 'boolean',
        default: 'true',
        description: 'Define si el plugin registrará automáticamente sus variables en PlaceholderAPI.'
      }
    }}
  />
  ```

---

### 🪜 Steps (Tutoriales por Pasos)
* **¿Qué es?** Convierte listas numeradas comunes en flujos visuales con líneas continuas verticales y círculos numerados.
* **Utilidad para Minecraft:** Perfecto para la guía de "Instalación Rápida" o "Configuración de Bases de Datos".
* **Ejemplo MDX:**
  ```mdx
  import { Steps, Step } from 'fumadocs-ui/components/steps';

  <Steps>
    <Step title="Paso 1: Descarga">
      Descarga el archivo `.jar` del plugin desde el portal de lanzamientos oficiales.
    </Step>
    <Step title="Paso 2: Instalación">
      Coloca el archivo dentro del directorio `/plugins` de tu servidor de Minecraft.
    </Step>
    <Step title="Paso 3: Reinicio">
      Reinicia tu servidor para generar la carpeta de configuración por defecto.
    </Step>
  </Steps>
  ```

---

### 📍 Inline TOC (Índice en el Cuerpo de Texto)
* **¿Qué es?** Dibuja una tabla de contenidos interactiva dentro del propio texto de la página en lugar del lateral derecho.
* **Utilidad para Minecraft:** Ideal para páginas de inicio, preguntas frecuentes (FAQ) o glosarios del plugin.
* **Ejemplo MDX:**
  ```mdx
  import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

  En esta página explicaremos todos los conceptos clave de este plugin. Puedes usar el índice para ir directamente:

  <InlineTOC />
  ```

---

### 🔍 Zoomable Image (Zoom de Imágenes)
* **¿Qué es?** Permite que al hacer clic en cualquier imagen de la documentación, esta se expanda en pantalla completa con un fondo translúcido y elegante.
* **Utilidad para Minecraft:** **Imprescindible** cuando subes imágenes de tus menús interactivos (`GUIs`), hologramas en el juego o imágenes de chat. Evita que los usuarios fuercen la vista.
* **Ejemplo MDX:**
  ```mdx
  import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

  Diseño por defecto del menú principal del sistema de recompensas:

  <ImageZoom src="/images/menu-rewards.png" alt="Menú Rewards de ZenRewards" width={600} height={350} />
  ```

---

### 📂 Files (Explorador de Archivos Visual)
* **¿Qué es?** Dibuja un árbol de carpetas e iconos que simula un explorador de archivos real.
* **Utilidad para Minecraft:** Muestra a los usuarios la estructura de carpetas generada en `plugins/<NombrePlugin>` para que sepan exactamente dónde está cada archivo de configuración.
* **Ejemplo MDX:**
  ```mdx
  import { File, Folder, Files } from 'fumadocs-ui/components/files';

  <Files>
    <Folder name="ZenRewards" defaultOpen>
      <Folder name="playerdata">
        <File name="uuid-del-jugador.yml" />
      </Folder>
      <File name="config.yml (Configuración principal)" />
      <File name="menu.yml (Personalización de menús)" />
      <File name="rewards.yml (Definición de premios)" />
    </Folder>
  </Files>
  ```

---

### ⚡ 13 y 14. Code Blocks (Bloques de Código Estáticos y Dinámicos)
* **¿Qué es?** Un visualizador de código de alto rendimiento que incluye nombre del archivo, resaltado de líneas, copiado fácil en un clic y coloreado sintáctico inteligente.
* **Utilidad para Minecraft:** Ideal para pegar plantillas y fragmentos de tus archivos `.yml` listos para ser editados.
* **Ejemplo MDX (Resaltando las líneas 3 y 4):**
  ```yml title="plugins/ZenRewards/config.yml" {3-4}
  # Configuración principal de ZenRewards
  settings:
    update-checker: true
    debug-mode: false # Cambia a true para ver logs detallados en consola
  ```

---

### 📢 15. Banner (Barras de Anuncios Colapsables)
* **¿Qué es?** Una barra flotante en el extremo superior de la página para dar anuncios que el usuario puede cerrar si le molesta.
* **Utilidad para Minecraft:** Anunciar temporadas de ofertas de ZenForge Studio, lanzamientos importantes o avisos de vulnerabilidades.
* **Ejemplo MDX:**
  ```mdx
  import { Banner } from 'fumadocs-ui/components/banner';

  <Banner id="ofertas-verano">
    🎉 ¡Gran venta de verano en ZenForge! Obtén un <b>30% de descuento</b> en todos nuestros plugins premium con el código <b>ZENVERANO</b>.
  </Banner>
  ```

---

### 📈 16. Auto Type Table (Tablas Automáticas avanzadas)
* **¿Qué es?** Extrae y genera de forma dinámica las propiedades directamente de tus archivos de tipos TypeScript sin escribirlas de forma manual en tablas.
* **Utilidad para Minecraft:** Útil si cuentas con una base de código Typescript para tus paneles web.

---

### 🪗 17. Accordion (Acordeones Colapsables)
* **¿Qué es?** Pestañas desplegables verticalmente que ocultan y muestran información al hacer clic en su título.
* **Utilidad para Minecraft:** Ideal para FAQs (Preguntas frecuentes) o para listar listas enormes de sonidos de Minecraft o identificadores de materiales sin llenar la página de texto largo.
* **Ejemplo MDX:**
  ```mdx
  import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

  <Accordions>
    <Accordion title="¿El plugin causa lag en servidores grandes?">
      No. Todas las tareas de escritura en archivos de base de datos se ejecutan de manera asíncrona fuera del hilo principal del servidor de Minecraft para garantizar 20 TPS constantes.
    </Accordion>
    <Accordion title="¿Cómo configuro permisos con LuckPerms?">
      Todos los comandos tienen sus respectivos permisos detallados en la pestaña de Comandos. Por ejemplo, el comando para reclamar la recompensa diaria requiere `zenrewards.claim.daily`.
    </Accordion>
  </Accordions>
  ```

---

¡Puedes consultar esta guía o copiar directamente cualquier bloque MDX desde este archivo en la raíz de tu proyecto siempre que lo necesites para construir la documentación de ZenForge! 🚀
