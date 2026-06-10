---
title: "Menús (menus/*.yml)"
description: "GUI de detalles de receta y progreso de niveles."
---

## `menus/recipe_detail.yml`

- `title`, `rows`
- `layout` (matriz de caracteres)
- `slots.requirements`, `slots.result`, `slots.forge-btn`, `slots.back-btn`
- `forge-button`, `trade-button`, `back-button`
- `decorations`

## `menus/level_progress.yml`

- `title`, `rows`, `pages`
- `prev-page-slot`, `next-page-slot`, `back-slot`
- `level-slots.page-<n>`
- `states.unlocked|progress|locked`
- `filler`, `back-button`
