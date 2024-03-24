// console.log('hello Js tricky parts')

// IEEE = Institute of Electrical and Electronic Engineers

// float point number 

// function areFloatEqual (a,b,epsilon = 1e-10){
//   return Math.abs(a-b)<epsilon;
// }
// areFloatEqual(0.3,0.1+0.2)// true

// 0.1 + 0.2  // 0.3000000000000004

// 0.1 + 0.2 === 0.3 // false
// console.log(Math.abs(f1 - f2) < Number.EPSILON);

// let f1 = 1000000.1 + 0.2;
// let f2 = 1000000.3;
// console.log(Math.abs(f1 - f2) < Number.EPSILON); // '!!!!!! false !!!!!!!'
// Other programming languages have separeted data type of floating point number and separted data type of Integer number but in the javascript have single number data type that's why sometime we get weried behaviour 
//note that because floats are stored as binary, it's not a case of there being exactly 15 significant decimal digits at all times - information is lost at some power of two, not a power of 10).

// Number.EPSILON is waaaaay smaller than .00001 - so while the first example works with a "tolerance" of Number.EPSILON (because the numbers being compared are all smaller than 1.0), the second example breaks.

// Not a Number 

//javascript NaN value can be tricky.It often comes from : 
// 1. Logical math error, like 0/0
// 2. Imaginary numbers, like Math.sqrt(-1)
// 3. Conversion errors, like Number('nope')
// All NaN values are considered unique, so NaN === NaN is false
// If you need to check for NaN, there are two different ways:
// isNaN(n) => This returns true if n is NaN or is a value that
// cannot be coerced into a number 
// Number.isNaN(n) => This returns ture only if n is NaN everythings
// else return false  Number.isNaN(0/0)= true . and Number.isNaN('nope') = false


// post increment (x++): using x++ is often useful as a return statement
// return this value to caller, but bump up for next time 

// class Counter {
//   constructor() {
//     this.current = 1
//   }
//   next() {
//     return this.current++
//   }
// }
// const count = new Counter()

// console.log(count.next())
// console.log(count.next())
// console.log(count.next())
// console.log(count.next())
// console.log(count.next())


// post increment(++x): It increment value first then return 
// class Counter {
//   constructor() {
//     this.current = 1
//   }
//   next() {
//     return ++this.current
//   }
// }
// const count = new Counter()

// console.log(count.next())
// console.log(count.next())
// console.log(count.next())
// console.log(count.next())
// console.log(count.next())


//Semicolons 
// you can write Javascript with or without semicolons;
// if you ommit them, they will be inserted by JS in a process
// konw as ASI(automatic semicolon insertion) 
// Mostly, this means it works, either way - but there are some edges

// Generator 
// Generator function are besically functions that can pass their execution and
// resume their execution . they allow us to produce sequence of values on demand

// Generator and yield => javascript can have generator functions - functions that return a Generator that can be lazily looped over 
// that means pause their execution and resume their execution . they allow us to produce a sequince of value on demand 


// function* evens(n){
//   while(true){
//     yield n; 
//     n +=2
//   }
// }
// // make a "Generator" will return even numbers 2+ 
// let allEvens = evens(2)
// // lazily get the first 10 even numbers 
// for(let i=0; i<10; i++){
//   console.log(allEvens.next().value)
// }

// function* fibbonacci(){
//   let a = 0;
//   let b = 1;
//   while(true){
//     yield a ;
//     [a,b] = [b,a+b]
//   }
// }
// const myfibo = fibbonacci()

// usecase of generator : suppose I have to 1000 image in a page 
// so It's not ideal at a time we show 1000 image , we will show on scroll

// const allImages = Array.from({ length: 1000 }, (_, i) => `https://placeimg.com/640/480/any?images=${i}`)

// function* getBatchOfImages(images, batchSize = 10) {
//   let currentIndex = 0;
//   while (currentIndex < images.length) {
//     yield images.slice(currentIndex, currentIndex + batchSize)
//     currentIndex = currentIndex + batchSize
//   }
// }
// const imageGen = getBatchOfImages(allImages)
// console.log(imageGen.next().value)
// console.log(imageGen.next().value)
// console.log(imageGen.next().value)


// function* generatorId(){
//   let id = 1;

//   while(true){
//     const increment = yield id;
//     if(increment !=null){
//       id +=increment
//     }else{
//       id++
//     }
//   }
// }

// const generateNum = generatorId()
// console.log(generateNum.next())
// console.log(generateNum.next(4))
// console.log(generateNum.next())