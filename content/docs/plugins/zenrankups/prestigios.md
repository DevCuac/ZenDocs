---
title: "Prestigios (prestige.yml)"
description: "Configuración de niveles de prestigio."
---

```yml
default-prestige: 0

prestiges:
  1:
    displayname: "&aPrestigio I"
    symbol: "&a[Prestigio I]"
    reset-ranks: true
    requeriments:
      - "[COST-VAULT] 1000"
    command:
      - "[CONSOLE]give %player% diamond 5"
```

**Notas clave**:
- Para prestigiar, el jugador debe estar en el **rango máximo**.
- `reset-ranks: true` reinicia al `default-rank`.
- Requisitos y comandos funcionan igual que en `ranks.yml`.
