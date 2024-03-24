// console.log('hello I am js tricky part scope')

// var color = 'red'

// function myScope() {
//   console.log(color)
//   var animal = 'tiger'
//   console.log(animal)
// }
// // console.log('out of function', animal)
// // that means functions are block scope 

// if (true) {
//   console.log('color ta ki', color)
//   var flower = 'rose'
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }
// // console.log('flower name ta ki ', flower)
// console.log('outside of i value', i)
// // that means var variable  inside if block and for loop using window object that's they are global
// but let and const are block scope they are available inside block only 
// let name = 'tapu';
// var origin = 'bangaldeshi'
// var change our own windows property 
// let origin = 'bangaleshi' // let doesn't change our windows property

//scolpe chaining 
// 1.In the local scope 
// 2.Any outer functions
// 3.Global scope

// let age = 10;

// function outer() {
//    age = 'no age found'
//   if (true) {
//    let age = 6;
//     console.log(age)
//   }
//   console.log(age)
// }

// outer()
// console.log(age)

// lexical scoping 

// let animal = 'Red Owl';
// function printAnimal(){
//  console.log(animal)
// }

// function anotherPrintAnimal(){
//   let animal = 'Brown Owl'
//   printAnimal()
// }

// anotherPrintAnimal() // Red Owl because the flow scope chain rules


// const obj = {
//   name: 'jhon'
// }
// const fun = (obj) => {
//   obj = null
// }
// fun(obj)
// console.log(obj.name)
// let obj1 = obj;
// obj1.name = 'nai';
// console.log('obj1', obj1.name)

// console.log(obj.name)


// let animal = 'tiger';
// function firstAnimal() {
//   console.log(animal)
// }

// function secondAnimal() {
//   let animal = 'cat'
//   firstAnimal()
// }
// secondAnimal()

// console.log(food)

// const food = 'pizza'


//***** Temporal dead zone *****/

// js does hoiste variable with declareation. The Temporal Dead Zone for 
// a variable is the area where a variable is hoisted, but not accessible until the variable is 
// initialized with a value  

// so the variable with let and const are hoisted, but 
// not accessible until they are initialized with a value  

// function hosting(){
//   //temporal dead zone start
//   console.log(color)
//   //ReferenceError: Cannot access 'color' before initialization;
//   let color = 'black';
//   //temporal dead zone ends
// }

// function blah() {
//   if (true) {
//     let message = 'Hello'
//     console.log(message)
//   }
//   console.log('msg : ', message)
// }


// IIFE => Imidiate Invocation of Function Expration 
// it help us avoid global scope polution. we are no longer poluting anithing on the global scope

// (function(){
//   console.log('Hello from an IIFE')
// })()


//Closures

//Closures is just a function defined inside of a function
// that has access to the outer function variables

// so the ability for inner functions to remember variables
// defined in outer functions, long after the outer function has returned

// closure allow us to create insted of private variable I can prevent directly accesing
// function outer(){
//   let outerVariable = 'I am from outer'
//   function inner(){
//     console.log('I am inner function')
//     console.log('outer variable is ', outerVariable)
//   }
//   return inner 
// }

// const myClosure = outer();

// function idGenerator() {
//   let count = 1;
//   function generate() {
//     return count++
//   }
//   return generate;
// }

// const myCounter = idGenerator();

// function counter() {
//   let count = 1;
//   return {
//     increment: function () {
//       return count++
//     },
//     decrement: function () {
//       return count--
//     },
//     getCount: function () {
//       return count
//     }
//   }
// }

// const myCountNum1 = counter();
// const myCountNum2 = counter();

// const myCountData=(function(){
//   let count = 1;
//   return {
//     increment: function () {
//             return count++
//           },
//           decrement: function () {
//             return count--
//           },
//           getCount: function () {
//             return count
//           }
//   }
// })()

// function uniqueIdGenerator(prefix) {
//   let id = 0;
//   return function () {
//     id += 1;
//     return prefix + id
//   }
// }
// const bookId = uniqueIdGenerator('book_')
// const userId = uniqueIdGenerator('user_')

// function exponent(expo){
//   return function(num){
//     return num**expo
//   }
// }
// const squre = exponent(2)
// const cube = exponent(3)

//here is the example of without poluting global variable
// document.querySelector('#btn').addEventListener('click',(function(){
//   let count = 0;
//   return function(){
//     count +=1;
//     console.log(`you clicked me ${count} times`)
//   }
// })()
// )
// closures with event listner
// function createCounter(id) {
//   const btn = document.getElementById(id)
//   let count = 0;
//   btn.addEventListener('click', function () {
//     count++
//     btn.innerText = `click ${count} times`
//   })
// }

// createCounter('btn1')
// createCounter('btn2')
// createCounter('btn3') 


// for (var i = 0; i < 6; i++) {
//  ( function(j){
//   setTimeout(() => {
//     console.log(j)
//   }, 4000)
//   })(i)
// }