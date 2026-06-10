---
title: "Permisos"
description: "Nodos de permisos disponibles en ZenStations."
---

- `zenstations.admin` — acceso a `/zs reload` y `/zs give`.
- `zenstations.station.<id>` — acceso a una estación específica.
- `zenstations.creation.<id>` — acceso a una receta específica.
- `zenstations.slots.<n>` — máximo de slots activos (se evalúa de 100 a 1).
- `zenstations.slots.admin` — acceso a 100 slots.

Si el jugador no tiene permisos para una receta, puede mostrarse un ítem de “bloqueado” (`no-permission-item`).
