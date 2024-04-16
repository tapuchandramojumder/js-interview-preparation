// console.log('hello mama I am from fetch API')

//fetch => is modern way to make request, replacing the older XMLHttpRequest.

const POKE_URL = 'https://pokeapi.co/api/v2/pokemonss';

// async function getPokemon(POKE_URL){
//     const response = await fetch(POKE_URL);
//     const data = await response.json();
//     console.log(data);
// }

// fetch(POKE_URL)
// .then(res=>res.json())
// .then(data=>console.log(data))

// How do you handle errors with fetch?

// fetch(POKE_URL)
// .then(res=>{
//     if(!res.ok){
//     throw Error('Network response was not ok');
//   }
//   return res.json();
// })
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


// async function catchError(POKE_URL){
   
//    try{
//     const response = await fetch(POKE_URL);
//     if(!response.ok){
//         throw Error('Network response was not ok');
//     }
    
//     const data = await response.json();
//     console.log(data)
//    }
//   catch(err){
//     console.log(err)
//   }
   
// }

// get request with custom headers

//  async function showHeader(POKE_URL){
//     const header = new Headers({'conetent-type':'application/json'});
//     try{
//         const res = await fetch(POKE_URL,{headers: header});
//         if(!res.ok){
//             throw Error('Network response was not ok');
//         }
//         const data = await res.json()
//         console.log('data',data)
//     }catch(error){
//         console.log(error.message)
//     }
//  }


// post request with custom headers 

// async function postData(){
//     const payload = {
//         handle : 'chickenco',
//         name : 'checken and compnay',
//         description:'We sell chickens and chicken accessories',
//         followers:100,
//         logo: 'chicken.png'
//     }
//     const response = await fetch('http://gooogle.com/companies',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//     })
    
//     const data = await response.json()
//     console.log(data)
// }


// uploading a file with fetch

// async function uploadingFile(file){
//     const formData = new FormData();
//     formData.append('file', file);
//     const response = await fetch('http://gooogle.com/companies',{
//         method: 'POST',
//         headers: {
//             'Content-Type':'multipart/form-data'
//         },
//         body: formData
//     })
//     const data = await response.json()
//     console.log(data)
// }

// const file = document.querySelector('input[type="file"]')
// file.addEventListener('change', async (event) => {
//     const file = event.target.files[0]
//     await uploadingFile(file)
// })