---
title: "Acciones disponibles"
description: "Acciones soportadas en listas de acciones y menús."
---

En listas de acciones (`*-actions`, `menu.items.*.actions`) se soporta:

- `[MESSAGE] <texto>`
- `[CONSOLE] <comando>`
- `[PLAYER] <comando>`
- `[SOUND] <SOUND_NAME>`
- `[BROADCAST] <texto>`
- `[TITLE] <titulo>;<subtitulo>`
- `[ACTIONBAR] <texto>`
- `[CLOSE]`
- `[AURA-STAT] <stat> <amount>` (requiere AuraSkills)

**Placeholders:**
- `%player%` → nombre del jugador
- `%prefix%` → `messages.prefix`

> La implementación actual reconoce **`[AURA-STAT]`**. Otros tags no se ejecutan.
