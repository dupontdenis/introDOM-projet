# Rendering HTML with a string template

This example builds one card for each student group. It uses ordinary JavaScript strings and DOM methods; it does not use a template library or a framework.

## How the rendering works

1. **Get the destination element**

   `document.querySelector("#app")` finds the element where the generated HTML will be displayed.

2. **Group the data**

   `Object.groupBy(students, (student) => student.group)` makes an object whose keys are group names and whose values are arrays of students in those groups. `Object.entries(groups)` lets the `for...of` loop visit each group and its members.

3. **Write a reusable group template**

   `groupTemplate` is a JavaScript template literal (the string uses backticks). It contains the HTML for one card and two text markers: `{{group}}` and `{{students}}`.

   These double-brace markers are plain text placeholders. They are not JavaScript interpolation expressions. JavaScript interpolation uses `${expression}` inside a template literal; here, the example fills the markers later with `replace()`.

4. **Build the student list**

   `members.map(...)` turns each student into an `<li>` string. `.join("")` combines those strings without adding commas between them.

5. **Fill a copy of the template**

   The code copies `groupTemplate` into `groupHtml`, then calls `replace()` to put the group name and the generated list in place of their markers. Because each marker appears once, replacing the first match is enough.

6. **Collect all the cards**

   `html += groupHtml` appends each completed card to the full HTML string.

7. **Render into the page**

   `app.innerHTML = html` parses that string as HTML and inserts the resulting elements inside `#app`.

## The main methods at a glance

- `map()` transforms each student into an HTML list item.
- `join("")` combines list-item strings into one string.
- `Object.entries()` provides the group names and member arrays to the loop.
- `replace()` substitutes placeholder text in the template.
- `innerHTML` inserts the completed HTML into the document.

## Keep in mind

This technique is useful for learning how data becomes HTML, but `innerHTML` interprets its input as markup. Do not put untrusted user-provided text directly into these strings: it should be safely escaped or inserted with DOM methods such as `textContent`.
