---
title: "Base de datos"
description: "Persistencia y migración automática."
---

## 📦 Persistencia

- **SQLite (default):** `plugins/ZenFairy/zenfairy.db`
- **MySQL:** opcional (configurable en `config.yml`).

Tablas:
- `zf_found_souls (uuid, soul_type, location)`
- `zf_spent_souls (uuid, soul_type, amount)`

---

## 🔄 Migración automática

Si existe `player_data.yml`, se migrará a la base de datos y se renombrará a:
- `player_data.yml.converted`
