import { students } from "./../data.mjs";

const app = document.querySelector("#app");

const template = `
    <div class="student group-{{group}}">
        {{img}}
        <h2>{{name}}</h2>
        <p>Groupe : {{group}}</p>
    </div>
`;

let html = "";

for (const student of students) {
  let studentHtml = template;

  const img = student.img
    ? `<img src="${student.img}" alt="${student.name}" class="student-img" />`
    : "";

  studentHtml = studentHtml.replace("{{img}}", img);
  studentHtml = studentHtml.replaceAll("{{name}}", student.name);
  studentHtml = studentHtml.replaceAll("{{group}}", student.group);

  html += studentHtml;
}

app.innerHTML = html;
