// tasks
// 1. to print only a students marks.
// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// const filtered = students.filter(
//     (students) => students.name === "Bob"
//   );
//   console.log(filtered);

//2. filter according to average. 
// const filtered = students.filter(
//     (students) => {
//         const average = (students.math + students.english + students.science) / 3;
//         return average > 70
//     }); 
//   console.log(filtered);


// 3. finding average using map method.
// let studentsAverage = students.map((student) => {
//   const average = (student.math + student.english + student.science) / 3;
//   return { average: average };
// });
// console.log(studentsAverage);

/// tasks...///

// 1. Filter students who passed all subjects (>= 40 marks each).
// const students = [
// { name: "Alice", math: 55, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 35, english: 88, science: 31, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// let passed = students.filter((students) => {
//     if (students.math>= 40 && students.english>= 40 && students.science>= 40) {
//         console.log("Paas");
        
//     } 
//     else {
//         console.log("fail");
//     }
// });
// console.log(passed);

// 2. List names of students who did NOT submit their assignment.

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// const filtered = students.filter(
//     (students) => students.submitted === false
//   );
//   console.log(filtered);

//  3. Find the topper in science subject. 

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// let topper = students.reduce((top, students) => {
//   return students.science > top.science ? students : top;
// });

// console.log("Topper in science:", topper.name, "with marks:", topper.science);

// 5. Count how many students submitted their assignments.

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// let filter = students.filter(
//   (students) =>  students.submitted == true 
//   );
// console.log(filter);

// 6. Sort students by total marks (descending). 

const students = [
{ name: "Alice", math: 85, english: 78, science: 92, submitted: true },
{ name: "Bob", math: 45, english: 52, science: 58, submitted: false },
{ name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
{ name: "David", math: 66, english: 70, science: 60, submitted: true },
{ name: "Eva", math: 50, english: 49, science: 45, submitted: false },
];

students.forEach(student => {
  student.total = student.math + student.english + student.science;
});
students.sort((a,b) => (b.total - a.total))
students.forEach(student => {
  console.log(`${student.name}: ${student.total}`);
});


