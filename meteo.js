const searchBtn = document.getElementById('search-btn');
const geolocateBtn = document.getElementById('geolocate-btn');
const city = document.getElementById("city");
const weatherInfo = document.getElementById('weather-info');
const themeToggle = document.getElementById('theme-toggle');
const apikey ='9ed14db0efa2b31608cd7a7b57b1e439';

async function searchbtn (){
    const city=document.getElementById("city").value ;
    if(!city){
        alert("Veuillez entrer une ville");
        return;
    }
    const url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric&lang=fr";
    try{
        const Response=await fetch(url);
        if(!Response.ok){
            throw new Error('Ville non trouvée'+apikey);
        }
        const data=await Response.json();
        displayWeather(data);
    }catch(error){
        alert(error.message);
    }
    
}
function displayWeather(data){
    const weatherInfo=document.getElementById('weather-info');
    weatherInfo.innerHTML= 
    "<h2>Météo à" + data.name +"," +data.sys.country+"</h2><p>Température:" + data.main.temp+"°C</p><p>Conditions:"  + data.weather[0].description +"</p><p>Humidité: " + data.main.humidity + "<p>Vent:" + data.wind.speed+"m/s</p></p>";
}

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
});
