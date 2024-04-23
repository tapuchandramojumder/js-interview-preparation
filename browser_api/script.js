// console.log('browserApi')
// Geolocation API => allow users to share their location with web application


//  if('geolocation' in navigator){
//     nevigator.geolocation.getCurrentPosition(position=>{
//         const {latitude, longitude} = position.coords;
//         console.log(`latitude : ${latitude}, longitude: ${longitude}`)
//     })
//  } 


// const locationBtn = document.getElementById('locationBtn');
// const displayData = document.getElementById('locationDisplay');


// locationBtn.addEventListener('click', () => {
//     if(navigator.geolocation) {
//         console.log('YAY! Geolocation is supported!')
//      navigator.geolocation.watchPosition(showFn, showErr);
     
//     }
// }) 

// const showFn = (position)=>{
//     const {latitude, longitude} = position.coords;
//     displayData.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
// }

// const showErr = (err)=>{
//     displayData.textContent = `Error: ${err.message}`;
// }

// navigator.mediaDevices.getUserMedia({video:true})
// navigator.mediaDevices.getUserMedia({vide:true})


// Media api 

// document.querySelector('#startBtn').addEventListener('click',async()=>{
//   try{
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio:true})
//     const video = document.querySelector('#videoBox')
//     videoBox.srcObject = stream;

   
        
//   }catch(err){
//     const errText = document.querySelector('#errText');
//     errText.textContent = `Error: ${err.message}`;
// }
// })



// // Intersection Observer API => Provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport .

// const observer = new IntersectionObserver(entries=>{
//     // console.log('what is entires',entries)
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//         console.log('Element is visible in the viewport',entry.isIntersecting);
//         }else{
//             console.log("Element is not visible!",entry.isIntersecting)
//         }
//     })
// },{threshold: 0.5}); // Set the threshold to 0.5 to 1 to observe when the element is at least 50% visible in the viewport
// // we can use threshold as an array (eg  {threshold:[0.2, 0.5,0.8]}) to observe at multiple visibility levels
// const targetElement = document.getElementById('target-element');
// observer.observe(targetElement);



// let showTimeArr = []
// let startTime;

// const observer= new IntersectionObserver(entries => {
//     entries.forEach(entry=>{
//         const {isIntersecting} = entry;
//         const {id}=entry.target
//         if(isIntersecting){
//             console.log('what is entry',entry)
//             console.log('id name= ', id)
//             console.log(`${id} is visible in the viewport`)
//         }else{
            
//             console.log(`${id} is not visible in the viewport`)
//         }
//     })
// },{threshold:0.5})


// const allElem= document.querySelectorAll('.add');
// allElem.forEach(elem => {
//   observer.observe(elem);
// });


// Lazy Loading implementing
 // images sources = 'https://source.unsplash.com/random'
 
//  const allImages = document.querySelectorAll('img.lazy');

//  const observer = new IntersectionObserver((entries) => {
//      entries.forEach((entry) => {
//          if (entry.isIntersecting) {
//             console.log('loading a new Images')
//              entry.target.src =  entry.target.dataset.src;
//              observer.unobserve(entry.target);
//          }
//      });
//  })

//  allImages.forEach((img) =>observer.observe(img))



