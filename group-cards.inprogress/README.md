# Générer du HTML avec un modèle de chaîne

Cet exemple crée une carte pour chaque groupe d’étudiants. Il utilise des chaînes JavaScript ordinaires et les méthodes du DOM, sans bibliothèque de gabarits ni framework.

## Fonctionnement de l’affichage

1. **Sélectionner l’élément de destination**

   `document.querySelector("#app")` trouve l’élément dans lequel le HTML généré sera affiché.

2. **Regrouper les données**

   `Object.groupBy(students, (student) => student.group)` crée un objet dont les clés sont les noms des groupes et dont les valeurs sont les tableaux d’étudiants correspondants. `Object.entries(groups)` permet à la boucle `for...of` de parcourir chaque groupe et ses membres.

3. **Créer un modèle de groupe réutilisable**

   `groupTemplate` est un littéral de gabarit JavaScript (la chaîne est délimitée par des accents graves). Il contient le HTML d’une carte et deux marqueurs textuels : `{{group}}` et `{{students}}`.

   Ces marqueurs entre doubles accolades sont de simples espaces réservés textuels. Ce ne sont pas des expressions d’interpolation JavaScript. L’interpolation JavaScript s’écrit `${expression}` dans un littéral de gabarit ; ici, les marqueurs sont remplacés ensuite avec `replace()`.

4. **Construire la liste des étudiants**

   `members.map(...)` transforme chaque étudiant en une chaîne `<li>`. `.join("")` rassemble ces chaînes sans ajouter de virgule entre elles.

5. **Compléter une copie du modèle**

   Le code copie `groupTemplate` dans `groupHtml`, puis appelle `replace()` pour remplacer les marqueurs par le nom du groupe et la liste générée. Chaque marqueur n’apparaissant qu’une fois, il suffit de remplacer sa première occurrence.

6. **Rassembler toutes les cartes**

   `html += groupHtml` ajoute chaque carte terminée à la chaîne HTML complète.

7. **Afficher le résultat dans la page**

   `app.innerHTML = html` interprète cette chaîne comme du HTML et insère les éléments obtenus dans `#app`.

## Principales méthodes

- `map()` transforme chaque étudiant en élément de liste HTML.
- `join("")` rassemble les chaînes des éléments de liste en une seule chaîne.
- `Object.entries()` fournit à la boucle les noms des groupes et les tableaux de leurs membres.
- `replace()` remplace les marqueurs dans le modèle.
- `innerHTML` insère le HTML complété dans le document.

## À retenir

Cette technique aide à comprendre comment les données deviennent du HTML, mais `innerHTML` interprète son contenu comme du balisage. N’insérez pas directement dans ces chaînes du texte non fiable fourni par un utilisateur : échappez-le correctement ou ajoutez-le avec des méthodes du DOM comme `textContent`.
