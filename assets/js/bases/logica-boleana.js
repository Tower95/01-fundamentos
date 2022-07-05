const regresaTrue = () => {
  console.log('regresa true');
  return true;
}

regresaFalse = () => {
  console.log('regresa false');
  return false;
}

console.warn('Not a la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false


// or: si alguno de los valores es verdadero, regresa true
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log("=========================");
console.log(regresaFalse() && regresaTrue()); //true
console.log(regresaTrue() || regresaFalse()); //true

console.log('====&&====');
regresaFalse() && regresaTrue(); //false

console.warn('====||====');
console.log(regresaTrue() || regresaFalse()); //true

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola mundo' && 150;// asigna el ultimo valor verdadero
const a2 = 'Hola' && 'mundo';
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; //retorna el primer valor verdadero
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; //retorna el primer valor verdadero

console.log({a1,a2, a3, a4, a5});


