// objects with similar methods
// const user = {
//   name: 'ismael',
//   age: 26,
//   pritnInfo() {
//     console.log(`Name: ${this.name} - Age: ${this.age}`);
//   }
// }
// const user2 = {
//   name: 'Daniel',
//   age: 27,
//   printInfo() {
//     console.log(`Name: ${this.name} - Age: ${this.age}`);
//   }

// }

// user.pritnInfo();
// user2.printInfo();
// const user3 = {
//   name: 'Ana',
//   age: 24
// }

// console.log({ user })
// This need to be call with new
function Person(name, age) {

  console.log('Se ejecuto esta line');

  this.name = name;
  this.age = age;

  this.printInfo = function() {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  }

}

const maria = new Person('Maria', 18);
const melisa = new Person('Melissa', 48);

// console.log(maria);

melisa.printInfo();
maria.printInfo();














