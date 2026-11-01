# Cartes par groupe

`script.mjs` regroupe les étudiants par groupe et génère une carte Bootstrap pour chaque groupe.

## Fonctionnement

1. Le script importe `students` depuis `../data.mjs`.
2. `Object.groupBy()` rassemble les étudiants selon leur propriété `group`.
3. Chaque groupe est converti en carte contenant la liste de ses étudiants.
4. Les cartes sont insérées dans l’élément `#app`.

## Utilisation

Ce dossier contient uniquement `script.mjs` et ne fournit pas de page `index.html`. Pour exécuter le script dans un navigateur, ajoutez-le à une page qui contient un élément `id="app"` et charge `script.mjs` avec `type="module"`. Servez la page depuis un serveur local afin de permettre les imports ES modules.

Le script utilise `innerHTML` pour insérer le rendu. N’utilisez pas de données non fiables sans les échapper.
