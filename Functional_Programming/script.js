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
// function partial (func, ...fixedArgs) {
//     return function(...remainingArgs) {
//         return func(...argsBound,...remainingArgs);
//     }
// }


// const calculateTaxForCalifornia = partial(calculateTax, 0.2);
// const calculateTaxForLossangesl = partial(calculateTax, 0.7);


// function fetchData(url,apiKey,params){
//     const queryString = new URLSearchParams(params).toString();
//     const fullUrl = `${url}?${queryString}&apiKey=${apiKey}`;


//     console.log(`Sending request to ${fullUrl}`);
//     console.log(`With API key of ${apiKey}`);
// }
 
// function partial(func,fixedArg1, fixedArg2) {
//     return function(...params) {
//         return func(fixedArg1,fixedArg2,...params);
//     }
// }

// const myApiKey = "my-secret-api-key";
// const myApiUrl = "https://api.mywebsite.com/data"

// const googleApiKey = "google-secret-api-key";
// const googleApiUrl = "https://api.google.com/data"

// const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
// const fetchGoogleAPI = partial(fetchData, googleApiUrl, googleApiKey);

// fetchMyAPI({id:1,sort:'desc'});
// fetchGoogleAPI({search:'cat'});


// Function Composition => function composition is a mechanism of combining multiple functions to build a more complicated one. the result of each function is passed as an argument to the next function.

//  const add = (a,b)=> a+b;
//  const multiply = (a,b)=> a*b;
//  const result = multiply(add(2,3),10);


// function compose(fn1,fn2){
//     return function(value){
//         return fn1(fn2(value))
//     }
// }

// function repeatTwice(str){
//     return str.repeat(2)
// }

// function uppercase(str){
//     return str.uppercase()
// }

// const repeatAndUppercase = compose(uppercase, repeatTwice);


// Compose function takes a list of functions and returns a new function
// function compose(...functions) {
//     // Returned function takes a single parameter (data)
//     return function(data) {
//         // Loop through each function in reverse order and apply it to the accumulator
//         return functions.reduceRight((accumulator, currentFunction) => {
//             // Log the accumulator to see what it contains
//             console.log('Current accumulator:', accumulator);
//             // Apply the current function to the accumulator
//             return currentFunction(accumulator);
//         }, data); // Initial value for accumulator is the input data
//     };
// }

// // Sample functions
// function lowerCaseString(str) {
//     return str.toLowerCase();
// }

// function splitString(str) {
//     return str.split(" ");
// }

// function joinWithDash(array) {
//     return array.join('-');
// }

// // Compose the functions
// const composeFunctions = compose(
//     joinWithDash,
//     splitString,
//     lowerCaseString
// );

// // Call the composed function with some input data
// console.log(composeFunctions("Hello maama , what's UP!"));


// Currying => A curried function can be called with any number of argumnets, if you call it with fewer args than it takes, it returns a smaller partial which you can then call with remainning arguments.

// function add(a,b,c){
//     return a + b + c 
// }

// // modify this add function to currying function 

// function addCurry(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// Currying is a technique used in functional programming where a function that takes multiple arguments is transformed into a series of functions that take a single argument.

// function add(x, y, z) {
//     return x + y + z;
//   }
//   function curry(fn) {
//     return function curried(...args) { // Receives Number of args as params
//       if (args.length >= fn.length) {
//         return fn.apply(null, args);
//       } else {
//         return function (...newArgs) {
//           return curried.apply(null, args.concat(newArgs));
//         };
//       }
//     };
//   }
  
//   const addCurried = curry(add);
  
//   const addAll = addCurried(1)(2)(3)(4)(5);
  
//  console.log( addAll)

// function add(x, y, z) {
//     return x + y + z;
//   }
  
//   function curry(fn, allowedLength = fn.length) { // Default allowedLength based on original function
//     return function curried(...args) {
//       if (args.length > allowedLength) {
//         throw new Error('Function expects at most ' + allowedLength + ' arguments.'); // Throw an error
//       } else if (args.length >= allowedLength) {
//         return fn.apply(null, args);
//       } else {
//         return function (...newArgs) {
//           return curried.apply(null, args.concat(newArgs));
//         };
//       }
//     };
//   }
  
//   const addCurried = curry(add);
  
//   // Valid curried calls (up to 3 arguments)
//   const addAll = addCurried(1)(2)(3); // Returns 6
//   const addSome = addCurried(5)(4); // Returns 9
  
//   // Error handling for extra arguments
//   try {
//     const extraArgs = addCurried(1)(2)(3)(4); // Throws an error
//     console.log(extraArgs); // This line won't be reached
//   } catch (error) {
//     console.error(error.message); // Output: Function expects at most 3 arguments.
//   }
  
//   console.log(addAll); // Output: 6 (assuming successful execution)
//   console.log(addSome); // Output: 9 (assuming successful execution)

// You're absolutely correct. In the curried implementation we discussed, the function cannot handle more arguments than the original function was designed for. Here's why:

// Currying's Purpose: Currying is primarily used to create a series of functions that accept single arguments, ultimately building up to a call with all the required arguments for the original function. It focuses on breaking down a multi-argument function into smaller, more manageable pieces.

// Argument Handling in the curry Function:

// The curry function checks if the number of provided arguments (args.length) is greater than or equal to the expected number of arguments (fn.length).
// If there are more arguments, it wouldn't be a valid currying scenario. Imagine calling addCurried(1)(2)(3)(4): The first three calls are part of the currying process, but a fourth argument (4) doesn't fit into the original add function's design.
// Error Handling: While not explicitly implemented in the code you provided, it's good practice to handle unexpected arguments that exceed the intended usage of currying. You could throw an error or return a specific value to indicate that extra arguments are not allowed.

// Alternatives for Handling Extra Arguments:

// Ignore Extra Arguments: If the extra arguments are irrelevant for the final calculation, you can simply ignore them in the add function. However, this might not be desirable if specific behavior is expected for all arguments.
// Modify the Original Function: If handling extra arguments is a requirement, you could modify the add function to take a variable number of arguments (...rest) and perform the necessary calculations on all of them. This would deviate from the core concept of currying, which focuses on building up arguments one by one.
// Conclusion:

// Currying is a powerful technique for working with functions and their arguments, but it has its limitations. In this case, the curried version cannot handle more arguments than the original function could. Consider the purpose of currying and explore alternative solutions if more argument flexibility is needed.





//Dice Game by using OOP

// class DiceGame{
//     constructor(button,result){
//         this.button = document.getElementById(button);
//         this.result = document.getElementById(result);

//         this.button.addEventListener('click',this.rollDice);
//     }
//     getRandomNumber(){
//         return Math.floor(Math.random() * 6) + 1;
//     }

//     checkNumber(roll){
//         return roll === 6;
//     }

//     rollDice = () => {
//         let roll = this.getRandomNumber();
//         if(this.checkNumber(roll)){
//             this.result.innerHTML = 'You rolled a '+ roll + '. You win!';
//         }else{
//             this.result.innerHTML = 'You rolled a '+ roll + '. You lose!';
//         }
//     }
// }

// new DiceGame('rollBtn','result');	


// Dice game by using functional programming



const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
const checkNumber = (roll) => roll === 6;

const displayResult = (resultDiv,value) => {
    resultDiv.innerHTML = value;
}

const rollDice = (resultDiv) =>()=>{
    let num = getRandomNumber();
    let value = checkNumber(num) ? `yeah ${num}, you win!` : `sorry your point is ${num}, you lose ` 
    displayResult(resultDiv,value);
}


const disceGame = (rollButton,resultDiv) => {
    const buttonId = document.getElementById(rollButton);
    let resultDivId = document.getElementById(resultDiv);

    buttonId.addEventListener('click',rollDice(resultDivId))
}

disceGame('rollBtn','resultDiv');