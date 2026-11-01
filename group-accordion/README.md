# Accordéon par groupe

Cette page affiche les étudiants dans un accordéon Bootstrap, avec une section repliable pour chaque groupe.

## Organisation des fichiers

| Fichier         | Rôle                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `../data.mjs`   | Exporte le tableau de données `students`.                                                       |
| `transform.mjs` | Regroupe les étudiants par propriété `group` avec `Object.groupBy()`.                           |
| `render.mjs`    | Exporte `renderGroupAccordion(groupName, students)`, qui génère le HTML d’une section.          |
| `app.mjs`       | Regroupe les données, génère les sections et les insère dans `#accordionGroups`.                |
| `index.html`    | Fournit la structure de la page, charge Bootstrap et exécute `app.mjs` comme module JavaScript. |

## Fonctionnement

1. `app.mjs` importe `students` depuis `../data.mjs`.
2. `groupStudentsByGroup(students)` regroupe les étudiants selon leur propriété `group`.
3. `Object.entries()` convertit l’objet produit en paires `[groupe, étudiants]`.
4. Chaque paire est transmise à `renderGroupAccordion()`, puis les sections HTML sont réunies.
5. Le HTML est inséré dans `#accordionGroups`. Le JavaScript de Bootstrap active le repli et l’ouverture des sections.

## Lancer la page

Depuis la racine du projet, démarrez un serveur web local, par exemple avec l’extension Live Server de VS Code, puis ouvrez `group-accordion/index.html`. Le serveur permet au navigateur de charger les modules ES. Bootstrap est chargé depuis un CDN, une connexion Internet est donc nécessaire.

## Sécurité

Le rendu est inséré avec `innerHTML`. Les noms et les notes proviennent actuellement des données du projet. Si vous ajoutez des données non fiables, insérez-les comme texte ou échappez-les avant de les inclure dans le HTML.
