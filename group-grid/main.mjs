import { students } from "./../data.mjs";
// import { students } from "./studentsData.mjs";
import { transformStudentsToCards } from "./transformStudentsToCards.mjs";
import { renderElementsToDom } from "./renderToDom.mjs";
import { generateDynamicCSS } from "./generateDynamicCSS.mjs";

const { groups, groupsToHtml, studentsToHtml } =
  transformStudentsToCards(students);
console.log(groupsToHtml, studentsToHtml);

document.querySelector("#dynamic-styles").textContent =
  generateDynamicCSS(groups);

const sectionUI = document.querySelector(".amphi");
renderElementsToDom(groupsToHtml, sectionUI);
renderElementsToDom(studentsToHtml, sectionUI);
