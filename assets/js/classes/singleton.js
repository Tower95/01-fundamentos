'use strict'

class Singleton {
  
  static instance; //undefined 

  name = '';

  constructor(name = ''){

    if(!!Singleton.instance){
      return Singleton.instance; 
    }
    
    Singleton.instance = this
    this.name = name


  }

}

const instance1 = new Singleton('Ironman');
const instance2= new Singleton('Spiderman');

console.log(`Name in the first Instance ${instance1.name}`);
console.log(`Name in the first Instance ${instance2.name}`);
