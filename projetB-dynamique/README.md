# Project B: filter groups with a select menu

This version filters student groups using a drop-down menu. The menu options are created from the groups that actually occur in the data.

## How it works

- `Object.groupBy()` gathers students by their `group` value; `Object.entries()` stores the resulting group-name/member pairs for rendering.
- `Object.keys(groups)` supplies the unique group names used to create `<option>` elements. `document.createElement()` and `append()` add those options to the select menu.
- `renderGroups(query)` filters the group pairs. An empty query shows every group; a selected group shows just that group.
- The function fills a reusable HTML string template with `replace()`, combines the cards, and renders them in `#app` with `innerHTML`.
- The `change` event calls `renderGroups()` whenever the selection changes. An initial call displays all groups when the page loads.

## Try it

Change the selected group, then add a student to a new group in `data.mjs`. Reload the page and check that the new group appears in the menu.

Open `index.html` through a local web server. This exercise uses JavaScript modules and `Object.groupBy()`, which requires a modern browser.
