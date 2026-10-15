import { students } from "./../data.mjs";
import { sortStudents } from "./utils.mjs";

const app = document.querySelector("#app");

let currentColumn = "";
let direction = "desc";

const tableTemplate = `
    <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover">
            <thead class="table-dark">
                <th data-sort="name">
                    Nom <span class="sort-arrow">{{nameArrow}}</span>
                </th>
                <th data-sort="group">
                    Groupe <span class="sort-arrow">{{groupArrow}}</span>
                </th>
                <th data-sort="mark">
                    Note <span class="sort-arrow">{{markArrow}}</span>
                </th>
            </thead>
            <tbody>
                {{students}}
            </tbody>
        </table>
    </div>
`;

const studentTemplate = `
    <tr>
        <td>{{nom}}</td>
        <td>{{groupe}}</td>
        <td>{{moyenne}}</td>
    </tr>
`;

function displayStudents(list) {
  let studentRows = "";

  for (const student of list) {
    let studentHtml = studentTemplate;

    studentHtml = studentHtml.replace("{{nom}}", student.name);
    studentHtml = studentHtml.replace("{{groupe}}", student.group);
    studentHtml = studentHtml.replace("{{moyenne}}", student.mark);

    studentRows += studentHtml;
  }

  let tableHtml = tableTemplate;

  tableHtml = tableHtml.replace(
    "{{nameArrow}}",
    currentColumn === "name" ? (direction === "asc" ? "▲" : "▼") : "",
  );

  tableHtml = tableHtml.replace(
    "{{groupArrow}}",
    currentColumn === "group" ? (direction === "asc" ? "▲" : "▼") : "",
  );

  tableHtml = tableHtml.replace(
    "{{markArrow}}",
    currentColumn === "mark" ? (direction === "asc" ? "▲" : "▼") : "",
  );

  tableHtml = tableHtml.replace("{{students}}", studentRows);

  app.innerHTML = tableHtml;
}

displayStudents(students);

app.addEventListener("click", (event) => {
  const header = event.target.closest("[data-sort]");
  // console.log(header);
  if (!header) {
    return;
  }

  const column = header.dataset.sort;
  console.log(column)

  if (column === currentColumn) {
    direction = direction === "asc" ? "desc" : "asc";
  } else {
    currentColumn = column;
    direction = "asc";
  }

  const sortedStudents = sortStudents(students, column, direction);

  displayStudents(sortedStudents);
});

const nameHeader = app.querySelector('[data-sort="name"]');
nameHeader.click();
