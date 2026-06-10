---
title: "Menú GUI (menu.yml)"
description: "Menú de progresión de rangos."
---

Controla el menú de rangos:

- `rank-slots`: slots donde se colocan los rangos.
- `filler-item`: item de fondo.
- `close-item`, `previous-page-item`, `next-page-item`: botones.
- `locked-item`, `in-progress-item`: estados visuales.
- `completed-item-lore-append`: lore adicional.
- `display-requirements`: formato por defecto.
- `custom-items`: items extras con comandos.

Ejemplo de item custom:
```yml
custom-items:
  lobby-button:
    material: "COMPASS"
    displayname: "&aRegresar al Lobby"
    slot: 48
    commands:
      - "[PLAYER]lobby"
      - "[CLOSE]"
```
