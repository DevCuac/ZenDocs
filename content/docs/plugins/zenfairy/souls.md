---
title: "Tipos de almas (souls/<tipo>.yml)"
description: "Estructura y campos principales de cada tipo de alma."
---

El nombre del archivo define el **tipo** (ID). Ej: `fairy.yml` → tipo `fairy`.

## 🧱 Campos principales

- `display-name` — nombre visible del tipo.
- **Sonidos**:
  - `soul-found-sound`
  - `soul-already-found-sound`
  - `all-souls-found-sound`
- **Partículas**:
  - `constant-soul-particle` *(no se usa actualmente)*
  - `found-soul-particle`
- **Acciones**:
  - `first-soul-found-actions`
  - `soul-found-actions`
  - `all-souls-found-actions`
- **Animación**:
  - `found-soul-animation` (enabled/texture/duration/spin-speed/rise-speed)
- **Menú de recompensas**:
  - `menu` → `title`, `rows`, `filler`, `items`
- `locations` — lista de ubicaciones serializadas.

### Formato de ubicación
`world;x;y;z`
