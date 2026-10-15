# Introduction to the DOM

This workspace contains small JavaScript exercises that render and update student data in a web page. The records are shared from `data.mjs`; each exercise has its own HTML, JavaScript, and sometimes CSS files.

## Exercises

- [`Cours`](Cours/README.md): render one student card per record using a reusable string template.
- [`projetA`](projetA/README.md): group students and render one card per group.
- [`projetB-dynamique`](projetB-dynamique/README.md): filter groups with a select menu.
- [`projetB-group`](projetB-group/README.md): search groups as text is entered.
- [`projetB-name`](projetB-name/README.md): search student names as text is entered.
- [`projetC`](projetC/README.md): select a student and display their details.
- [`projetD`](projetD/README.md): display and sort students in a table.

## Run an exercise

Open the exercise's `index.html` using a local web server, such as the VS Code Live Server extension. These pages use JavaScript modules and relative imports, which may not work when opened directly with a `file://` URL. The exercises use modern JavaScript features, so use an up-to-date browser.

The root `index.html` is a navigation page for the example projects. The shared student records are in `data.mjs`.
