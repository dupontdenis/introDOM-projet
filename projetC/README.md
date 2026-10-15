# Project C: student detail panel

This exercise builds a selectable student list. Clicking a student's button fills the detail panel with that student's information.

## How it works

- The script selects the list container and the detail panel with `querySelector()`.
- A `for...of` loop creates a button for each student. `textContent` sets the button label safely as text.
- Each button gets a `click` event listener. When clicked, the listener copies the detail template, fills its placeholders with `replace()`, and writes the result into the details panel.
- `append()` adds each button to the list without rebuilding the whole list.

## Check the data fields

The detail template currently uses `student.level`, but the shared records in `data.mjs` have `name`, `group`, and `mark` fields. If the level is blank or displays as `undefined`, compare the template placeholders with the fields in the data and decide which field the exercise should show.

## Try it

Click different names and observe that only the detail panel changes. Then add a record to `data.mjs` and check that its button is created automatically.

Open `index.html` through a local web server so its JavaScript module can import the shared data.
