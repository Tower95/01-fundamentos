'use strict'

class Person {

  static byObject({name, surename, country}){
    return new Person(name,surename,country);
  }
  constructor(name, suresName, country) {
    this.name = name;
    this.suresName = suresName;
    this.country = country;
  }
  
  getInfo() {
    console.log(`Info: ${this.name}, ${this.suresName}, ${this.country}`)
  }
  
  }
  
  
  const name1 = 'Melissa',
  suresName1 = 'Flores',
  country1 = 'Honduras';
  
  const Ism = {
  name: 'Ismael',
  surename: 'Torres',
  country: 'Mexico'
}

const person1 = new Person(name1, suresName1, country1);
const person2 = Person.byObject(Ism);

person1.getInfo();
person2.getInfo();
