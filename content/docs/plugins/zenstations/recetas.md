---
title: "Recetas (creations/<id>.yml)"
description: "Recetas por tiempo o intercambio directo."
---

Campos principales:
- `display-name`
- `permission`
- `type`: `TIME` o `DIRECT`
- `duration`: tiempo en segundos (para `TIME`)
- `refund-on-cancel`: reembolso si se cancela

### result
- `material`: `itemedit:<id>`, `eco:<ecoitems:id>` o material vanilla
- `name`, `lore`, `custom-model-data`

### materials
- `material`, `amount`, `display-name`

### Opcionales avanzados
- `required-level`
- `xp-gain`:
  - `type`: `FIXED` o `RANGE`
  - `amount`: fijo o rango tipo `10-20`
- `claim-cosmetics`: `sound`, `particle`, `particle-count`
- `no-permission-item`: `material`, `name`, `lore`
