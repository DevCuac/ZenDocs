---
title: "Rangos (ranks.yml)"
description: "Definición de rangos, requisitos y recompensas."
---

```yml
default-rank: A1

ranks:
  A1:
    displayname: '&dA1'
    symbol: '&d[A1]'
    next-rank: A2
    item:
      material: "redstone"
      displayname: "&dA1"
      lore:
        - "&6Linea 1"
      slot: 12
      glow: true
```

## ✅ Requisitos (`requeriments` / `requirements`)

- **Vault:** `[COST-VAULT] <cantidad>`
- **PlayerPoints:** `[COST-PLAYERPOINTS] <cantidad>`
- **EcoBits/Eco:** `[COST-ECOBITS-<moneda>] <cantidad>`
- **PlaceholderAPI:** `[PLACEHOLDER]%placeholder% <operador> <valor>`
  - Operadores: `>=`, `<=`, `==`, `!=`, `>`, `<`

Ejemplo:
```yml
requeriments:
  - "[PLACEHOLDER]%statistic_mine_block% >= 20"
  - "[COST-VAULT] 20"
```

### Requisitos visibles en GUI

- `display-requeriments` / `display-requirements`: lista alineada por índice.
- Puedes definir un **display custom por línea** usando `|`:

```yml
- "[COST-VAULT] 20 | &7Costo: &a$20"
```

## 🎁 Recompensas (`command` / `commands`)

- `[CONSOLE]comando`
- `[PLAYER]comando`
- Si no hay prefijo, se ejecuta como consola.

Ejemplo:
```yml
command:
  - "[CONSOLE]give %player% diamond 1"
```
