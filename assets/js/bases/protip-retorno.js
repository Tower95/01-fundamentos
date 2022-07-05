// function crearPersona(nombre, apellido){
// return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Ismael', 'Torres');
console.log(persona);

// return all arguments sending to the functions.
function imprimirArgumentos() {
  console.log(arguments);
}

// if we want to have all arguments in a arrow function we
// have to use the spreat operator "..."
const imprimirArgumentos2 = (edad, ...args) => {
  return args;
  // console.logi({ edad,args });
}

imprimirArgumentos(1, true, ['cosa1', 'cosa2'], 4, "hola");

const [casado, ayudantes, experienciaAnios, saludo] = imprimirArgumentos2(1, true, ['cosa1', 'cosa2'], 4, "hola");

console.log({ casado, ayudantes, experienciaAnios, saludo });


const { apellido:nuevoApelledio } = crearPersona('Ismael', 'Torres');
console.log(nuevoApelledio);





