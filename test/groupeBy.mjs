import { students } from "./../data.mjs";

console.log(Object.groupBy(students, (student) => student.group));
console.log(
  JSON.stringify(Object.groupBy(students, (student) => student.group)),
);
