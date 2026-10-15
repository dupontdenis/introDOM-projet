export const transformStudentsToCards = (students) => {
  // Find all the different groups
  const groups = Object.keys(
    Object.groupBy(students, (student) => student.group),
  );

  console.log(groups);

  // Transform groups into <h1> elements
  const groupsToHtml = groups.map((group) => {
    return `<h1 data-group="${group}">${group}</h1>`;
  });

  // Transform students into Bootstrap card elements
  const studentsToHtml = students.map((student) => {
    return `
      <div class="card" data-group="${student.group}">
        <img src="${student.img}" class="card-img-top" alt="${student.name}">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">Mark: ${student.mark}</p>
          <!-- <p class="card-text">Group: ${student.group}</p> -->
        </div>
      </div>
    `;
  });

  return { groups, groupsToHtml, studentsToHtml };
};
