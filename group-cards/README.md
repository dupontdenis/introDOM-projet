# Une carte par groupe

Cette page présente les étudiants sous forme de cartes, à raison d’une carte par groupe. Le code est réparti en modules qui distinguent les données, leur transformation et leur rendu.

## Organisation des fichiers

- `../data.mjs` fournit le tableau de données `students`.
- `transform.mjs` exporte `groupStudentsByGroup(students)`, qui rassemble les étudiants selon leur propriété `group`.
- `render.mjs` définit les fonctions de génération du HTML pour un étudiant, une liste et une carte. Seule `renderGroupCard` est exportée, car le module principal est le seul à en avoir besoin.
- `script.mjs` importe les données et les fonctions nécessaires, génère les cartes de tous les groupes et les ajoute à l’élément `#app`.
- `index.html` contient l’élément `#app` et charge `script.mjs` en tant que module JavaScript.

## Du tableau aux cartes

1. `script.mjs` récupère `students` depuis `../data.mjs`.
2. `groupStudentsByGroup(students)` s’appuie sur `Object.groupBy()` pour créer un objet associant chaque groupe à la liste de ses étudiants.
3. `Object.entries(studentsByGroup)` rend les groupes parcourables. `map()` crée une carte avec `renderGroupCard()` pour chacun d’eux, puis `join("")` réunit les cartes dans une chaîne HTML.
4. `renderGroupCard()` utilise `renderStudentsList()` pour produire la liste du groupe. Cette fonction crée un élément `<li>` pour chaque étudiant à l’aide de `renderStudentItem()`.
5. Enfin, `app.innerHTML = html` insère le résultat dans la page.

## Littéraux de gabarit

Le HTML est construit avec des littéraux de gabarit JavaScript, délimités par des accents graves. Les expressions `${...}` permettent d’y intégrer des valeurs, comme `${student.name}`. Le code utilise cette interpolation native, et non des marqueurs `{{...}}` ou la méthode `replace()`.

## Lancer la page

Ouvrez `index.html` depuis un serveur local, par exemple avec l’extension Live Server de VS Code. Le navigateur pourra ainsi charger les modules JavaScript via les imports ES modules.

## Sécurité

`innerHTML` interprète le contenu comme du HTML. Les noms affichés proviennent actuellement des données du projet. Si vous ajoutez des données non fiables, échappez-les ou insérez-les dans le DOM avec une méthode comme `textContent`.
