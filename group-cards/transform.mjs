// Regroupe les étudiants selon leur groupe.
export function groupStudentsByGroup(students) {
  return Object.groupBy(students, (student) => student.group);
}

export function transformStudents(students) {
  const studentsByGroup = groupStudentsByGroup(students);
  return Object.entries(studentsByGroup);
}
