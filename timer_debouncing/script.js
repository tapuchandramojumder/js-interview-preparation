// console.log('hello timer')

// setTimeout => Executes a function after waiting a specified number of milliseconds

// function showNotification(message, duration) {
//   const notification = document.createElement("DIV")
//   notification.innerText = message;
//   notification.className = 'notification';
//   document.body.appendChild(notification)

//   setTimeout(function () {
//     notification.remove()
//   }, duration)
// }

// showNotification('signed you in !', 5000)
// showNotification('sign out !', 3000)
// showNotification('signed you in !', 2000)

// setInterval => Executes a function repeatedly, with a fixed time delay between each call

// function startCountdown(duration) {
//   let secondsRemaining = duration;
//   setInterval(function () {
//     console.log(secondsRemaining)
//     secondsRemaining -= 1
//   }, 1000)

// }

// function startCountdown(duration) {
//   let secondsRemaining = duration;
//   let myH1 = document.getElementById('timer')
//   let intervalId = setInterval(function () {
//     myH1.innerText = secondsRemaining
//     secondsRemaining -= 1;
//     if (secondsRemaining === 0) {
//       myH1.innerText = 'times up !'
//       clearInterval(intervalId)
//     }
//   }, 2000)
// }
// startCountdown(10)

// function startCountdown(duration) {
//   let secondsRemaining = duration;
//   let myH1 = document.getElementById('timer');
//   let intervalId = setInterval(function () {
//     myH1.innerText = secondsRemaining;
//     secondsRemaining -= 1;
//     if (secondsRemaining === 0) {
//       myH1.innerText = 'times up !';
//       clearInterval(intervalId);
//     }
//   }, 1000); // Changed interval duration to 1000 milliseconds (1 second)
// }

// startCountdown(10);

// clearInterval = > Clears an interval set with setInterval, stopping the function from executing repeatedly;

// clearTimeout => Clears a timeout set with setTimeout, preventing the function from executing;

// const cancelButton = document.querySelector('#cancel-button');
//   const timeoutId =setTimeout(()=>{
//     window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'  
//   },5000)

// cancelButton.addEventListener('click', () => {
//   clearTimeout(timeoutId)
//   console.log("Aborted the Redirection")
// })

//Debouncing is a useful technique to optimize web applications by reducing unnecessary or repeated function calls that might affect the performance or user experience. We can implement debouncing in JavaScript by using a wrapper function that returns a new function that delays the execution of the original function until a certain amount of time has passed since the last call.

// three simple real life exaples of debouncing : 1. submit button 2. search input 3. scroll event 4.Elevator;

// function queryApi(){
//     console.log('making an api request')	
// }
// const searchInput = document.querySelector('#search')

// searchInput.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         queryApi()
//     }else{
//         console.log('searching...')
//     }
    
// })


// const debounce = (mainFn, delay) => {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             mainFn(...args)
//         },delay)
//     }
// }
// function searchData(){
//     console.log('searching...')
// }
// const debouncedSearchData = debounce(searchData, 1000)
// debouncedSearchData();


// let button = document.getElementById("debounce");
//         const debounce = (func, delay) => {
//             let debounceTimer
//             return function () {
//                 const context = this
//                 const args = arguments
//                 clearTimeout(debounceTimer)
//                 debounceTimer
//                     = setTimeout(() => func.apply(context, args), delay)
//             }
//         }
//         button.addEventListener('click', debounce(function () {
//             alert("Hello\nNo matter how many times you" +
//                 "click the debounce button, I get " +
//                 "executed once every 3 seconds!!")
//         }, 3000)); 


// function queryApi(name){
//     console.log(`making an api request ${name}`)
// }
// function debounce(callback, delay){
//     let timer;
//     return function (...args){
//         if(timer){
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             callback(...args)
//         },delay)
//     }
// }
// const debouncedQueryApi = debounce(queryApi, 1000)

// let searchInput = document.querySelector('#search')
// searchInput.addEventListener('input', (e) => {
//         debouncedQueryApi(e.target.value)
// })

//Js Throtolling
// Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

// For example, if you have a function that fetches some data from an API every time the user scrolls the page, you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls. This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.

// function getRandomColor(){
//     const palette = [
//         "#ff0000", // Red
//         "#00ff00", // Green
//         "#0000ff", // Blue
//         "#ffff00", // Yellow
//         "#ff00ff", // Magenta
//         "#00ffff", // Cyan
//         "#800080", // Purple
//         "#008000", // Dark Green
//         "#000080", // Navy
//         "#ffa500", // Orange
//         "#a52a2a", // Brown
//         "#008080", // Teal
//         "#808080", // Gray
//         "#800000", // Maroon
//         "#008080", // Olive
//         "#c0c0c0", // Silver
//         "#ffffff", // White
//         "#000000"  // Black
//     ];
//     const randomIndex = Math.floor(Math.random() *palette.length)
//     return palette[randomIndex]
// }

// const content = document.getElementById('content');

// function loadMoreItems(){
//     // This line calculates the distance from the bottom of the page to the current scroll position.
//     const scrollDistanceToBottom = document.documentElement.scrollHeight - window.scrollY -window.innerHeight

//     // This line checks if the distance from the bottom of the page to the current scroll position is less than 200 pixels.
//     if(scrollDistanceToBottom < 200){
//         console.log("Loading data from an API!!!")
//         for(let i = 0; i < 10 ; i++){
//             const item = document.createElement("div");
//             item.classList.add('item');
//             item.textContent = "item" + (content.children.length + 1)
//             item.style.backgroundColor = getRandomColor()
//             content.appendChild(item)
//         }
//     }
// }

// let isThrottled = false;
// window.addEventListener('scroll', ()=>{
//     if(!isThrottled){
//         loadMoreItems()
//         isThrottled = true;
//         setTimeout(() => {
//             isThrottled = false;
//         }, 300)
//     }
// })

// loadMoreItems()



// function expensive(){
//     console.log('expensive')
// }

// const throttledExpensive = throttle(expensive, 1000);

// function throttle(func,delay){
//     let flag;
//     return function(){
//         let context = this;
//         let args = arguments;
//         if(flag){
//             func.apply(context,args);
//             flag = false;
//             setTimeout(()=>{
//                 flag = true;
//             },delay)
//         }
//     }
// }
// window.addEventListener('scroll', throttledExpensive)
