

let a = 9;

if( a >= 10 ) {
  console.log('a es mayor o igual a 10');
}
else {
  console.log('a es menor a 10');
}

// console.log('fin del script');

// crea una nueva instancia de un objeto de tipo Date
const hoy = new Date();
let dia = hoy.getDay(); // 0: es domingo, 1: lunes, 2: martes, etc
// console.log(hoy);
console.log({dia});

if(dia === 0 ){
  console.log('Es domingo');
}else if(dia === 1){
  console.log('Es lunes');
}else if(dia === 2){
  console.log('Es martes');
}else {
  console.log('no es domingo ni lunes ni martes');
}


semana = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado'
}

console.log('hoy es',semana[dia] || 'no es un dia de la semana');
