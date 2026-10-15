# Project D: sortable student table

This exercise renders the student records in a table and lets the user sort by name, group, or mark by clicking a column heading.

## How it works

- `displayStudents(list)` builds a table row for each student, fills the table template (including the sort indicators), and renders the completed table in `#app`.
- The headings use `data-sort` attributes to identify the field each one controls.
- A click listener on `#app` uses `event.target.closest("[data-sort]")` to find the clicked heading. This is event delegation: the listener is on the parent, so it continues to work when `displayStudents()` replaces the table contents.
- Clicking the current column switches between ascending and descending order. Clicking a different column starts it in ascending order.
- `sortStudents()` in `utils.mjs` uses `toSorted()` to return a sorted copy. It compares numeric values by subtraction and text with `localeCompare()` using French sorting rules.
- `currentColumn` and `direction` track the sort state; the matching heading displays an arrow.

## Try it

Click each heading several times and watch the rows and arrow change. Add another student to `data.mjs` and confirm that the table includes the record.

Open `index.html` through a local web server. This exercise uses JavaScript modules and `toSorted()`, so use a modern browser.
