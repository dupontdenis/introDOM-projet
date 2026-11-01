import { students } from "./../data.mjs";

const app = document.querySelector("#app");

// Regroupe les étudiants selon leur groupe.
function groupStudentsByGroup(students) {
  return Object.groupBy(students, (student) => student.group);
}

// Génère l’élément de liste HTML d’un étudiant.
function renderStudentItem(student) {
  return `<li class="list-group-item">${student.name}</li>`;
}

// Génère une liste HTML contenant les étudiants du groupe.
function renderStudentsList(students) {
  const studentItems = students.map(renderStudentItem).join("");
  return `<ul class="list-group list-group-flush">${studentItems}</ul>`;
}

// Génère la carte HTML d’un groupe et de ses étudiants.
function renderGroupCard(group, students) {
  return `
    <div class="col-md-4">
        <section class="card h-100 shadow-sm">
            <div class="card-header fw-bold">Groupe ${group}</div>
            <div class="card-body">
                ${renderStudentsList(students)}
            </div>
        </section>
    </div>
`;
}

// Transforme le tableau d’étudiants en groupes d’étudiants.
const studentsByGroup = groupStudentsByGroup(students);

// Parcourt chaque groupe, génère sa carte et rassemble les cartes en HTML.
const html = Object.entries(studentsByGroup)
  .map(([group, students]) => renderGroupCard(group, students))
  .join("");

app.innerHTML = html;
