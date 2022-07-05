const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  coords:{
    lat: 34.034,
    long: -118.70
  },
  trajes:['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10800, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'Infinity war'
}

console.log(personaje)
console.log('Nombre ', personaje['nombre']);
console.log('Edad ', personaje.edad);
console.log('Corrs', personaje.coords);
console.log('Latitude', personaje.coords.lat);
console.log('Numero de trajes',personaje.trajes.length);
console.log('Ultimo traje',personaje.trajes[personaje.trajes.length -1]);

let x = 'vivo';

console.log('vivo',personaje[x]);

// to access and item with "-" you have to use [''] access

console.log('Ultima pelicula', personaje['ultima-pelicula']);

// mas detalles

// elimina una propidad del objeto literal
delete personaje.edad;

console.log({personaje});

// retorna cada propiedad par dentro de un arreglo con posicion 0 como la clave
// y la posicion 1 como el valor.
const entriesPares = Object.entries(personaje);

console.log(entriesPares);

// esto bloque las propiedades del primer nivel de un objero
Object.freeze(personaje);

personaje.dinero = 100000000;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );

console.log({propiedades, valores});
