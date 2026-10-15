import { students } from "./../data.mjs";

const app = document.querySelector("#app");

const template = `
    <div class="student group-{{group}}">
        <h2>{{name}}</h2>
        <p>Groupe : {{group}}</p>
    </div>
`;

let html = "";

for (const student of students) {
  let studentHtml = template;

  studentHtml = studentHtml.replace("{{name}}", student.name);
  studentHtml = studentHtml.replaceAll("{{group}}", student.group);

  html += studentHtml;
}

app.innerHTML = html;
