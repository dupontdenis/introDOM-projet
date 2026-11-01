# Accordéon par groupe avec modèles

Cette page présente les étudiants dans un accordéon Bootstrap. Le HTML est construit à partir de modèles contenant des marqueurs remplacés par les valeurs des données.

## Organisation des fichiers

- `../data.mjs` fournit le tableau de données `students`.
- `transformStudentsToHtml.mjs` regroupe les étudiants avec `Object.groupBy()`, construit les sections et remplace les marqueurs des modèles.
- `app.mjs` transmet les données à `transformStudentsToHtml()` et insère le résultat dans `#app`.
- `index.html` charge Bootstrap et le module `app.mjs`.

## Fonctionnement

1. Les étudiants sont regroupés par propriété `group`.
2. Chaque groupe et ses étudiants sont rendus avec des modèles HTML contenant des marqueurs comme `{{group}}`, `{{name}}` et `{{mark}}`.
3. Le conteneur complet de l’accordéon est inséré dans la page.
4. Bootstrap gère l’ouverture et la fermeture des sections.

## Lancer la page

Depuis la racine du projet, démarrez un serveur web local, puis ouvrez `group-accordion-replace/index.html`. Bootstrap est chargé depuis un CDN et nécessite une connexion Internet.

## Sécurité

Le HTML produit est inséré avec `innerHTML`. N’insérez pas de données non fiables dans les modèles sans les échapper.
