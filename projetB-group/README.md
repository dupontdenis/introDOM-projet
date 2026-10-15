# Project B: search groups

This version filters groups while the user types in the search field.

## How it works

- `Object.groupBy()` organizes the students by group, and `Object.entries()` turns that object into pairs of group names and member arrays.
- `renderGroups(query)` compares each group name with the trimmed, lower-case query using `includes()`. Matching ignores letter case and can find a group name anywhere in the text.
- For each match, the function builds student list items with `map()` and `join("")`, fills the group template with `replace()`, then inserts all cards into `#app` using `innerHTML`.
- If there are no matches, the page displays a message instead of an empty list.
- The `input` event reruns the search whenever the text changes. `renderGroups("")` initially displays every group.

## Try it

Type part of a group name, change the capitalization, and clear the field. Observe how `trim()`, `toLowerCase()`, and `includes()` affect the matches.

Open `index.html` through a local web server. This exercise uses JavaScript modules and `Object.groupBy()`, which requires a modern browser.
