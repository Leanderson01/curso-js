// 1.0:
var weight
// 2.0:
console.log(typeof weight) //undefined
// 3.0:
let name = "Leanderson"
console.log(typeof name)
let age = 17
console.log(typeof age)
let stars = 100.5
console.log(typeof stars)
let isSubscribed = true
console.log(typeof isSubscribed)
// 4.0 - Objeto
let student = {};
// 4.1:
student = {
  name: "Leanderson",
  age: 17,
  weight: 80.1,
  isSubscribed: true
};
// 4.2:
console.log(student.name, " de idade ", student.age, " pesa ", student.weight, "kg.")
// 5.0:
// let student = []
// 6.0:
let students = [
  student
];
// console.log(students)
// 7.0:
console.log(students[0])
// 8.0:
const Leanderson = {
  rg: 23940004,
  cpf: 8887776653,
  matricula: 10000000
};
students[1] = Leanderson
console.log(students[1])
// 9.0:
// undefined, por conta do hoisting





