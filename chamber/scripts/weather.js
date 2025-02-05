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
    weatherElement.innerHTML = `
        <h2>Current Weather</h2>
        <img src="${iconUrl}" alt="Weather icon">
        <p>${data.main.temp}°F</p>
        <p>${data.weather[0].description}</p>
        <p>High: ${data.main.temp_max}°F</p>
        <p>Low: ${data.main.temp_min}°F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${data.visibility} am</p>
        <p>Sunset: ${data.clouds.all} pm</p>
    `;
}

function displayForecast(data) {
    const forecastElement = document.getElementById('forecast-container');
    forecastElement.innerHTML = '<h2>5-Day Forecast</h2>';
    data.list.forEach(item => {
        forecastElement.innerHTML += `
            <div>
                <p>Date: ${item.dt_txt}</p>
                <p>Temperature: ${item.main.temp}°F</p>
                <p>Weather: ${item.weather[0].description}</p>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getForecast();
});
