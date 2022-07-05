

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
// while (i < carros.length ) {
//   console.log(carros[i]);
//   i++;
// }

// undefined
// null
// false
i = 0;
while (carros[i]) {
  if (i === 1) {
    i++;
    continue;
  }
  console.log(carros[i]);
  i++;
}

let j = 0;
console.warn('Do While');
do {

  console.log(carros[j])
  j++

} while (carros[j]);