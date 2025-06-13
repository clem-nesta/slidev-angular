---
level: 2
---

# Contrôle de flux (@if, @for, @switch)

<div grid="~ cols-2 gap-4">
<div>

###### @if

````md magic-move {lines: true}
```ts {*|1,4}
<div *ngIf="user; else noUser">
  Bonjour {{ user.name }} !
</div>
<ng-template #noUser>
  <p>Utilisateur inconnu</p>
</ng-template>
```

```ts {1,5|*}
@if (user) {
  <div>
    Bonjour {{ user.name }} !
  </div>
} @else {
  <p>Utilisateur inconnu</p>
}
```
````

</div>

<div>

###### @for

````md magic-move {lines: true}
```html {*|2}
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

```html {2|*}
<ul>
  @for (item of items; track item) {
    <li>{{ item }}</li>
  }
</ul>
```
````

</div>
</div>

<br>

###### @switch

````md magic-move {lines: true}
```html {*|1}
<div [ngSwitch]="status">
  <p *ngSwitchCase="'loading'">Chargement...</p>
  <p *ngSwitchCase="'success'">Succès ✅</p>
  <p *ngSwitchDefault>Erreur ❌</p>
</div>
```

```ts {1,2|*}
@switch (status) {
  @case ('loading') {
    <p>Chargement...</p>
  }
  @case ('success') {
    <p>Succès ✅</p>
  }
  @default {
    <p>Erreur ❌</p>
  }
}
```
````

<!-- Le mot-clé **track** dans la directive @for (introduite dans Angular 17) sert à optimiser le rendu de la boucle en identifiant de manière unique chaque élément. C’est équivalent à trackBy dans *ngFor.

Une gestion plus fine du DOM
Une meilleure compatibilité avec Zone-less
Moins de recalculs DOM grâce à track
=> En gros : plus de perfs, surtout sur de grandes listes dynamiques.

Détection de type améliorée
Grâce à la syntaxe structurée, Angular peut :
Mieux détecter les erreurs de type
Offrir plus d’auto-complétion dans les IDE
 -->

---
layout: image-left
image: https://cover.sli.dev
---

# Composant standalone et lazy-loadé

```ts {2|*}
@Component({
  standalone: true,
  selector: "app-user-card",
  imports: [CommonModule],
  templateUrl: "./user-card.component.html",
})
export class UserCardComponent {
  user$ = this.userService.getUser();
}
```

<br>

```html {1,3,5,7|*}
@defer (when product$ | async) {
<product-view [product]="product" />
} @placeholder {
<div class="loader">Chargement du produit...</div>
} @loading {
<app-loading-spinner />
} @error {
<p class="text-red-500">Erreur de chargement 😢</p>
}
```

---
---

# Zone.js pour une application réactive
<style>
  p {
    color: orange;
    border: 1px solid orange;
    text-align: center;
    padding: 10px
  }

</style>
<div grid="~ cols-2 gap-4">
<div>

- Librairie JavaScript qui **patch** les API async (setTimeout, Promises, XHR…)
- Angular (depuis V2) s’appuie dessus pour **savoir automatiquement quand lancer la détection des changements**

<div v-click="1" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
>
<br>
<br>
  <p>Trop magique et trop gourmand</p>
</div>

</div>

<div>

```mermaid {theme: 'neutral', scale: 0.5}
graph TD
  A[Zone.js] --> B[Événement déclenché : http, setTimeout, observable]
  B --> C[Angular détecte un changement]
  C --> D[Traverse l'arbre des composants]
  D --> E[AppComponent racine]
  E --> F[HeaderComponent]
  E --> G[MainComponent]
  G --> H[SidebarComponent]
  G --> I[ContentComponent]
  I --> J[WidgetA]
  I --> K[WidgetB]
```
</div>
</div>

---
---

# Zoneless pour une meilleure application réactive
<div grid="~ cols-2 gap-4">
<div>

- Dépendance externe progressivement retiré d'Angular.
- Angular au travers des signals, sait exactement quel composant mettre à jour.

</div>

<div>

```mermaid {theme: 'neutral', scale: 0.5}
graph TD
A[Zoneless Angular] --> B[Signals, EventHandlers]
  B --> C[Détection ciblée]
  C --> D[Composant concerné uniquement]
```
</div>


</div>

<div v-click="1" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
>

<div grid="~ cols-2 gap-4">

<div>
```ts {*}
Typescript
providers: [
    provideZoneChangeDetection('noop') //in main.ts
  ]

changeDetection: ChangeDetectionStrategy.OnPush

const count = signal(0);
const double = computed(() => count() * 2);

effect(() => {
  console.log("Double:", double());
});

count.set(1);
```
</div>

<div>
```html {*}
Template html
<div>
    <p>{{count()}}</p>
    <p>{{double()}}</p>
</div>
```
</div>

</div>

</div>
---
---

# Signal props binding

- Intègre les capacités des signals (computed, effect, etc)

<br>

### Input()
<div grid="~ cols-2 gap-4">

<div>
````md magic-move {lines: true}
```ts {*|1}
@Input()
protected name: string:
```

```ts {*}
protected name = input.required<string>();
```
````
</div>


<div>
````md magic-move {lines: true}
```html {1|0}
<mon-composant-enfant [name]='Grégory'></mon-composant-enfant>
```

```html {1}
<mon-composant-enfant [name]='Grégory'></mon-composant-enfant>
```
````
</div>


</div>

<br>
<br>

### Output()
<div grid="~ cols-2 gap-4">

<div>
````md magic-move {lines: true}
```ts {*|1,2}
@Output()
protected setName = new EventEmitter<string>():

this.setName.emit('Grérory')
```

```ts {*}
protected setName = output<string>();

this.setName.emit('Grérory')
```
````
</div>


<div>
````md magic-move {lines: true}
```html {1|0}
<mon-composant-enfant (setName)='setName($event)'></mon-composant-enfant>
```

```html {1}
<mon-composant-enfant (setName)='setName($event)'></mon-composant-enfant>
```
````
</div>


</div>
---
---

# Signal vs Observable
- Pas de librairie externe
- Aucun risque de fuite de mémoire (unsubscribe automatique)

<br>

<div grid="~ cols-2 gap-4">

<div>
```html {*}
<div>
  <p>{{name$ | async}}</p>
</div>
```
</div>

<div>
<div>
```html {*}
<div>
  <p>{{name()}}</p>
</div>
```
</div>
</div>
</div>

<br>

<div grid="~ cols-2 gap-4">

<div>
```ts {*}
this.name$.subscribe(data => console.log(data))
```
</div>

<div>
<div>
```ts {*}
console.log(this.name())
```
</div>
</div>
</div>

---
---

# Signal ET Observable

<div grid="~ cols-2 gap-4">

<div>

### Observable

- Flux de données asynchrones : appels HTTP, WebSocket, timers, etc.

- Opérations complexes sur les flux : transformation, filtrage, combinaison de plusieurs flux.

- toObservable()

</div>
<div>

### Signal

- Réactivité locale et simple : gestion d’état dans un composant ou service.

- Optimisation des performances : Angular peut mieux détecter les changements.

- toSignal()

</div>
</div>

```ts {*}
const users$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(query => query.length > 2),
      switchMap(query =>
        this.userService.searchUsers(query).pipe(
          catchError(() => of([])) // En cas d'erreur, on retourne une liste vide
        )
      )
    );

this.users = toSignal(users$, { initialValue: [] });
```

---
---

#  Rappel sur les pipes RxJS
Les pipes permettent de chaîner des opérateurs pour transformer ou manipuler des observables :

- map(fn) : transforme les valeurs.
- switchMap(fn) : annule l’observable précédent et en crée un nouveau.
- mergeMap(fn) : fusionne plusieurs observables.
- concatMap(fn) : exécute les observables les uns après les autres.

- filter(fn) : filtre les valeurs.
- take(n) : prend les n premières valeurs.
- debounceTime(ms) : attend un délai avant d’émettre.
- distinctUntilChanged() : ignore les doublons consécutifs.

- catchError(fn) : intercepte les erreurs.
- retry(n) : réessaie n fois en cas d’erreur.