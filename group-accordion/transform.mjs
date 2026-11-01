export const groupStudentsByGroup = (students) => {
  const groups = Object.groupBy(students, (student) => student.group);

  return groups;
};
