---
title: "Webhooks (webhooks.yml)"
description: "Embeds a Discord en eventos clave."
---

Eventos:
- `rankup`
- `prestige`
- `reset`

Placeholders disponibles:
- `%player%`, `%player_uuid%`
- `%old_rank%`, `%new_rank%`
- `%prestige%`, `%prestige_display%`
- `%reason%`

Cada webhook tiene:
- `url`, `enabled`, `username`, `avatar_url`
- `embed` con `title`, `description`, `color`, `thumbnail_url`, `fields`, `footer`
