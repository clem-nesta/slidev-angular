- migration vers standalone
=> ng generate @angular/core:standalone

- Adoption du nouveau contrôle de flux (@if, @for, @switch)
=> ng generate @angular/core:control-flow

- Migration vers l'API inject() pour l'injection de dépendances
=> ng generate @angular/core:inject

- Migration des @Input() vers les signaux (input())
=> ng generate @angular/core:signal-input-migration

- Chargement paresseux des routes avec des composants autonomes
=> ng generate @angular/core:route-lazy-loading

- Migration vers le nouveau système de build application
=> ng update --migrate-only explicit-standalone-flag

=> https://angular.dev/reference/migrations