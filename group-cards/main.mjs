import { students } from "../data.mjs";
import { transformStudentsToGroups } from "./transform.mjs";
import { renderGroupCard } from "./render.mjs";

const groups = transformStudentsToGroups(students);

const html = groups
  .map(([group, groupStudents]) => renderGroupCard(group, groupStudents))
  .join("");

document.querySelector("#app").innerHTML = html;
