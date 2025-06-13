---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Angular 18 & 19
info: |
  ## Communauté devs
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
---

# Angular 18 & 19

Communauté de devs

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Entrer <carbon:arrow-right />
</div>

---
transition: fade-out
---

# Pourquoi cette présentation

Voyons ensemble les dernières nouveautés, quelques exemples pertinents. Et les bonnes pratiques associées.

- 📝 **Nouveautés** -> Présentation générale des nouveautés Angular.
- 🎨 **Signal vs zone.js** -> L'interêt de se passer de zone.js.
- 🧑‍💻 **Signal vs Observable et complémentarité** -> Angular réactif. 
- 🤹 **Migration** -> Aide à la montée de version.
- 🎥 **Architecture** -> Un exemple d'architecture employé en mission.

<br>
<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-up
src: ./pages/features.md
---

---
transition: slide-up
src: ./pages/schematics.md
---

---
transition: slide-up
src: ./pages/architecture.md
---

---
---

# Index

<Toc text-sm minDepth="1" maxDepth="2" />

---
layout: image-right
image: https://cover.sli.dev
---

Merci de votre attention