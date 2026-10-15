# Project B: search student names

This version searches the student list directly and displays one result for each matching student.

## How it works

- `students.filter()` creates a new array containing only the matching records; it does not change the original array.
- The search uses `startsWith()` after trimming spaces and converting both strings to lower case. It is case-insensitive and matches from the beginning of a name. `includes()` is also shown as an alternative in a comment.
- A `for...of` loop fills the reusable template for each matching student. The result is assembled as a string and rendered with `innerHTML`.
- The `input` event calls `renderStudents()` whenever the search text changes. The initial call with an empty query displays every student.
- When there are no matches, a message is shown in place of the results.

## Try it

Search for the start of a name, then compare the result with the commented `includes()` version. Try a query with leading or trailing spaces to see the effect of `trim()`.

Open `index.html` through a local web server, because this page loads a JavaScript module and imports the shared data.
