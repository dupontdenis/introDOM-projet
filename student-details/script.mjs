import { students } from "./../data.mjs";

const studentList = document.querySelector("#student-list");
const details = document.querySelector("#details");

const buttonTemplate = `
    <button type="button" class="btn btn-outline-secondary">
        {{name}}
    </button>
`;

const detailTemplate = `
    <div class="card-body">
        <h2 class="card-title">{{name}}</h2>
        <p class="card-text mb-1">Groupe : <strong>{{group}}</strong></p>
        <p class="card-text">Note : <strong>{{mark}}</strong></p>
    </div>
`;

for (const student of students) {
  let buttonHtml = buttonTemplate;

  buttonHtml = buttonHtml.replace("{{name}}", student.name);

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    student.mark < 10 ? "btn btn-warning" : "btn btn-outline-secondary";
  button.textContent = student.name;

  button.addEventListener("click", () => {
    let html = detailTemplate;

    html = html.replace("{{name}}", student.name);
    html = html.replace("{{group}}", student.group);
    html = html.replace("{{mark}}", student.mark);

    details.innerHTML = html;
  });

  studentList.append(button);
}
