# Exemple de cours : afficher des cartes d’étudiants

Cet exemple crée une carte pour chaque entrée du tableau partagé `students`.

## Points à observer

- `import { students } ...` réutilise les données du dossier parent au lieu de les copier.
- `document.querySelector("#app")` sélectionne l’élément de la page dans lequel les cartes seront ajoutées.
- `template` est une chaîne HTML réutilisable contenant les marqueurs `{{name}}` et `{{group}}`.
- La boucle `for...of` parcourt chaque étudiant. `replace()` insère le nom, tandis que `replaceAll()` insère le groupe dans le titre et dans la classe CSS.
- `html += studentHtml` rassemble toutes les cartes générées. `app.innerHTML = html` les affiche dans le document.

Les classes CSS `group-*` dans `style.css` montrent comment JavaScript peut ajouter une valeur de donnée au nom de classe d’un élément, afin que la page applique un style différent à chaque groupe.

Les marqueurs entre doubles accolades sont du texte ordinaire, et non de l’interpolation JavaScript. Un littéral de gabarit utilise des accents graves ; l’interpolation JavaScript à l’intérieur s’écrit `${expression}`.

## À essayer

Ajoutez ou modifiez un étudiant dans le fichier partagé `data.mjs`, rechargez cette page et observez les changements dans les cartes générées. Les styles propres aux groupes attendent actuellement les noms de classe `group-A`, `group-B` et `group-C`.

Utilisez un serveur web local pour ouvrir `index.html`, car cet exemple importe un module JavaScript depuis un autre dossier.
