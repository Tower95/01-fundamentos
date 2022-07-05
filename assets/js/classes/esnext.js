'use strict'

class Recatangle{
  //private property
  #area = 0;

  constructor(base = 0, heigth = 0){
    this.base = base;
    this.heigth = heigth;
    this.#area = (this.base * this.heigth )/2 ;
  }
}

const rectangle = new Recatangle(10 , 15);
console.log(rectangle);
