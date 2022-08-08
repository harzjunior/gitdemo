import { students } from "./exp.js";

students.map((student, key) => {
  return console.log(`${key + 1} ${student.fName}`);
});

console.log(`==================================`);

students.forEach((student) => console.log(`${student.lName}`));

console.log(`==================================`);

for (let i = 0; i < students.length; i++) {
  const element = students[i];
  console.log(element.city);
}
