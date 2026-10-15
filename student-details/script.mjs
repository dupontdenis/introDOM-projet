import { students } from "./../data.mjs";

const studentList = document.querySelector("#student-list");
const details = document.querySelector("#details");

const detailTemplate = `
    <div class="card-body">
        <h2 class="card-title">{{name}}</h2>
        <p class="card-text mb-1">Groupe : <strong>{{group}}</strong></p>
        <p class="card-text">Niveau : <strong>{{level}}</strong></p>
    </div>
`;

for (const student of students) {
  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
  button.textContent = student.name;

  button.addEventListener("click", () => {
    let html = detailTemplate;
    html = html.replace("{{name}}", student.name);
    html = html.replace("{{group}}", student.group);
    html = html.replace("{{level}}", student.level);
    details.innerHTML = html;
  });

  studentList.append(button);
}
