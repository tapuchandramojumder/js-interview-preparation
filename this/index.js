// function texCal(taxRate, price) {
//   return price + price * taxRate
// }

// const textCalNY = texCal.bind(null, 0.05)
// const textCalLA = texCal.bind(null, 0.09)


// console.log(textCalLA(240))
// console.log(textCalNY(240))

// class Counter {
//   constructor(startingNum = 0, incrementAmu = 1) {
//     this.count = startingNum;
//     this.incrementAmu = incrementAmu;
//   }
//   start() {
//     setInterval(function () {
//       console.log("starting number :", this.count)
//       this.count += this.incrementAmu
//     }, 1000)
//   }
// }

// const counter = new Counter()
// counter.start()


// bind is a metod of function that return a bound copy of the function 
// bind is a method of function that return a bound copy of the function 


// function multiply(a, b) {
//   return a * b;
// }
// const obj = {
//   name: 'john',
//   multiply: function () {
//     console.log(this)
//     return `this er value holo ${this.name}`
//   }
// }
// const dobule = multiply.bind(null, 2)
// console.log(dobule(4))

// const triple = multiply.bind(null,3)
// console.log(triple(10))

// when you do not directly call functions and instead 
// javascript call them, a keyword this is created for you

// const conan = {
//   name: 'Conan',
//   city: 'Los Angeles',
//   sing: function () {
//     console.log('this is :', this);
//     console.log(`${this.name} sings La La La`);
//   }
// }

// here is this examples for addEventListner which is called by javascript
// const btn = document.querySelector("#clickMe")
// btn.addEventListener('click', conan.sing.bind(conan))

// here is the examples for timemer fuction which is call by javascript and here this value is window

// class Counter {
//   constructor(startingNum = 0, incrementValue = 1) {
//     this.count = startingNum,
//       this.increment = incrementValue
//   }
//   start() {
//     setInterval(this.incrementFunc.bind(this), 1000)
//   }
//   incrementFunc() {
//     console.log('this er value ki ', this)
//     console.log(this.count)
//     this.count += this.increment
//   }
// }

// uporer start() function tar moddhe ami regular function use korechi tai ekhane 'this' er value window hocche
// kintu jodi ami arrow function () use kore tahole this er value hobe Counter object er value
// karon amra jani arrow function this er value ignore kore 
// arrow function don't make their own this 


// function greet() {
//   console.log(`my name is ${this.userName}`)
// }
// greet()

// const person = {
//   userName: 'mofig',
//   sayHi: greet
// }

class CounterGame {
  constructor(initialCounter, buttonElement) {
    this.count = initialCounter;
    this.button = buttonElement;
    this.button.addEventListener("click", () => this.incrementCount())
  }
  incrementCount() {
    this.count += this.count
    console.log(this.count)
  }
}
const btn = document.querySelector("#clickMe")
const counterMe = new CounterGame(1, btn)
const btn2 = document.querySelector("#clickMe2")
const counterMe2 = new CounterGame(100, btn2)























