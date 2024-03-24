// new keyword does four things
//1. create an empty object 
//2. set the keyword this to be an object
//3. return the object - return this
//4. create links to the object prototype

// const myObj = {
//   name: 'mofig',
//   age: 123,
//   sum: function () {
//     console.log(`total some is equal : ${2 + age}`)
//   }
// }

class Dog {
  constructor(name, breed) {
    console.log('this is what', this)
    this.name = name;
    this.breed = breed;

  }
  bark() {
    return `Woof Woof`
  }
}
class ChildDog extends Dog {
  constructor(name, breed, power) {
    super(name, breed)
    this.power = power
  }
  fight() {
    console.log('fight for save his owner')
  }
}

// function Dog(name, breed) {
//   console.log('this', this)
//   this.name = name;
//   this.breed = breed;

// }
// Dog.prototype.bark = function () {
//   return `Woof Woof`
// }

// const grandParent = {
//   sayHi() {
//     console.log('hello I am grand Parent my name is Don')
//   }
// }
// const parent = {
//   love() {
//     console.log('I love my child ')
//   },
//   __proto__: grandParent
// }
// const child = {
//   name: 'tuni',
//   __proto__: parent
// }