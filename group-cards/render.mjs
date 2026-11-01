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

export function render(groups) {
  return groups
    .map(([groupName, students]) => renderGroupCard(groupName, students))
    .join("");
}

