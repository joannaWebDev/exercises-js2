// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
 

// paso 1 convertir en array el objeto
const studentsArray= Object.keys(studentGrades) //devuelve un array ['tom', 'george', 'abdul']

//paso 2 filtrar vieja usanza
// for (let i = 0; i < studentsArray.length; i++) {
//   const estudiante = studentsArray[i];
//   const grade = studentGrades[estudiante];
 
//   if (grade > 18) {
//     console.log(`${estudiante} - ${grade}`);
//   } 
// }

//paso 2 filtrar ES6
const gradeM18 = studentsArray.filter(estudiante => {
  const grade = studentGrades[estudiante];
  return grade > 18;
}
)//devuelve un array ['tom', 'george']

.forEach(
  estudiante => {
  const grade = studentGrades[estudiante];
  console.log(`${estudiante} - ${grade}`);
  }
)

  // Prints
  // TOM - 20
  // ABDUL - 19