---
layout: two-cols
class: object-contain
---

# Exemple d'architecture


<style>
.stack {
  position: relative;
  height: 100px; /* ou la hauteur souhaitée */
}

.stack > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<div class="stack">
  <div v-click v-click-hide>

```mermaid {theme: 'neutral', scale: 0.45}
 graph TD
  A[Feature lazy-loadée]
  A --> B[Routing - guard / resolver]
  B --> C[Façade service]
  C --> D[NGXS Action]
  D --> E[Service]
  E --> F[Converter]
  F --> G[API Service]
  G --> H[patchState]
  H --> I[State NGXS]

```

  </div>

  <div v-click v-click-hide>

```mermaid {theme: 'neutral', scale: 0.45}
 graph TD
  A[Feature lazy-loadée]
  A --> B[Routing - guard / resolver]
  B --> C[Façade service]
  C --> D[NGXS Action]
  D --> E[Service]
  E --> F[Converter]
  F --> G[API Service]
  G --> H[patchState]
  H --> I[State NGXS]

  D <--> I

```
 </div>

   <div v-click v-click-hide>

```mermaid {theme: 'neutral', scale: 0.45}
 graph TD
  A[Feature lazy-loadée]
  A --> B[Routing - guard / resolver]
  B --> C[Composant]
  C <--> D[Façade service]
  D --> E[NGXS Action]
  E --> F[Service]
  F --> G[Converter]
  G --> H[API Service]
  H --> I[patchState]
  I --> J[State NGXS]

  B --> D

  E <--> J

```
 </div>

  <div v-click v-click-hide>

```mermaid {theme: 'neutral', scale: 0.45}
 graph TD
  A[Feature lazy-loadée]
  A --> B[Routing - guard / resolver]
  B --> C[Composant]
  C <--> D[Façade service]
  D <--> E[NGXS Action]
  E --> F[Service]
  F --> G[Converter]
  G --> H[API Service]
  H --> I[patchState]
  I --> J[State NGXS]

  D <--> K[SelectSignal / Select] 
  K <--> L[Selector] 

  E <--> J

  B --> D

  L <--> J

``` 
 </div>

   <div v-click>

```mermaid {theme: 'neutral', scale: 0.45}
 graph TD
  A[Feature lazy-loadée]
  A --> B[Routing - guard / resolver]
  B --> C[Composant]
  C <--> D[Façade service]
  D <--> E[NGXS Action]
  E --> F[Service]
  F --> G[Converter]
  G --> H[API Service]
  H --> I[patchState]
  I --> J[State NGXS]

  D <--> K[SelectSignal / Select] 
  K <--> L[Selector] 

  E <--> J

  B --> D

  L <--> J

  C <--> M[Helper]
  D <--> M
  E <--> M

``` 
 </div>
</div>


::right::

<div class="h-full flex justify-center">
  <img src="../assets/img/architecture.png" class="max-h-[52vh]" />
</div>


- helper
