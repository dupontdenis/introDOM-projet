// Regroupe les étudiants selon leur groupe.
export function transformStudentsToGroups(students) {
  return Object.groupBy(students, (student) => student.group);
}


