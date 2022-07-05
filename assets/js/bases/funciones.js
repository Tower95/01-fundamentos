
// forma clasica
function saludar( nombre ){
  // todas las funciones clasicas (las que son declaradas con la palabra function)
  // cuentan internamente con el objeto arguments que tiene todos los agumentos pasado
  // y el scoop donde fue llamada.
  // console.log( arguments );
  // console.log('Hola ', nombre);
  // retorna el valor siguiente (undefined si no es definido) y termina
  // la ejecucion de una vaiable.
  return [1,2]; 

  //este codigo nunca se ejecuta.
  console.log('soy un codigo que nunca se ejecuta');
}

// forma con funcion anonima
const saludar2 = function( nombre ){
  console.log('Hola ', nombre);
}

//funciones de flecha
const saludarFlecha = (nombre) => {
  console.log('Hola ', nombre);
}

let result = saludar('ismael', 40, true, 'Mexico')
console.log('retorno ', result[0], result[1]);
// saludar();
saludar2('Ismael');
saludarFlecha('Flecha');

const suma = (a, b) => a+b;

console.log(suma(2,2));

const Aleatorio = () => Math.random() * 100;

console.log(Aleatorio());








