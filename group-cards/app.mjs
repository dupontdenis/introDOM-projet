
import { students } from "./../data.mjs";

const app = document.querySelector("#app");

const groups = Object.groupBy(students, (student) => student.group);

const groupTemplate = `
    <section>
        <h2>Groupe {{group}}</h2>
        <ul>
            {{students}}
        </ul>
    </section>
`;

let html = "";

for (const [group, members] of Object.entries(groups)) {
    let studentItems = "";

    for (const student of members) {
        studentItems += `<li>${student.name}</li>`;
    }

    let groupHtml = groupTemplate;
    groupHtml = groupHtml.replace("{{group}}", group);
    groupHtml = groupHtml.replace("{{students}}", studentItems);

    html += groupHtml;
}

app.innerHTML = html;

// import { students } from "./../data.mjs";

// const app = document.querySelector("#app");

// const groups = Object.groupBy(students, (student) => student.group);

// const groupTemplate = `
//     <section>
//         <h2>Groupe {{group}}</h2>
//         <ul>
//             {{students}}
//         </ul>
//     </section>
// `;

// let html = "";

// for (const [group, members] of Object.entries(groups)) {
//     const studentItems = members
//         .map((student) => `<li>${student.name}</li>`)
//         .join("");

//     let groupHtml = groupTemplate;
//     groupHtml = groupHtml.replace("{{group}}", group);
//     groupHtml = groupHtml.replace("{{students}}", studentItems);

//     html += groupHtml;
// }

// app.innerHTML = html;
