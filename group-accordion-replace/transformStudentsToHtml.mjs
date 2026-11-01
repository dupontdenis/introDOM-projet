export const transformStudentsToHtml = (students) => {
  const groups = Object.groupBy(students, (student) => student.group);

  const accordionTemplate = `
        <div class="accordion" id="accordionGroups">
            {{groups}}
        </div>
    `;

  const groupTemplate = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading{{group}}">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse{{group}}"
                    aria-expanded="false"
                    aria-controls="collapse{{group}}">
                    Groupe {{group}} ({{count}} étudiants)
                </button>
            </h2>

            <div
                id="collapse{{group}}"
                class="accordion-collapse collapse"
                aria-labelledby="heading{{group}}"
                data-bs-parent="#accordionGroups">

                <div class="accordion-body">
                    {{students}}
                </div>
            </div>
        </div>
    `;

  const studentTemplate = `
        <p>
            <strong>{{name}}</strong>
            — Note : {{mark}}
        </p>
    `;

  let groupsHtml = "";

  for (const [group, members] of Object.entries(groups)) {
    let studentsHtml = "";

    for (const student of members) {
      let studentHtml = studentTemplate;

      studentHtml = studentHtml.replace("{{name}}", student.name);
      studentHtml = studentHtml.replace("{{mark}}", student.mark);

      studentsHtml += studentHtml;
    }

    let groupHtml = groupTemplate;

    groupHtml = groupHtml.replaceAll("{{group}}", group);
    groupHtml = groupHtml.replace("{{count}}", members.length);
    groupHtml = groupHtml.replace("{{students}}", studentsHtml);

    groupsHtml += groupHtml;
  }

  return accordionTemplate.replace("{{groups}}", groupsHtml);
};
