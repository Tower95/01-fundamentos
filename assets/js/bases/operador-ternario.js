/**
 * Dias de semana abrimos a las 11,
 * pero si es fin de semana abrimos a las 9
 */

// Entra a un sitio web, para xonsultar si esta abierto hoy
const dia = 6; //0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado
const horaActual = 8; //horas del dia

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado

// if (dia === 0 || dia === 6) {
// if([0, 6].includes(dia)) {
//   console.log('Fin de semana');
//   horaApertura = 9;
// }else{
//   console.log('Dia de semana');
//   horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = horaActual >= horaApertura ?'esta abierto' :`Esta cerrado abriamos a las ${horaApertura}`; 


console.log(mensaje);


