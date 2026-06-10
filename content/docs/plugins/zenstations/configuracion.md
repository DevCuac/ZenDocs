---
title: "Configuración"
description: "config.yml, messages.yml y boosters.yml."
---

## `config.yml`

- `settings.default-forge-slots`: slots activos por defecto.
- `settings.login-notification`: notificación al entrar.
- `settings.xp.base_xp`: XP base por nivel (fórmula: `nivel_actual * base_xp`).
- `settings.level-up-rewards`:
  - `general`: recompensas en cada subida.
  - `specific.<nivel>`: recompensas en niveles exactos.
  - Soporta `commands`, `messages`, `sound`.

## `messages.yml`

Mensajes con prefijo. Claves principales:
- `prefix`, `no-permission`, `station-no-permission`, `creation-no-permission`
- `limit-reached`, `forge-started`, `forge-finished-broadcast`, `forge-claimed`
- `insufficient-materials`, `login-notification-msg`, `reload-success`
- `forge-cancelled`, `refund-returned`, `refund-lost`

## `boosters.yml`

### Boosters de tiempo (`time-boosters`)
- `material`: `itemedit:<id>`, `eco:<ecoitems:id>` o material vanilla.
- `type`: `FIXED` (segundos) o `PERCENTAGE` (% del tiempo).
- `amount`: cantidad aplicada.
- `display-name`, `sound`.

### Boosters de XP (`xp-boosters`)
- `material`: `itemedit:<id>`, `eco:<ecoitems:id>` o material vanilla.
- `multiplier`: multiplicador de XP.
- `duration`: duración en segundos.
- `display-name`.
