
//cuando se usan primitivos los valores se pasan por valor
let a = 10;
let b = a;

console.log({ a, b });

a = 30;

console.log({ a, b });

// en javasecript los objetos se pasan por referenciaS
let juan = { nombre: 'Juan' };
//la forma mas facil de copiar un objeto es usando el operador spread
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let Tony = cambiarNombre(peter);

console.log({ peter, Tony });

//Arreglos

const frutas = ['manzana', 'pera', 'uva'];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('naranja');

console.table({ frutas, otrasFrutas });