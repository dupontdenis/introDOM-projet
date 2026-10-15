import { students } from "./data.mjs";
import { mcc } from "./mcc.mjs";
import { generateCards } from "./makeCards.mjs";

console.log(students);
const trombinoscope = document.getElementById("trombinoscope");
const studentsWithAverage = mcc(students);
const studentCards = generateCards(studentsWithAverage);

trombinoscope.innerHTML = studentCards.join("");
