console.log('Performance API Example');

// Performance API => allows measurement of the performance of web pages and web apps.

// const performanceEntries = performance.getEntriesByType('navigation');
// performanceEntries.forEach(entry=>{
//     console.log(`Name : ${entry.name} , Duration: ${entry.duration} ms`)
// }) 

// // make a big array 


// function bubbleSort(arr){
//    for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-i-1; j++){
//         if(arr[j] >arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
//    }
//    return arr
// }
// const bigArray = Array.from({length:1000},()=>{
//     return Math.floor(Math.random()*1000)
// })
// console.log(bigArray);

// const arrayForBubbleSort = [...bigArray];
// const arrayForNativeSort = [...bigArray];

// performance.mark("nativeSortStart")
// arrayForBubbleSort.sort((a,b)=>a-b)
// performance.mark("nativeSortEnd")

// performance.measure("nativeSortDifference","nativeSortStart","nativeSortEnd")

// performance.mark("bubbleSortStart")
// bubbleSort(arrayForBubbleSort)
// performance.mark("bubbleSortEnd")

// performance.measure("bubbleSortDifference","bubbleSortStart","bubbleSortEnd")


// const nativeDuration = performance.getEntriesByName("nativeSortDifference")[0].duration;

// const bubbleSortDuration = performance.getEntriesByName("bubbleSortDifference")[0].duration;


// console.log(`Native sort took : ${nativeDuration.toFixed(2)} ms`)
// console.log(`Bubble sort took : ${bubbleSortDuration.toFixed(2)} ms`)



// window.addEventListener('load',()=>{
//     performance.getEntriesByType("resource").forEach(entry=>{
//         console.log(`Name : ${entry.name} , initiatortype: ${entry.initiatorType
//         } , Duration: ${entry.duration} ms`)
//     })
// })


// web audio api => Allows fot he processing and synthesizing of audio in a web applications.

// const audioContext = new AudioContext();
// const oscillator = audioContext.createOscillator();
// oscillator.type = 'sine';
// oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
// oscillator.connect(audioContext.destination);
// oscillator.start();
// oscillator.stop(audioContext.currentTime + 1);




// const slider = document.querySelector('#freqSlider');
// const label = document.querySelector('#freqLabel');
// const playBtn = document.querySelector('#playBtn');
// const stopBtn = document.querySelector('#stopBtn');

// const context = new AudioContext();
// let oscillator= null;

// playBtn.addEventListener('click',()=>{
//     oscillator = context.createOscillator();
//     oscillator.type = "sawtooth";
//     oscillator.frequency.value = slider.value;
//     oscillator.connect(context.destination);
//     oscillator.start();
// })

// slider.addEventListener('input',(e)=>{
//     const frequency = e.target.value;
//     label.textContent = `Frequency: ${frequency} Hz`;
//     if(oscillator){
//         oscillator.frequency.value = frequency;
        
//     }
// })

// stopBtn.addEventListener('click',()=>{
//     if(oscillator){
//         oscillator.stop();
//         oscillator = null;
//     }
// })