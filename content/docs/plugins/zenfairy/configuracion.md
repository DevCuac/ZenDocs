---
title: "Configuración (config.yml)"
description: "Mensajes, menú de ubicaciones y base de datos."
---

## 💬 Mensajes
Ruta: `messages.*`

Claves:
- `prefix`, `reload`, `no-permission`, `player-only`, `unknown-command`
- `invalid-soul-type`, `set-usage`, `reset-usage`, `player-not-found`
- `data-reset-success`, `soul-already-exists`, `look-at-block`
- `soul-found`, `soul-already-found`, `soul-set`, `soul-remove`
- `soul-not-found-at-loc`, `no-menu-configured`, `not-enough-souls`
- `teleporting-to-soul`, `help-message`, `admin-help-message`

> `must-be-head` y `location-read-error` existen pero no se usan en el código actual.

---

## 🧭 Menú de ubicaciones
Ruta: `location-menu`

- `title` (placeholders: `{soul_type_display_name}`, `{current_page}`, `{max_pages}`)
- `rows`
- `location-item`: `material`, `display-name`, `lore`
- `control-items`: `previous-page`, `next-page`, `close-menu`, `filler-item`

---

## 🗄️ Base de datos
Ruta: `database`

- `type`: `sqlite` (default) o `mysql`
- `mysql`: `host`, `port`, `database`, `username`, `password`, `ssl`
