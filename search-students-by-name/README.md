# Rechercher des étudiants par leur nom

Cette version recherche directement dans la liste des étudiants et affiche un résultat pour chaque étudiant correspondant.

## Fonctionnement

- `students.filter()` crée un nouveau tableau qui ne contient que les entrées correspondantes ; le tableau d’origine n’est pas modifié.
- La recherche utilise `startsWith()` après avoir supprimé les espaces superflus et converti les deux chaînes en minuscules. Elle ne tient pas compte des majuscules et cherche au début du nom. `includes()` est également proposé comme solution de remplacement dans un commentaire.
- Une boucle `for...of` complète le modèle réutilisable pour chaque étudiant correspondant. Les résultats sont assemblés dans une chaîne et affichés avec `innerHTML`.
- L’événement `input` appelle `renderStudents()` chaque fois que le texte recherché change. L’appel initial avec une requête vide affiche tous les étudiants.
- Si aucun étudiant ne correspond, un message s’affiche à la place des résultats.

## À essayer

Recherchez le début d’un nom, puis comparez le résultat à celui de la version `includes()` mentionnée dans le commentaire. Essayez une requête précédée ou suivie d’espaces pour observer l’effet de `trim()`.

Ouvrez `index.html` avec un serveur web local, car cette page charge un module JavaScript et importe les données partagées.
