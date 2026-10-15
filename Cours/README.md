# Course example: render student cards

This example creates one card for each record in the shared `students` array.

## What to notice

- `import { students } ...` reuses data from the parent folder instead of copying it.
- `document.querySelector("#app")` selects the page element that will receive the cards.
- `template` is a reusable HTML string with `{{name}}` and `{{group}}` placeholders.
- The `for...of` loop visits each student. `replace()` inserts the name, while `replaceAll()` inserts the group in both the heading and the CSS class.
- `html += studentHtml` collects all generated cards. `app.innerHTML = html` renders them in the document.

The `group-*` CSS classes in `style.css` show how JavaScript can add a data value to an element's class name, allowing the page to style groups differently.

The double-brace markers are ordinary text, not JavaScript interpolation. A template literal uses backticks; JavaScript interpolation inside one uses `${expression}`.

## Try it

Add or edit a student in the shared `data.mjs` file, reload this page, and observe how the generated cards change. The group-specific styles currently expect the class names `group-A`, `group-B`, and `group-C`.

Use a local web server to open `index.html`, because the example imports a JavaScript module from another folder.
