# Introduction au DOM

Cet espace de travail contient de petits exercices JavaScript qui affichent et mettent à jour des données étudiantes dans une page web. Les données sont partagées depuis `data.mjs` ; chaque exercice possède ses propres fichiers HTML et JavaScript, et parfois CSS.

## Exercices

- [`student-cards`](student-cards/README.md) : afficher une carte par étudiant à l’aide d’un modèle de chaîne réutilisable.
- [`group-cards`](group-cards/README.md) : regrouper les étudiants et afficher une carte par groupe.
- [`filter-groups-by-select`](filter-groups-by-select/README.md) : filtrer les groupes à l’aide d’un menu déroulant.
- [`search-groups`](search-groups/README.md) : rechercher des groupes au fil de la saisie.
- [`search-students-by-name`](search-students-by-name/README.md) : rechercher des étudiants par leur nom au fil de la saisie.
- [`student-details`](student-details/README.md) : sélectionner un étudiant et afficher ses détails.
- [`sortable-student-table`](sortable-student-table/README.md) : afficher les étudiants dans un tableau triable.

## Lancer un exercice

Ouvrez le fichier `index.html` de l’exercice avec un serveur web local, par exemple avec l’extension Live Server de VS Code. Ces pages utilisent des modules JavaScript et des importations relatives, qui peuvent ne pas fonctionner si vous ouvrez directement le fichier avec une URL `file://`. Les exercices utilisent des fonctionnalités JavaScript modernes : utilisez un navigateur à jour.

Le fichier `index.html` à la racine sert de page de navigation vers les exercices. Les données étudiantes partagées se trouvent dans `data.mjs`.
