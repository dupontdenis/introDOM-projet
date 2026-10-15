import { students } from "./../data.mjs";

const app = document.querySelector("#app");
const search = document.querySelector("#search");

const groups = Object.groupBy(students, (student) => student.group);
const groupEntries = Object.entries(groups);

const groupTemplate = `
    <div class="col-md-4">
        <section class="card h-100 shadow-sm">
            <div class="card-header fw-bold">Groupe {{group}}</div>
            <div class="card-body">
                <ul class="list-group list-group-flush">{{students}}</ul>
            </div>
        </section>
    </div>
`;

function renderGroups(query) {
  const filteredGroups = groupEntries.filter(([group]) =>
    group.toLowerCase().includes(query.trim().toLowerCase()),
  );

  let html = "";

  for (const [group, members] of filteredGroups) {
    const studentItems = members
      .map((student) => `<li class="list-group-item">${student.name}</li>`)
      .join("");

    let groupHtml = groupTemplate;
    groupHtml = groupHtml.replace("{{group}}", group);
    groupHtml = groupHtml.replace("{{students}}", studentItems);
    html += groupHtml;
  }

  app.innerHTML =
    html || '<p class="text-muted">Aucun groupe correspondant.</p>';
}

search.addEventListener("input", () => renderGroups(search.value));
renderGroups("");
