# Tableau d’étudiants triable

Cet exercice affiche les entrées étudiantes dans un tableau et permet de les trier par nom, groupe ou note en cliquant sur l’en-tête d’une colonne.

## Fonctionnement

- `displayStudents(list)` crée une ligne de tableau pour chaque étudiant, complète le modèle du tableau (y compris les indicateurs de tri), puis affiche le tableau obtenu dans `#app`.
- Les en-têtes utilisent des attributs `data-sort` pour identifier le champ associé à chaque colonne.
- Un gestionnaire de clic sur `#app` utilise `event.target.closest("[data-sort]")` pour trouver l’en-tête cliqué. C’est la délégation d’événements : le gestionnaire est placé sur le parent et continue de fonctionner même lorsque `displayStudents()` remplace le contenu du tableau.
- Cliquer sur la colonne actuellement triée inverse l’ordre croissant ou décroissant. Cliquer sur une autre colonne lance le tri dans l’ordre croissant.
- `sortStudents()` dans `utils.mjs` utilise `toSorted()` pour renvoyer une copie triée. La fonction compare les valeurs numériques par soustraction et les textes avec `localeCompare()`, selon les règles de tri françaises.
- `currentColumn` et `direction` mémorisent l’état du tri ; une flèche apparaît dans l’en-tête correspondant.

## À essayer

Cliquez plusieurs fois sur chaque en-tête et observez le changement d’ordre des lignes et de la flèche. Ajoutez un étudiant dans `data.mjs` et vérifiez que l’entrée apparaît dans le tableau.

Ouvrez `index.html` avec un serveur web local. Cet exercice utilise des modules JavaScript et `toSorted()` : utilisez un navigateur moderne.
