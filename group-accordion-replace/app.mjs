import { students } from "./../data.mjs";
import { transformStudentsToHtml } from "./transformStudentsToHtml.mjs";


const app = document.querySelector("#app");

app.innerHTML = transformStudentsToHtml(students);
