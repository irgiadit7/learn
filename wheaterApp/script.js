const APIKEY = "037f5d4d6e33dba4fb9753a590bebf1f";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById('city');
const searchBtn = document.getElementById('btn');

async function checkWeather(city = 'Tunisia') {
    try {
        const res = await fetch(URL + city + `&appid=${APIKEY}`);
        
        if (!res.ok) {
            throw new Error('City not found');
        }
        
        let data = await res.json();
 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('City not found! Please try again.');
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== '') {
        checkWeather(searchBox.value);
    }
});

searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && searchBox.value.trim() !== '') {
        checkWeather(searchBox.value);
    }
});

checkWeather();