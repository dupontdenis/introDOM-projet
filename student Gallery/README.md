# Trombinoscope étudiant

Cette page crée une galerie de cartes à partir des étudiants de `data.mjs`. Elle calcule leur moyenne et signale les notes insuffisantes avec une couleur de carte.

## Organisation des fichiers

- `data.mjs` exporte les étudiants, leurs notes et les URL de leurs images.
- `mcc.mjs` calcule la moyenne de chaque étudiant et indique si une note est inférieure à 7.
- `makeCards.mjs` génère une carte ou une liste de cartes pour les étudiants.
- `app.mjs` calcule les moyennes et insère les cartes dans `#trombinoscope`.
- `index.html` fournit le conteneur de la galerie et charge `app.mjs` comme module.

## Lancer la page

Depuis la racine du projet, démarrez un serveur web local puis ouvrez `student%20Gallery/index.html` (le nom du dossier contient un espace). La feuille de style Bootstrap et les images sont chargées depuis des URL externes, une connexion Internet est nécessaire.

Les cartes sont générées avec `innerHTML`. N’injectez pas de données non fiables sans les échapper.
