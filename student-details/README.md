# Fiche détaillée d’un étudiant

Cet exercice crée une liste d’étudiants sélectionnables. Cliquer sur le bouton d’un étudiant affiche ses informations dans le panneau de détails.

## Fonctionnement

- Le script sélectionne le conteneur de la liste et le panneau de détails avec `querySelector()`.
- Une boucle `for...of` crée un bouton pour chaque étudiant. `textContent` définit le libellé du bouton sous forme de texte, de manière sûre.
- Chaque bouton reçoit un gestionnaire d’événement `click`. Au clic, ce gestionnaire copie le modèle de détails, remplace ses marqueurs avec `replace()`, puis insère le résultat dans le panneau.
- `append()` ajoute chaque bouton à la liste sans reconstruire toute la liste.

## Vérifier les champs des données

Le modèle de détails utilise actuellement `student.level`, alors que les entrées partagées dans `data.mjs` comportent les champs `name`, `group` et `mark`. Si le niveau est vide ou affiche `undefined`, comparez les marqueurs du modèle aux champs des données et déterminez quel champ l’exercice doit afficher.

## À essayer

Cliquez sur différents noms et vérifiez que seul le panneau de détails change. Ajoutez ensuite une entrée dans `data.mjs` et vérifiez que son bouton est créé automatiquement.

Ouvrez `index.html` avec un serveur web local afin que son module JavaScript puisse importer les données partagées.
