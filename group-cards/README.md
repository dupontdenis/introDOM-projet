# Une carte par groupe

Cet exemple transforme un tableau d’étudiants en cartes HTML, une par groupe. Les données sont importées depuis `data.mjs`, regroupées, puis rendues au moyen de fonctions dédiées.

## Fonctionnement

1. `groupStudentsByGroup(students)` transforme le tableau d’étudiants en un objet indexé par nom de groupe. Chaque propriété contient les étudiants de ce groupe.
2. `renderStudentItem(student)` produit l’élément HTML d’un étudiant.
3. `renderStudentsList(students)` transforme un groupe d’étudiants en liste HTML en appelant `renderStudentItem` pour chacun.
4. `renderGroupCard(group, students)` construit la carte du groupe et y insère la liste.
5. `Object.entries(studentsByGroup)` fournit les groupes et leurs membres. `map()` génère une carte pour chaque entrée et `join("")` rassemble les cartes.
6. `app.innerHTML = html` affiche le HTML dans l’élément `#app` de la page.

## Interpolation des données

Les modèles HTML sont des littéraux de gabarit JavaScript, délimités par des accents graves. Les valeurs sont insérées avec la syntaxe `${expression}`, par exemple `${student.name}`. Le code n’utilise pas de marqueurs `{{...}}` ni de remplacement avec `replace()`.

## À retenir

Les fonctions séparent les responsabilités : le regroupement transforme les données, tandis que les fonctions `render...` construisent le HTML. `innerHTML` interprète le contenu comme du balisage ; pour des données provenant d’utilisateurs, il faut les échapper ou les insérer avec des méthodes du DOM comme `textContent`.
