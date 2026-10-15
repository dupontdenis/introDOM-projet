import { students } from "./../data.mjs";

const app = document.querySelector("#app");
const search = document.querySelector("#search");



const studentTemplate = `
    <div class="col-md-4">
        <section class="card h-100 shadow-sm">
            <div class="card-header fw-bold">Groupe {{group}}</div>
            <div class="card-body">
                <ul class="list-group list-group-flush">{{students}}</ul>
            </div>
        </section>
    </div>
`;

function renderStudents(query) {
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().startsWith(query.trim().toLowerCase()),
    // student.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  console.log("filteredStudents :", filteredStudents); // tableau d'étudiants filtrés
  let html = "";

  for (const student of filteredStudents) {
  

    let groupHtml = studentTemplate;
    groupHtml = groupHtml.replace("{{group}}", student.group);
    groupHtml = groupHtml.replace("{{students}}", student.name);
    html += groupHtml;
  }

  app.innerHTML =
    html || '<p class="text-muted">Aucun étudiant correspondant.</p>';
}

search.addEventListener("input", () => renderStudents(search.value));
renderStudents("");
