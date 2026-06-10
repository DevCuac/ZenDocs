---
title: "Estaciones (stations/<id>.yml)"
description: "Define estaciones, menús y recetas disponibles."
---

Campos principales:
- `display-name`
- `permission`
- `creations`: lista de IDs de recetas

### forge-menu
- `title`, `rows`, `pages`, `filler`
- `furnaces`: lista con `id`, `page`, `furnace-slot`, `progress-slots`
- `items`: ítems personalizados (ej. botón cerrar)

### selection-menu
- `title`, `rows`, `filler`
- `recipe-slots`
- `next-page-slot`, `prev-page-slot`, `back-slot`
- `items`: ítems personalizados (ej. botón volver)
