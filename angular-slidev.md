
---
title: Angular 18 & 19 — Ce qui change (en mieux)
layout: default
theme: seriph
download: true
transition: slide-left
highlighter: shiki
---

# Angular 18 & 19  
### 🚀 Ce qui change, ce qui s'améliore, et comment en tirer parti

::animate-fade-in-down
---

## Pourquoi cette présentation ?

::list-animate-in
- Angular évolue vite, parfois dans l’ombre de React et Vue
- Les versions 18 et 19 apportent des vraies **améliorations DX & perfs**
- On va faire le tour :
  - des nouveautés
  - de leur impact concret
  - avec des exemples avant / après
:::

---

layout: center

# Angular 18 🧩  
### Les vraies nouveautés utiles

::animate-slide-in-left
---

## ✅ Signals (stables)

> Angular 18 stabilise les **signals** introduits en preview dans Angular 16

::columns
:::left

### Avant
```ts
@Component({
  template: `{{ counter }}`
})
export class CounterCmp {
  counter = 0;
}
```

:::

:::right

### Après
```ts
import { signal } from '@angular/core';

@Component({
  template: `{{ counter() }}`
})
export class CounterCmp {
  counter = signal(0);
}
```
:::
:::

::note
👉 Un modèle **réactif**, sans RxJS si on veut.
:::

---

## ✨ Control Flow syntax

> Une nouvelle syntaxe plus intuitive

::animate-fade-in-up

```html
@if (user.isLoggedIn) {
  <p>Bienvenue {{ user.name }} !</p>
} @else {
  <p>Veuillez vous connecter.</p>
}
```

✅ Plus lisible, plus proche de la logique TypeScript.

---

## 🎯 Zoning-less

> Angular avance vers un monde sans Zone.js

::list-animate-in
- ✅ Moins de magie noire
- ⚡ Meilleures perfs
- 🔍 Plus simple à debugger
:::

### Exemple
```ts
bootstrapApplication(AppComponent, {
  providers: [...],
  zone: 'noop', // ou rien du tout !
});
```

---

## 💡 Autres nouveautés Angular 18

::list-animate-in
- `@Input()` required (enfin !)
- Image directive améliorée pour le lazy loading
- `@angular/ssr` évolue pour un meilleur SSR out-of-the-box
:::

---

layout: center

# Angular 19 🔮  
### Ce qu'on entrevoit déjà

::animate-zoom-in
---

## Angular 19 (RC/preview)

::list-animate-in
- Renforcement des **Signals dans les formulaires**
- **Forms refactor**, approche plus unifiée Template/Reactive
- **Mise à jour de la CLI** : plus rapide, plus smart (caching, etc.)
- Meilleure intégration avec **Vite**
:::

---

## Exemple AVANT / APRÈS

::columns
:::left

### 🧱 Avant — Reactive Forms
```ts
this.form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
});
```

:::

:::right

### ⚡ Après (preview concept)
```ts
email = signal('');
form = group({ email });
```
:::
:::

::note
- Moins de boilerplate
- Compatible signals = plus fluide
:::

---

## 💎 Bonnes pratiques évolutives

::animate-fade-in-up

| Avant | Maintenant |
|-------|------------|
| `@Input()` sans validation | `@Input({ required: true })` |
| Tout en RxJS | Signals dès que possible |
| `ngIf`, `ngFor` un peu bruts | Control Flow syntax (`@if`, `@for`) |
| Zone.js obligatoire | Bootstrap sans Zone.js |

---

## 👨‍🏫 Quand adopter ces nouveautés ?

::list-animate-in
- **Signals** : déjà prêts ! Adoptez-les dès Angular 18
- **Control flow** : expérimental → test dans des petits projets
- **Zoneless** : à expérimenter, selon vos libs
- **Angular CLI (Vite)** : en beta, mais très prometteur
:::

---

layout: center

# 🔧 Migration avec les schematics  
### Pas de panique, Angular te guide 🛠️

::animate-slide-in-left
---

## C’est quoi un schematic ?

::list-animate-in
- Une commande CLI qui **modifie automatiquement ton code**
- Angular les utilise pour :
  - Mettre à jour des APIs dépréciées
  - Migrer vers une nouvelle syntaxe
  - Modifier le `tsconfig`, `angular.json`, etc.
:::

---

## ✅ La commande magique

```bash
ng update @angular/core@18 @angular/cli@18
```

::note
👉 Cette commande applique **tous les schematics de migration** disponibles pour cette version
:::

::animate-fade-in-up
- Analyse ton projet
- Applique des changements automatiques
- Te laisse voir ce qui a été modifié

---

## Exemple : migration vers Signals

::columns
:::left

### Avant
```ts
@Component({
  template: `{{ title }}`
})
export class AppComponent {
  title = 'Hello';
}
```

:::

:::right

### Après schematic
```ts
import { signal } from '@angular/core';

@Component({
  template: `{{ title() }}`
})
export class AppComponent {
  title = signal('Hello');
}
```
:::
:::

::note
➡️ Ce type de refacto peut être **suggéré** ou effectué selon les schematics actifs
:::

---

## Suivi des changements

::list-animate-in
- Angular crée automatiquement un **changelog clair**
- Tu peux tester les migrations avant via :
```bash
ng update --dry-run
```
- Utilise Git pour voir tous les fichiers modifiés 👀

---

## Bonnes pratiques migration

::list-animate-in
- Fais une branche dédiée : `git checkout -b upgrade/angular18`
- Lance les updates avec `--force` si besoin
- Relis bien le `CHANGELOG.md` officiel
- Active le **strict mode** pour profiter des vérifs TS
- ⚠️ Teste bien toutes les features critiques de ton app !
:::

---

layout: center

# 🎉 Migration = pas de stress  
### Les outils sont là, il suffit de les utiliser 💡

::animate-fade-in-down
---

## TL;DR

::list-animate-in
- Angular 18 stabilise **Signals**, les rend ultra utiles
- Angular 19 pousse encore plus loin la simplification
- On passe d’un framework **verbeux** à un framework **réactif, fluide et léger**
- Les bonnes pratiques changent, dans le bon sens
:::

---

## ❤️ Merci !

### Des questions ?  
Ou juste envie de parler Angular ☕  
→ [linkedin.com/in/tonprofil](#)

::animate-fade-in-up
---
