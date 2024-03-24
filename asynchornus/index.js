// A call back is function passed to another
// function by it's call

// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure

// In functional programming callback are need to 
// seperate from buiseness logic

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// nums.filter(function (num) {
//   return num % 2 === 0
// })

//Event-Driven programming - Register a function to be called when an event happens

// const btn = document.querySelector('#btn');

// function sayHi() {
//   alert('Hello !')
// }

// btn.addEventListener('click', () => sayHi())

//Asynchronous Code
// Call those callbacks when asynchronous operation completes

// setTimeout(sayHi, 2000)

// usefulness of callback function

// function simulateAsync(callback) {
//   setTimeout(function () {
//     console.log("Async task is done,now callback will run");
//     callback()
//   }, 2000)
// }
// console.log('start of the main code')
// //calling the asynchronus task with callback function
// simulateAsync(function () {
//   console.log('calling callback function')
// })

// console.log('end of the main code')

// without callback function it's hold the program

// function simulateAsyncTask() {

//   console.log("Async task is done!");
//   ; // Simulating a 2-second asynchronous task
// }

// // Your main code without using a callback
// console.log("Start of the main code");

// // Calling the asynchronous task without a callback
// simulateAsyncTask();

// console.log("End of the main code");

// function fetchData(url, callback) {
//   // Simulate an asynchronous operation (e.g., network request)
//   setTimeout(() => {
//     const data = "Fetched data from " + url;
//     callback(data); // Call the callback with the fetched data
//   }, 1000); // Simulate delay of 1 second
// }

// fetchData("https://example.com/api/data", (data) => {
//   console.log("Data received:", data);
//   // Other code that can run while the data is being fetched
// });

// console.log("This code can run immediately, before the data arrives.");

// function fetchData(url) {
//   // Simulate an asynchronous operation (pretending it's synchronous)
//   const data = "Fetched data from " + url;
//   return data;
// }

// const data = fetchData("https://example.com/api/data");
// console.log("Data received:", data); // This line won't execute until the fetch is complete
// console.log("This code will be blocked until the data is fetched.");


// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(v) {
//       setTimeout(function () {
//         console.log(v)
//       }, i * 1000)
//     }
//     close(i)
//   }
// }
// x()

// let a = 5;

// function sum() {
//   let b = 6;
//   return function () {
//     return a + b
//   }
// }

// let value = sum()

// console.dir(value)


//promise.js
// promise is container for the future value
// promise is an object with placeholder which filled the value with latter 

// promise is an object that represents eventual completion of an async operation 

// let cart = ['shart','pant','kurta']

// createOrder(cart,function(orderId){
//   proceetToPayment(orderId)
// })

// const promise = createOrder(cart)

// promise.then(function(orderId){
//   proceetToPayment(orderId)
// })

// createOrder(cart,function(orderId){
//   proceetToPayment(orderId,function(paymentId){
//     showOrderSummary(paymentId,function(){
//       updateWallet()
//     })
//   })
// })

// createOrder(cart)
// .then(function(orderId){
//   return proceetToPayment(orderId)
// })
// .then(function(paymentId){
//  return showOrderSummary(paymentId)
// })
// .then(function(){
//  return updateWallet()
// })

// const cart = ['shirt', 'pant', 'genzi']

// const promise = createOrder(cart)
// // how createOrder function makes promise over here , let's see

// function createOrder(cart) {
//   //ordercreate
//   // validate cart
//   //orderId
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error('cart is not valid!')
//       reject(err)
//     }
//     let orderId = '135532iieri34'
//     resolve(orderId)
//   })
//   return pr
// }
// function validateCart(cart) {
//   return true;
// }
// function proceetToPayment(data) {
//   console.log(typeof (data))
//   const prt = new Promise(function (resolve, reject) {
//     if (typeof (data) == 'kkdk') {
//       let err = new Error('taka nai')
//       reject(err)
//     }
//     let taka = 100;
//     resolve(taka)
//   })
//   return prt
// }

// function checkOutWallet(data) {
//   const pr = new Promise(function (resolve, reject) {
//     console.log(data)
//     let ballance = 3000 - data;
//     resolve(ballance);
//   })
//   return pr
// }
// promise.then(function (data) {
//   console.log('eikahne', data)
//   return proceetToPayment(data)
// }).then(function (taka) {
//   console.log('taka', taka)
//   return checkOutWallet(taka)
// }).then(function (money) {
//   console.log('updated ballance money', money)
// })
//   .catch(function (err) {
//     console.log(err.message)
//   })


// Here is the examples of promise flatten like callback hell

// const BASE_URL = "https://pokeapi.co/api/v2/berry";


// fetch(`${BASE_URL}/1`)
// .then(data=>{
//   console.log(data)
//   return fetch(`${BASE_URL}/2`)
// })
// .then(data=>{
//   console.log(data)
//   return fetch(`${BASE_URL}/3`)
// })
// .then(data=>{
//   console.log(data)
// })


// async await
//async function always return a promise
//if inside this function we don't return promise just return a value
// then the value will wrap with promise by default

// async function getData() {
//   return 'tapu'
// }

// const dataPromise = getData()
// console.log(dataPromise)
// dataPromise.then((data) => console.log('data', data))

// async and await combo is used to handle promises
// await is only use in inside of async function 

// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('promise resolve')
//   }, 10000)
// })

//before came async , await
// this getData() doesn't wait to promise relosve. it will print javascirpt dosen't wait first then print promise value
// function getData() {
//   val =p.then(data => console.log('data', data))
// console.log(val)
// console.log('javscript doesn"t wait to promise reloved')
// }

// const promiseVal = getData()
// promiseVal.then(data => console.log('data', data))

// after came async , await 
//  here async function have to for promise reslove then print javascript wait for promise resolve

// async function getData() {
//   const val = await p
//   console.log(val)
//   console.log('javascript have to be wait for promise resolve')
//   return val
// }
// getData()
// console.log('value ta ki', getData())


// how fetch work() 

// fetch function given by browser
// fetch function returns response object. and this response object is a readable stream.and you need to convert it with json(). and .json() again a promise. and when promise resolve it gives you a josnValue

// what will fetch return

// async function getData() {
//   const data = await fetch('url')// here fetch returns a promise so we have to use await before fetch

//   const jsonValue = await data.json() // which is another promise so we have to use await here also
//   console.log.log(jsonValue)

// }

//if you want to error hendeling with your async function then you have to use try catch block

// antoher older way to catch the handle error because getData() returns a promise
// getData().catch(err=>console.log(err))

// Promise.all([p1,p2,p3]) takes an array of promises and  after maximum time return the  promises value in an array [val1,val2,val3]. and it wait for all of them to finish 

// note : if any one of promise get rejected the promise.all behave differnetly => promise.all get rejected and thorw an error . it will not wait to other promises is get resolve or not.

// note : javascript can't not cancel other promises which is already made so that's why promise.allSetteled() api comes here 

// Promise.allSetteled([p1,p2.p3]) => it wait for all promises to reslove or reject so the output will be [val1,err3,val3]
// and the each promise value in an object 
// so it returns the array of object 


// Promise.race([p1,p2,p3]) api return which promises is to resolve or reject first note: it's not an arry it gives single value of which is the first settled promise.if pormise rejected first then it's give the error value 

// Promise.any([p1,p2,p3])
// it will only wait for first relove promise . that means wait for first success. it will ignore rejected promise
// note : every promises are rejected the will get aggregated Error . how we print aggregated Error  => in the .catch(err=>console.log(err.errors))
// because here err is an array of objects
// get an Aggregated Error [err1,err3,err3]
// so you can call it success seeking Api 


// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve('P1 Success'), 3000)
//   setTimeout(() => reject('P1 rejected'), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('P2 rejected'), 3000)
//   // setTimeout(()=>resolve('P2 Success'),1000)
// })

// const p3 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve('P3 Success'), 2000)
//   setTimeout(() => reject('P3 rejected'), 2000)
// })

// Promise.all([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))


// Promise.allSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))

// Promise.race([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))

// Promise.any([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch(err => console.log(err.errors))


//      settled => means you got the result

// resolve        reject
// success        failure (aggregation : reason)
// fulfilled      rejected 

//async 

// you can declare any function in javascirpt as async
// async function always return promise
// in async function, you write code that looks synchronous
//  but it doesn't block javascript

// await 

// Inside an async function, we can use await
// await pauses excution
// Can await any promise(eg other async functions!)
// await waits for promise to reslove and evaluates to its resolved value
// It then resumes execution
// Think of the await keyword like a pause button

const BASE_URL = "https://pokeapi.co/api/v2/berry";


// fetch(`${BASE_URL}/1`)
// .then(data=>{
//   console.log(data)
//   return fetch(`${BASE_URL}/2`)
// })
// .then(data=>{
//   console.log(data)
//   return fetch(`${BASE_URL}/3`)
// })
// .then(data=>{
//   console.log(data)
// })

// see belllw the benifit of uses async and await keyword
// async function getPokemonData() {
//   try {
//     const result = await fetch(`${BASE_URL}/1`)
//     console.log('result', result)
//     const result2 = await fetch(`${BASE_UR}/2`)
//     console.log('result2', result2)
//     const result3 = await fetch(`${BASE_URL}/3`)
//     console.log('result3', result3)
//   } catch (e) {
//     console.log('what error', e)
//   }
// }


// getPokemonData()
// try {
//   hellodude()
// } catch (e) {
//   console.log('error ta ki', e)
// }

// comparing .then/.catch and async/await
// Under the hood, they do the same thing
// async await are the modern improvement
// code can be written more naturally
// there are a few cases where it's easy to deal with promises directly

// bellow code doesn't maitain order like if we need to maintain order one-after-another
//then all fetch request need to inside one async function 

// const results = []

// async function getPokemon1() {
//   const result = await fetch(`${BASE_URL}/1`)
//   results.push(result)
//   console.log('Request 1 Finished')
// }

// async function getPokemon2() {
//   const result = await fetch(`${BASE_URL}/2`)
//   results.push(result)
//   console.log('Request 2 Finished')
// }
// async function getPokemon3() {
//   const result = await fetch(`${BASE_URL}/3`)
//   results.push(result)
//   console.log('Request 3 Finished')
// }

// getPokemon1()
// getPokemon2()
// getPokemon3()

// console.log('All Request Are Finished')

// Promise.all takes an array of promises and when it reslove it gives a new promise
// if every promises in array are resolve the promise will be reslove and resjected if any one one promise in arrary are rejected 

// const lotsOfPromises =[
//   fetch(`${BASE_URL}/1`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`)
// ]
// const lotsOfPromises = [
//   fetch(`${BASE_URL}/1`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`http://www.nope.nope`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`)
// ]
// Promise.all(lotsOfPromises)
// .then(data=>{
//   console.log('all promise are resolve here, now you find a new promise')
//   console.log(data)
// })
// .catch(err=>{
//   console.log('one promise is rejected')
//   console.log(err)
// })

// async function handleAllPromise(){
// try{
//   const data = await Promise.all(lotsOfPromises)
//   console.log('promise.all() is resolved')
//   console.log(data)
//   }catch(err){
//     console.log('one promise is rejected')
//     console.log(err)
//   }
// }

// handleAllPromise()

// Promise.race()

//Promise.race accepts an array of promises and return a new Promise
// this new promise will resolve or reject as soon as one promise in
// in the array resolves or rejects
// it doesn't maintain order


// Promise.allSettled()

//Promise.allSettled accepts an array of promises and return a new promise
// the promise resolve after all of the given promises have   
// either fulfilled or rejected, with an array of object that
// each descibes the outcome of each promise

// async function allSetteled() {
//   const GITHUB_BASE_URL = 'https://api.github.com';
//   let eliep = fetch(`${GITHUB_BASE_URL}/users/elie`)
//   let joelp = fetch(`${GITHUB_BASE_URL}/users/joelburton`)
//   let badurl = fetch(`http://definitelynotarealsite.com`)
//   let colt = fetch(`${GITHUB_BASE_URL}/users/colt`)
//   let anotherbadurl = fetch(`http://definitelynotarealsite.com`)

//   const result = await Promise.allSettled([
//     eliep,
//     joelp,
//     badurl,
//     colt,
//     anotherbadurl
//   ])
//   console.log('result', result)

//   const fulfilled = result.filter(elem => elem.status === 'fulfilled')
//   const rejected = result.filter(elem => elem.status === 'rejected')

//   console.log('fulfilled', fulfilled)
//   console.log('rejected', rejected)
// }

// allSetteled()


// How do you create your own promises???????
// you can you Promise with new keyword to make your own promises
//Promise accepts a single function(call it fn) as an argument,fn accepts two function as arguments, resolve and reject        pass resolve a value for the promise to resolve to that value   pass reject a value for the promise to reject to that value

// function wait(msec,msg) {
//   let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(`${msg}`)
//     }, msec)
//   })

//   return p;
// }
// here I am using .then to get data 
// wait(6000).then(data => console.log('data ta ki,', data))

// we can use also async , awit to get data 
// async function demo() {
//   console.log('Hi')
//   const result = await wait(4000)
//   console.log('I am first , waiting time 4000')
//   const result1 = await wait(2000)
//   console.log('I am second , waiting time 2000')
//   const result2 = await wait(6000)
//   console.log('I am third , waiting time 6000')
//   console.log(result)
//   console.log('there')
// }
// demo()
// async function demo() {

//   const result = wait(4000, '4000 second')
//   const result1 = wait(7000, '2000 second')
//   const result2 = wait(6000, '6000 second')
//   const r = await Promise.race([result, result1, result2])
//   console.log('r er value ki ', r)

// }
// demo()


// final own create promise
// function randomResolveReject() {
//   return new Promise(function (resolve, reject) {
//     const randomNum = Math.random()
//     console.log('random number', randomNum)
//     setTimeout(() => {
//       if (randomNum < 0.5) {
//         resolve('yo yo honey')
//       } else {
//         reject('heart broken!!!')
//       }
//     }, 3000);
//   })
// }
// randomResolveReject()
//   .then(data => {
//     console.log('1st promise', data)
//     return randomResolveReject()
//   })
//   .then(data => {
//     console.log('2nd Promise', data)
//     return randomResolveReject()
//   })
//   .then(data => {
//     console.log('3rd promise resolve')
//   })
//   .catch(err => {
//     console.log(err)
//   })