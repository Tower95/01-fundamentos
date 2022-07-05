//string
let nombre = 'Peter Parker';

console.log(nombre);

//reasicnacion
nombre = 'Ben Parker';

console.log(nombre);

//also strings
nombre = "Tía may";
nombre = `Tía may`;

// now the type of variable
console.log(typeof nombre);

// automatic change type
nombre = 123;

console.log(typeof nombre);

//boolean

let esMarvel = true;

console.log(typeof esMarvel);

// number
let edad = 33;

console.log(typeof edad);

edad = 33.01

console.log(typeof edad);

//undefined 
let superPoder;

console.log(typeof superPoder);

//null
let soyNull = null;

console.log(typeof null);

// symbol
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

// the symbols dont match this return false
console.log(symbol1 === symbol2);

