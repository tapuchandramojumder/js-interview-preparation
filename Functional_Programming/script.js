// console.log('functional Programming Js')

//  Functional Programming => FP is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.

// FP is often declarative, which means that it is a style of programming where we declare the rules for how functions should be composed.

// FP is often declarative rather than imperative, and application state flows through pure functions.

// FP methods you've met and should 100% know:
// 1. map  2. filter 3. reduce 4. some 5. every 6. find 7. findIndex 8. sort 9. forEach 

//What FP avoids => looping , mutation and shared state , variables declaration 

// What is the imperative programming?
// Imperative programming is a software development paradigm where Functions are implicitly coded in every step required to solve a problem. In imperative programming, every operation is coded and the code itself specifies how the problem is to be solved, which means that pre-coded models are not called on.

// Why is it called imperative programming?
// In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform. Imperative programming focuses on describing how a program operates step by step, rather than on high-level descriptions of its expected results.


// What is the functional programming?
//Functional programming is a declarative programming paradigm style where one applies pure functions in sequence to solve complex problems. Functions take an input value and produce an output value without being affected by the program.

//What is functional programming best for?
// Functional programming encourages the use of immutable data structures, reducing the risk of bugs caused by unintended state changes. By embracing these core concepts, developers can harness the power of functional programming to create robust and reliable software systems.


// In javascript functions are first class citizens, which means that they can be treated like any other data type.


// Pure Function => A pure function is a function that always returns the same output for the same input. the function cannot depend on any mutable state . the function cannot cause any side effect. side effects may include I/O (eg, writing to the console or a log file), modifying a mutable object, reassigning a variable etc. 

// Impure function 

// let value = 2; 
// function squareAndUpdateValue(num){
//     value = num * num;
//     return value
// }

// Pure function 
// function square(num){
//     return num * num;
// }

// Impure function

// const colors = ['red', 'green', 'blue'];
// function changeColor(arr,color){
//     return arr.push(color);
// }


// Pure Function

// const colors = ['red', 'green', 'blue'];
// function doesntChangeColor(arr,color){
//     return [...arr,color]
// }

// Higher Order Functions => A function that recieves another function as an argument and returns a function or does both or functions can returns functions as a value 

//  Example 1
// function doTwice(func){
//     func()
//     func()
// }
// doTwice(function(){
//     console.log('Hi there I am do twice function')
// })

// Example 2
// function multiplyBy(factor){
//     return function(num){
//         return num * factor
//     }
// }

// const square = multiplyBy(2)
// const cube = multiplyBy(3)


// Make an object immutable in javascipt

// const person = {name: 'John', age: 30};	
// Object.freeze(person);

// Make an array immutable in javascipt

// const nums = [1,2,3];	
// function immutableNumsArr(arr,num) {
//     return [...arr,num];
// }

//remove last item of the array in immutable way 

    // const nums = [1,2,3];    
    // function immutableNumsArr(arr,num) {
    //     // add last element as well add element
    //     // return [...arr.slice(0,arr.length-1),num];
    //     return arr.slice(0,arr.length-1);
    // }



    // Factorial 

    // function factorial(num) {
    //     let result = 1;
    //     for (let i=num ; i>1 ;i--) {
    //         result *= i;
            
    //     }
    //     return result
    // }

    // function factorial(num){
    //     if(num===1){
    //         return 1;
    //     }
    //     return num * factorial(num - 1);
    // }



// some functional programming ideas you may have seen : 
// const , Object.freeze , recursion , pure functions .

// Partial application 
// The process of executing a function with some or all of it's argument's . the partially applied function then gets returned for later use.

// What is partial application in functional programming?
// Partial application is a way of transforming a function that takes multiple arguments into a function that takes fewer arguments. You can do this by specifying some of the arguments beforehand and returning a new function that only expects the remaining arguments.


// function multiply(a,b){
//     console.log('a= ',a)
//     console.log('b=',b)
//     return a * b;
// }

// const double = multiply.bind(null, 2);
// const triple = multiply.bind(null, 3);

// function partial (func, ...argsBound) {
//     return function(...remainingArgs) {
//         return func(...argsBound,...remainingArgs);
//     }
// }

// const double = partial(multiply, 2);
// const triple = partial(multiply, 3);    


// function calculateTax(rate,amount){
//     const total = amount * rate;
//     const rounded= total.toFixed(2);
//     return Number(rounded)
// }
// function partial (func, ...argsBound) {
//     return function(...remainingArgs) {
//         return func(...argsBound,...remainingArgs);
//     }
// }


// const calculateTaxForCalifornia = partial(calculateTax, 0.2);
// const calculateTaxForLossangesl = partial(calculateTax, 0.7);

