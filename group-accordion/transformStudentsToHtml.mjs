function renderStudent(student) {
  return `
    <p>
      <strong>${student.name}</strong>
      — Note : ${student.mark}
    </p>
  `;
}

function renderGroup(groupName, students) {
  const studentsHtml = students.map(renderStudent).join("");

  return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${groupName}">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse${groupName}"
          aria-expanded="false"
          aria-controls="collapse${groupName}">
          Groupe ${groupName} (${students.length} étudiants)
        </button>
      </h2>

      <div
        id="collapse${groupName}"
        class="accordion-collapse collapse"
        aria-labelledby="heading${groupName}"
        data-bs-parent="#accordionGroups">
        <div class="accordion-body">
          ${studentsHtml}
        </div>
      </div>
    </div>
  `;
}

export function transformStudentsToHtml(students) {
  const groups = Object.groupBy(students, (student) => student.group);
  const groupsHtml = Object.entries(groups)
    .map(([groupName, members]) => renderGroup(groupName, members))
    .join("");

  return `
    <div class="accordion" id="accordionGroups">
      ${groupsHtml}
    </div>
  `;
}
