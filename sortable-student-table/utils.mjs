export function sortStudents(students, column, direction) {
  return students.toSorted((a, b) => {
    let result;
    // console.log(a[column]);
    if (typeof a[column] === "number") {
      // console.log("Sorting by number");
      result = a[column] - b[column];
    } else {
      result = String(a[column]).localeCompare(String(b[column]), "fr");
    }

    return direction === "asc" ? result : -result;
  });
}
