const apiKey = '40658d590d1d1d7996c8753778fbe50c';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.11412168326838&lon=-113.53615207326636&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=37.11412168326838&lon=-113.53615207326636&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

function displayWeather(data) {
    const weatherElement = document.getElementById('weather-container');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    weatherElement.innerHTML = `
        <img src="${iconUrl}" alt="Weather icon">
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>High: ${data.main.temp_max}°F</p>
        <p>Low: ${data.main.temp_min}°F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
    `;
}

function displayForecast(data) {
    const forecastElement = document.getElementById('forecast-container');
    const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    forecastList.forEach(item => {
        forecastElement.innerHTML += `
            <div>
                <p>Date: ${item.dt_txt}</p>
                <p>Temp: ${item.main.temp}°F</p>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getForecast();
});
