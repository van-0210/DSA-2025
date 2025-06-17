// Practice Tasks


// 1. Create an object for a student with properties: name, rollNo, marks.

// let student ={ 'Name': 'Vanshi', 'Rollno.': 47 ,'Marks': 96}
// console.log(student);

// 2. Update and delete some properties.

// student.Name ='Rudra'
// console.log(student);
// student["Rollno."] = null
// console.log(student);

// 3. Loop through the object and print keys and values.
// for (let key in student) { 
//   console.log(key + ": " + student[key]);
// }

// 4. Create a Map to store country names as keys and their capitals as values.
// let map = new Map()
// map.set("India","Delhi")
// map.set("Germany","Berlin")
// map.set("UK","London")
// map.set("France","Paris")
// map.set("Japan","Tokyo")
// map.set("China","Beijing")
// console.log(map);
// console.log(map.get("UK"));

// 5. Iterate through the Map and display key-value pairs.

// for (let [key, value] of map) {
//  console.log(key, value);
// }



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

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 45, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 91, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];

// students.forEach(student => {
//   student.total = student.math + student.english + student.science;
// });
// students.sort((a,b) => (b.total - a.total))
// students.forEach(student => {
//   console.log(`${student.name}: ${student.total}`);
// });

// 7. Find names of students who failed in at least one subject.
// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 27, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 31, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// let failedStudents = students.filter(student =>
//   student.math <= 40 || student.english <= 40 || student.science <= 40
// );
// let failedNames = failedStudents.map(student => student.name);
// console.log(failedNames);

// 8. Group students into ‘Passed’ and ‘Failed’ categories.
// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 27, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 31, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];

// let filtered = students.filter((students)=> students.math <= 40 || students.english<=40 || 
//   students.science<=40);
// students.forEach(student => {
//   const isFail = student.math < 40 || student.english < 40 || student.science < 40;
//   console.log(student.name + " : " + (isFail ? "Fail" : "Pass"));
// });

// 9. Get list of students with subject-wise grades (A, B, C, F).

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 27, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 31, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];

// function getGrade(score) {
//   if (score >= 75) return "A";
//   if (score >= 60) return "B";
//   if (score >= 40) return "C";
//   return "F";
// }

// const gradedStudents = students.map(student => {
//   return {
//     name: student.name,
//     grades: {
//       math: getGrade(student.math),
//       english: getGrade(student.english),
//       science: getGrade(student.science),
//     }
//   };
// });
// console.log(gradedStudents);

// 10. Generate a result summary report:
// ● Total students 
// ● Students submitted 
// ● Students failed 
// ● Average marks per subject

// const students = [
// { name: "Alice", math: 85, english: 78, science: 92, submitted: true },
// { name: "Bob", math: 27, english: 52, science: 58, submitted: false },
// { name: "Charlie", math: 95, english: 88, science: 31, submitted: true },
// { name: "David", math: 66, english: 70, science: 60, submitted: true },
// { name: "Eva", math: 50, english: 49, science: 45, submitted: false },
// ];
// let totalStudents = students.length;
// let submittedStudents = students.filter(student => student.submitted).length;
// let failedStudents = students.filter(student =>
//   student.math < 40 || student.english < 40 || student.science < 40
// ).length;

// let totalMarks = { math: 0, english: 0, science: 0 };
// students.forEach(student => {
//   totalMarks.math += student.math;
//   totalMarks.english += student.english;
//   totalMarks.science += student.science;
// });
// let averageMarks = {
//   math: totalMarks.math / totalStudents,
//   english: totalMarks.english / totalStudents,
//   science: totalMarks.science / totalStudents
// };

// console.log("Result Summary Report:");
// console.log(`Total Students: ${totalStudents}`);
// console.log(`Students Submitted: ${submittedStudents}`);
// console.log(`Students Failed: ${failedStudents}`);
// console.log(`Average Marks: Math: ${averageMarks.math}, 
//               English: ${averageMarks.english},
//               Science: ${averageMarks.science}`);

///donee///

