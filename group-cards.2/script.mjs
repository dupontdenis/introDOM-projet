import { students } from "./../data.mjs";

const app = document.querySelector("#app");

const groups = Object.groupBy(students, (student) => student.group);

function generateLi(student) {
  return `<li class="list-group-item">${student.name}</li>`;
}

function generateUl(students) {
  const studentItems = students.map(generateLi).join("");
  return `<ul class="list-group list-group-flush">${studentItems}</ul>`;
}

function generateGroupe(group, students) {
  return `
    <div class="col-md-4">
        <section class="card h-100 shadow-sm">
            <div class="card-header fw-bold">Groupe ${group}</div>
            <div class="card-body">
                ${generateUl(students)}
            </div>
        </section>
    </div>
`;
}

const html = Object.entries(groups)
  .map(([group, students]) => generateGroupe(group, students))
  .join("");

app.innerHTML = html;
