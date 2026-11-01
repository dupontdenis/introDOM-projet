import { students } from "./../data.mjs";

const app = document.querySelector("#app");

function groupStudentsByGroup(students) {
  return Object.groupBy(students, (student) => student.group);
}

function renderStudentItem(student) {
  return `<li class="list-group-item">${student.name}</li>`;
}

function renderStudentsList(students) {
  const studentItems = students.map(renderStudentItem).join("");
  return `<ul class="list-group list-group-flush">${studentItems}</ul>`;
}

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

const studentsByGroup = groupStudentsByGroup(students);

const html = Object.entries(studentsByGroup)
  .map(([group, students]) => renderGroupCard(group, students))
  .join("");

app.innerHTML = html;
