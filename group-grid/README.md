# Grille d’étudiants par groupe

Cette page affiche un titre et des cartes pour chaque étudiant. Une grille CSS est générée dynamiquement afin de placer les éléments dans la colonne de leur groupe.

## Organisation des fichiers

- `studentsData.mjs` contient des données locales d’exemple. `main.mjs` importe actuellement les données partagées depuis `../data.mjs`.
- `transformStudentsToCards.mjs` prépare les titres de groupe et les cartes HTML des étudiants.
- `generateDynamicCSS.mjs` produit les règles de grille selon les groupes présents.
- `renderToDom.mjs` insère les éléments HTML dans le conteneur.
- `main.mjs` coordonne les transformations, les styles et le rendu.
- `index.html` fournit le conteneur `.amphi`, charge les styles Bootstrap et exécute `main.mjs`.

## Lancer la page

Depuis la racine du projet, démarrez un serveur web local puis ouvrez `group-grid/index.html`. La page utilise des modules JavaScript et charge Bootstrap depuis un CDN.
