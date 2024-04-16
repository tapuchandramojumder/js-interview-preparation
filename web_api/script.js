// console.log('hello web api')

// localStorage => allow web applications to store key-value pairs in a web browser persistently accross session

// localStroage.setItem('mykey','myGivenvalue')

// const retrievedValue = localStroage.getItem('mykey')

// localStroage.removeItem('mykey')
// localStroage.clear();

// const nums = [1,2,3,4,5]

// const setitem=localStroage.setItem('numbers', JSON.stringify(nums));

// const getitem= logcalStroage.getItem(JSON.parse(nums));

// console.log(setitem)

// const button = document.getElementById('toggleBtn')

// const toggleTheme=()=>{
//     if(document.body.classList.contains('dark-mode')){
//         localStorage.setItem('theme', 'light');
//         button.textContent = 'Switch to Dark Mode';
//         document.body.classList.remove('dark-mode');
//     }else{
//         localStorage.setItem('theme', 'dark');
//         document.body.classList.add('dark-mode');
//         button.textContent = 'Switch to Light Mode';
//     }

// }
// const applySavedTheme =()=>{
//     const savedTheme = localStorage.getItem('theme');
//     if(savedTheme === 'dark'){
//         document.body.classList.add('dark-mode');
//         button.textContent = 'Switch to Light Mode';
//     }else{
//         localStorage.setItem('theme', 'light');
//         document.body.classList.remove('dark-mode');
//         button.textContent = 'Switch to Dark Mode';
//     }
// }


// button.addEventListener('click',toggleTheme);
// applySavedTheme();
// window.addEventListener("storage",(e)=>{
//    if(e.key === "theme"){
//         toggleTheme();
//     }
// });


// class NoteApp{
//     constructor(containerSelector,inputSelector,saveButtonSelector){
//             this.notes = JSON.parse(localStorage.getItem("notes")) ?? []
//             this.textArea = document.querySelector(inputSelector);
//             this.container = document.querySelector(containerSelector);
//             this.saveButton = document.querySelector(saveButtonSelector);

//             this.saveButton.addEventListener('click', () =>this.saveNote())
//             this.displayLoadNotes()
//         }

//         displayLoadNotes(){
//             this.notes.forEach(note =>this.createNoteElement(note));
//         }
//         createNoteElement(note){
//             const noteElement = document.createElement('li')
//             noteElement.textContent = note;
//             this.container.appendChild(noteElement);
//         }

//         saveNote(){
//             const noteContent = this.textArea.value.trim()
//             if(noteContent){
//                 this.notes.push(noteContent)
//                 localStorage.setItem("notes", JSON.stringify(this.notes))
//                 this.createNoteElement(noteContent)
//                 this.textArea.value = ''
//             }
//         }
// }

// new NoteApp("#noteContainer","#noteInput","#saveBtn")



//sessionStroage => allow web application to store key-value pair in a web browser for a single session

// function warnUserOnce(){
//     if(!sessionStorage.getItem('shownWarining')){
//         console.log("Warning! We are shutting down are entire app in 2 weeks")
//     }
//     sessionStorage.setItem('shownWarining', true)
// }

// warnUserOnce();

// const serachInput = document.getElementById('searchField');
// serachInput.addEventListener('input', (e) => {
//   sessionStorage.setItem('searchQuery', e.target.value);
// });

// const populatedSearch = () => {
//  let previousSearch = sessionStorage.getItem('searchQuery');
//  serachInput.value = previousSearch;

// }
// populatedSearch()

 
// const inputForm = document.getElementById('checkoutForm');

// inputForm.addEventListener('input', (e) => {

//     const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}

//     const {name,value} = e.target;
//     console.log('name',name , value)
//     formData[name] = value;

//     sessionStorage.setItem('formData',JSON.stringify(formData));
    
// })

// const popualatedData = ()=>{
//     const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}
//         console.log('formData',formData)
//         for(let key in formData){
//             inputForm.elements[key].value = formData[key];
//         }
// }

// popualatedData()


//indexedDB => allow web applications to store structured data, including files/blobs, in the user's browser.