const apiUrl="https://api.openweathermap.org/data/2.5/weather?&appid=5e8b7f3406ffd9d571847b626ba3f339&q="
const search=document.querySelector('input')
const bt=document.querySelector('button')
const image=document.querySelector(".weather-icon")






async function  checkweather(city) {
    
    const response=await fetch(apiUrl + city);
    var data=await response.json();

    document.querySelector('.humidity').innerHTML=data.main.humidity + "%"
    document.querySelector('.wind').innerHTML=data.wind.speed + "km/h"
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C"
    document.querySelector('.city').innerHTML=data.name
    
    if(data.weather[0].main=="rain"){
        image.src="../weatherapp/images/rain.png"
        
    }else if(data.weather[0].main=="drizzle"){
        image.src="../weatherapp/images/drizzle.png"
    }else if(data.weather[0].main=="clouds"){
        image.src="../weatherapp/images/clouds.png"
    }else if(data.weather[0].main=="mist"){
        image.src="../weatherapp/images/mist.png"
    }else{
        console.log("invalid")
    }
  
    
    }

bt.addEventListener("click",(e)=>{
    e.preventDefault()
    checkweather(search.value)
})






