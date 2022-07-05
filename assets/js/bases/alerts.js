
alert('hola mundo');

let nombre = prompt('Cual es tu nombre?', 'sin nombres');

console.log(nombre);
console.log( "****"+nombre+"****");

const selection = confirm("Esta seguro de borrar esto?");
console.log(selection);

// this only works on node
// console.log(global);

//this only work on Browsers
// console.log(window);