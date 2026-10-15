# Rechercher des groupes

Cette version filtre les groupes au fur et à mesure que l’utilisateur saisit du texte dans le champ de recherche.

## Fonctionnement

- `Object.groupBy()` organise les étudiants par groupe, et `Object.entries()` transforme cet objet en paires composées des noms de groupes et des tableaux de leurs membres.
- `renderGroups(query)` compare chaque nom de groupe à la requête nettoyée et convertie en minuscules avec `includes()`. La recherche ne tient pas compte des majuscules et peut trouver un nom de groupe n’importe où dans le texte.
- Pour chaque résultat, la fonction crée les éléments de liste des étudiants avec `map()` et `join("")`, complète le modèle du groupe avec `replace()`, puis insère toutes les cartes dans `#app` à l’aide de `innerHTML`.
- Si aucun résultat ne correspond, la page affiche un message à la place d’une liste vide.
- L’événement `input` relance la recherche chaque fois que le texte change. Au chargement, `renderGroups("")` affiche tous les groupes.

## À essayer

Saisissez une partie d’un nom de groupe, modifiez les majuscules et les minuscules, puis videz le champ. Observez l’effet de `trim()`, `toLowerCase()` et `includes()` sur les résultats.

Ouvrez `index.html` avec un serveur web local. Cet exercice utilise des modules JavaScript et `Object.groupBy()`, qui nécessite un navigateur moderne.
