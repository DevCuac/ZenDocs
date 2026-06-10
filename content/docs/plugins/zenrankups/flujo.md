---
title: "Flujo de juego"
description: "Cómo funciona el rankup paso a paso."
---

1. El jugador intenta subir con `/rankup` o clic en GUI.
2. Se validan requisitos.
3. Si cumple, se descuentan costos y se ejecutan comandos.
4. Se guarda el progreso en base de datos.
5. Opcional: se envía webhook a Discord.

---

## 🧭 Menús GUI

### Menú de rangos (`/ranks`)
- Paginado automático según progresión.
- Estados:
  - **Completado**: item definido en `ranks.yml`.
  - **En progreso**: requisitos con checks (`✔/❌`).
  - **Bloqueado**: item bloqueado.
- Click en el rango siguiente intenta hacer **rankup**.

### Leaderboards (`/ranktop`, `/prestigetop`)
- Top 10 jugadores.
- Muestra cabeza del jugador + rangos/prestigios.
