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

class Hero extends Person{

  clan = 'No clan'; 

  constructor(name, nickname, moto, clan){
    //call the super class constructor
    //allways call super after constructor 
    super(name,nickname,moto);

    //now you can use this
    this.clan = clan; 
  }

  howAmI(){
    console.log(`I am ${this.name}, from ${this.clan}`);
    // you can call the original method with super
    super.howAmI();
  }
}
const spiderman = new Hero('Piter Parker', 'Amazing-Spiderman', 'A great power brings a great responsability', 'The Avengers');
// const spiderman = new Hero('the avengers');
spiderman.howAmI();
console.log(spiderman);














