// basic methods of arrays

let games = ['zelda', 'mario', 'metroid', 'castlevania'];

// length return the total of items of array in this case 4.
console.log('Largo: ', games.length);

let first = games[0];

let last = games[games.length - 1];

console.log({first, last});

// execute an instrution(callback) for every item in the array.
games.forEach((item, index,arr)=>{
  console.log(item, index, arr);
});

// add a new item add final of array, returns the new lenght.
let newLength = games.push('megaman');

console.log({games,newLength});

// add a new element add start of array, return the new lenght.
newLength = games.unshift('Duck Hunt');

console.log({games,newLength});

// removes the last element of array and return it.
let deleteElement = games.pop();

console.log({games,deleteElement});

// removes the cuantity of items passed arg2 starting in the index passed arg1

let pos = 1;

console.log(games);

deleteElement = games.splice(pos,1);

console.log({games,deleteElement});

// find the index of and item in the array (case sensitive)
// return -1 if it dosen't find the item
let metroidIndex = games.indexOf('metroid2');
console.log(metroidIndex);

