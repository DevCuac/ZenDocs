---
title: "Menús"
description: "Menú de recompensas y menú de ubicaciones."
---

## 🎁 Menú de recompensas

Comando: `/zf menu [tipo]`

Cada ítem puede definir:
- `display-name`, `material`, `texture` (cabezas), `slot`
- `souls-required`
- `available-lore` / `unavailable-lore`
- `actions`

Si el jugador no tiene almas suficientes:
- Se muestra `unavailable-lore`.
- Se envía `not-enough-souls` y sonido de aldeano.

**Placeholders de lore:**
- `{souls_found}`, `{souls_available}`, `{souls_required}`

---

## 🗺️ Menú de ubicaciones (admin)

Comando: `/zf location [tipo]`

- Menú paginado con ubicaciones configuradas.
- Click en una ubicación → teletransporta al jugador y reproduce sonido.
