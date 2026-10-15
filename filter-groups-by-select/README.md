# Filtrer les groupes avec un menu déroulant

Cette version filtre les groupes d’étudiants à l’aide d’un menu déroulant. Les options du menu sont créées à partir des groupes présents dans les données.

## Fonctionnement

- `Object.groupBy()` rassemble les étudiants selon la valeur de `group` ; `Object.entries()` fournit les paires nom du groupe/membres qui seront affichées.
- `Object.keys(groups)` fournit les noms de groupes uniques utilisés pour créer les éléments `<option>`. `document.createElement()` et `append()` ajoutent ces options au menu déroulant.
- `renderGroups(query)` filtre les paires de groupes. Une requête vide affiche tous les groupes ; un groupe sélectionné n’affiche que celui-ci.
- La fonction complète un modèle de chaîne HTML réutilisable avec `replace()`, rassemble les cartes et les affiche dans `#app` avec `innerHTML`.
- L’événement `change` appelle `renderGroups()` chaque fois que la sélection change. Un premier appel affiche tous les groupes au chargement de la page.

## À essayer

Changez le groupe sélectionné, puis ajoutez dans `data.mjs` un étudiant appartenant à un nouveau groupe. Rechargez la page et vérifiez que ce groupe apparaît dans le menu.

Ouvrez `index.html` avec un serveur web local. Cet exercice utilise des modules JavaScript et `Object.groupBy()`, qui nécessite un navigateur moderne.
