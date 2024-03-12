export default function updateStudentGradeByCity(list, city, newGrades) {
  const newList = list.filter((student) => student.location === city);

  for (const student of newList) {
    student.grade = 'N/A';
  }

  const newStudent = newList.map((student) => {
    const temp = student;
    for (const grade of newGrades) {
      if (temp.id === grade.studentId) {
        temp.grade = grade.grade;
      }
    }
    return temp;
  });

  return newStudent;
}
