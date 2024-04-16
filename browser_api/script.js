// console.log('browserApi')

// Geolocation API => allow users to share their location with web application


 if('geolocation' in navigator){
    nevigator.geolocation.getCurrentPosition(position=>{
        const {latitude, longitude} = position.coords;
        console.log(`latitude : ${latitude}, longitude: ${longitude}`)
    })
 } 