# Une carte par groupe

Cette page affiche une carte HTML pour chaque groupe d’étudiants. Le code est réparti en trois modules afin de séparer les données, leur transformation et leur affichage.

## Organisation des fichiers

- `../data.mjs` exporte le tableau initial `students`.
- `transform.mjs` exporte `groupStudentsByGroup(students)`, qui regroupe les étudiants selon la valeur de leur propriété `group`.
- `render.mjs` contient les fonctions qui génèrent le HTML d’un étudiant, d’une liste d’étudiants et d’une carte de groupe. Seule `renderGroupCard` est exportée, car c’est la fonction utilisée par le module principal.
- `script.mjs` importe les données et les fonctions, construit le HTML de tous les groupes, puis l’insère dans l’élément `#app`.
- `index.html` fournit l’élément `#app` et charge `script.mjs` comme module JavaScript.

## Parcours des données

1. `script.mjs` importe `students` depuis `../data.mjs`.
2. `groupStudentsByGroup(students)` utilise `Object.groupBy()` pour produire un objet dont chaque clé est un nom de groupe et chaque valeur est la liste de ses étudiants.
3. `Object.entries(studentsByGroup)` transforme cet objet en entrées parcourables. `map()` appelle `renderGroupCard()` pour chaque groupe, puis `join("")` rassemble les cartes dans une seule chaîne HTML.
4. `renderGroupCard()` délègue la création de la liste à `renderStudentsList()`, qui crée un élément `<li>` par étudiant avec `renderStudentItem()`.
5. `app.innerHTML = html` affiche le résultat dans la page.

## Templates JavaScript

Les chaînes HTML sont écrites avec des accents graves. Les valeurs dynamiques sont insérées avec `${...}`, par exemple `${student.name}`. Cette syntaxe est l’interpolation native des littéraux de gabarit JavaScript ; le code n’utilise ni les marqueurs `{{...}}` ni `replace()`.

## Exécution

Ouvrir `index.html` avec un serveur de développement local, par exemple l’extension Live Server de VS Code. Les modules JavaScript sont chargés par le navigateur au moyen des imports ES modules.

## Sécurité

`innerHTML` interprète son contenu comme du HTML. Les noms affichés ici viennent des données du projet ; si des données non fiables sont ajoutées, il faut les échapper ou les insérer avec des méthodes du DOM comme `textContent`.
