'use strict'

class Person {

  //static property
  static _count = 0;

  //static getter
  static get count(){
    return Person._count + ' Instance';
  }

  //static method
  static message(){
    // console.log(this.name);
    console.log('Hi Im a static method');
  }
  
  name = '';
  nickname = '';
  moto = '';
  food = '';

  constructor(
    name = 'No name',
    nicknamek = 'No nickname',
    moto = 'No Moto'
  ) {
    this.name = name;
    this.nickname = nicknamek;
    this.moto = moto;
    
    Person._count++;    
  }
  // getters and setter
  //set can't be name as the same property they set
  set setFavoritFood(food){
    
    this.food = food.toUpperCase();

  }  
  get getFavoritFood(){
    return `My name is ${this.name} and my favorit food is ${this.food}`;
  }
  
  //methods
  howAmI(){
    console.log(`I am ${this.name} my secret identity is ${this.nickname}`);
  }

  myMoto(){
    this.howAmI();
    console.log(`${this.nickname} say ${this.moto}`);
  }

}

const spiderman = new Person('Piter Parker', 'Amazing-Spiderman', 'A great power brings a great responsability');
spiderman.food = 'Aunt May Cherry Pie';
// spiderman.food = 'Pizza';
console.log(spiderman.getFavoritFood);



console.log(spiderman);
const ironman = new Person('Tonny Stark', 'Iron Man', 'I am Iron man');

// // spiderman.howAmI();
// spiderman.myMoto();

// // ironman.howAmI();
// ironman.myMoto();

// console.log(spiderman);
// console.log(ironman);

console.log('Static count', Person._count);
console.log(Person.count);
Person.message();

Person.externalProp = 'Hello World';
console.log(Person.externalProp);
console.log(Person);



