---
title: "Configuración (config.yml)"
description: "Módulos, base de datos y mensajes."
---

```yml
modules:
  prestige: true

database:
  type: "sqlite"  # sqlite | mysql
  sqlite:
    file-name: "database.db"
  mysql:
    host: "localhost"
    port: 3306
    database: "minecraft"
    username: "root"
    password: ""
    useSSL: false

messages:
  prefix: "<dark_purple>[ZenRankups] </dark_purple>"
  ...
```

**Claves relevantes**:
- `modules.prestige`: activa/desactiva prestigios.
- `database`: configuración de SQLite/MySQL.
- `messages`: mensajes del plugin (MiniMessage + códigos legacy).
