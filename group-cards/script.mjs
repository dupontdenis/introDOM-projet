import { students } from "./../data.mjs";
import { groupStudentsByGroup } from "./transformStudents.mjs";
import { renderGroupCard } from "./renderGroups.mjs";

const app = document.querySelector("#app");

// Transforme le tableau d’étudiants en groupes d’étudiants.
const studentsByGroup = groupStudentsByGroup(students);

// Parcourt chaque groupe, génère sa carte et rassemble les cartes en HTML.
const html = Object.entries(studentsByGroup)
  .map(([group, students]) => renderGroupCard(group, students))
  .join("");

app.innerHTML = html;
