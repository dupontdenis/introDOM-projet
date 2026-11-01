# Tests des modules et du regroupement

Ce dossier contient deux petits scripts de vérification utilisant les données partagées du projet.

## Scripts

- `groupeBy.mjs` regroupe les étudiants par propriété `group` avec `Object.groupBy()` et affiche le résultat dans la console, notamment sous forme JSON.
- `import.mjs` vérifie l’import des données et affiche le nom du premier étudiant.

## Exécuter

Depuis la racine du projet, utilisez un runtime JavaScript prenant en charge les modules ES et `Object.groupBy()` :

```sh
node test/groupeBy.mjs
node test/import.mjs
```
