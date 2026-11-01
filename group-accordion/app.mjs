import { students } from "../data.mjs";
import { groupStudentsByGroup } from "./transform.mjs";
import { renderGroupAccordion } from "./render.mjs";

const studentsByGroup = groupStudentsByGroup(students);

const groupsHtml = Object.entries(studentsByGroup)
  .map(([group, groupStudents]) => renderGroupAccordion(group, groupStudents))
  .join("");

document.querySelector("#accordionGroups").innerHTML = groupsHtml;
