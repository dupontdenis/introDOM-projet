// Write a function that takes an array of students and 
// returns an array of objects with the average marks of each student.

const ceil = 7;

export function mcc(students) {
  return students.map((student) => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = (totalMarks / student.marks.length).toFixed(2);
    const disqualifying = student.marks.some((mark) => mark < ceil) ? true : "";

    return { ...student, averageMarks, disqualifying };
  });
}

