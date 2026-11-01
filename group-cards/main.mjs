import { students } from "../data.mjs";
import { transformStudents } from "./transform.mjs";
import { render } from "./render.mjs";

const groups = transformStudents(students);

document.querySelector("#app").innerHTML = render(groups);
