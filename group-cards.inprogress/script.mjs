import { students } from "./../data.mjs";

const app = document.querySelector("#app");

const groups = Object.groupBy(students, (student) => student.group);

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

let html = "";

for (const [group, members] of Object.entries(groups)) {
  const studentItems = members
    .map((student) => `<li class="list-group-item">${student.name}</li>`)
    .join("");

  let groupHtml = groupTemplate;
  groupHtml = groupHtml.replace("{{group}}", group);
  groupHtml = groupHtml.replace("{{students}}", studentItems);
  html += groupHtml;
}

app.innerHTML = html;
