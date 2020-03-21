// function Person(){

// }

// Person.prototype.name = "xiaoj"
// Person.prototype.sayname = function(){
//   console.log(this.name)
// }

// let person1 = new Person()
// person1.sayname()
// let person2 = new Person()
// person2.sayname()

function Suptype(){
  this.property = true
}

Suptype.prototype.getSuperValue = function(){
  return this.property
}

function SubType(){
  this.subproperty = false

}

SubType.prototype = new Suptype()

SubType.prototype.getSubValue = function (){
  return this.subproperty
}

let instance = new SubType()

// console.log(instance.getSuperValue(

class Person{}

const Animal = class {}


