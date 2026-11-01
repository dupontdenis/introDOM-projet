# Une carte par groupe

Cette page présente les étudiants du projet sous forme de cartes, avec une carte par groupe. Les données sont regroupées puis converties en HTML, affiché dans la page.

## Fichiers

- `../data.mjs` contient et exporte les données `students`.
- `transform.mjs` regroupe les étudiants à partir de leur propriété `group` avec `Object.groupBy()`, puis transforme le résultat en paires `[groupe, étudiants]` avec `Object.entries()`.
- `render.mjs` exporte `renderGroupCard(group, students)`, qui génère le HTML d’une carte. Les fonctions de rendu des étudiants et de leur liste restent internes au module.
- `main.mjs` importe les données et les fonctions de transformation et de rendu, construit les cartes, puis les insère dans `#app`.
- `index.html` fournit la page, charge Bootstrap depuis un CDN et exécute `main.mjs` comme module JavaScript.
- `style.css` contient des styles supplémentaires, mais `index.html` ne le charge pas actuellement.

## Fonctionnement

Le traitement prévu suit ces étapes :

1. `main.mjs` récupère le tableau `students` depuis `../data.mjs`.
2. Les étudiants sont regroupés par valeur de `group`.
3. Chaque groupe est rendu dans une carte, avec une liste des noms de ses étudiants.
4. Les cartes sont ajoutées à l’élément `#app` de la page.

## Lancer la page

À la racine du projet, démarrez un serveur web local, par exemple avec l’extension Live Server de VS Code, puis ouvrez `group-cards/index.html`. Un serveur local permet au navigateur de charger correctement les modules ES.

## À vérifier dans le code

Les noms d’exports utilisés dans `main.mjs` ne correspondent pas à ceux actuellement déclarés dans `transform.mjs` : le point d’entrée importe `transformStudentsToGroups`, tandis que le module exporte `transformStudents`. La page ne pourra donc pas s’exécuter tant que ces noms ne seront pas alignés. Par ailleurs, `transformStudents` produit des paires `[groupe, étudiants]`, ce qui correspond à la forme attendue par la boucle de rendu de `main.mjs` une fois l’import corrigé.

Le rendu utilise `innerHTML`. Les noms affichés proviennent des données du projet ; si des données non fiables sont ajoutées, il faudra les insérer comme texte ou les échapper avant de les inclure dans du HTML.# Une carte par groupe

Cette page présente les étudiants sous forme de cartes, à raison d’une carte par groupe. Le code est réparti en modules qui distinguent les données, leur transformation et leur rendu.

## Organisation des fichiers

- `../data.mjs` fournit le tableau de données `students`.
- `transform.mjs` exporte deux fonctions : `groupStudentsByGroup(students)`, qui rassemble les étudiants selon leur propriété `group`, et `transformStudents(students)`, qui retourne les groupes sous forme de paires `[groupe, étudiants]`.
- `render.mjs` exporte `render(groups)`, qui génère le HTML des cartes de tous les groupes. Les fonctions de rendu d’un étudiant et d’une carte restent internes au module.
- `main.mjs` importe les données, `transformStudents` et `render`, puis insère le HTML obtenu dans l’élément `#app`.
- `index.html` contient l’élément `#app` et charge `main.mjs` en tant que module JavaScript.

## Du tableau aux cartes

1. `main.mjs` récupère `students` depuis `../data.mjs`.
2. `transformStudents(students)` appelle `groupStudentsByGroup(students)`, qui s’appuie sur `Object.groupBy()` pour rassembler les étudiants par groupe.
3. La fonction convertit ensuite l’objet obtenu en paires `[groupe, étudiants]` avec `Object.entries()`.
4. `render(groups)` crée une carte pour chaque paire, puis réunit les cartes dans une chaîne HTML.
5. Chaque carte utilise `renderStudentsList()` pour produire la liste du groupe. Cette fonction crée un élément `<li>` pour chaque étudiant à l’aide de `renderStudentItem()`.
6. Enfin, `document.querySelector("#app").innerHTML = render(groups)` insère le résultat dans la page.

## Littéraux de gabarit

Le HTML est construit avec des littéraux de gabarit JavaScript, délimités par des accents graves. Les expressions `${...}` permettent d’y intégrer des valeurs, comme `${student.name}`. Le code utilise cette interpolation native, et non des marqueurs `{{...}}` ou la méthode `replace()`.

## Lancer la page

Ouvrez `index.html` depuis un serveur local, par exemple avec l’extension Live Server de VS Code. Le navigateur pourra ainsi charger les modules JavaScript via les imports ES modules.

## Sécurité

`innerHTML` interprète le contenu comme du HTML. Les noms affichés proviennent actuellement des données du projet. Si vous ajoutez des données non fiables, échappez-les ou insérez-les dans le DOM avec une méthode comme `textContent`.
