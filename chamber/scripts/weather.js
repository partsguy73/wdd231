const apiKey = 'YOUR_API_KEY';
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
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

function displayForecast(data) {
    const forecastElement = document.getElementById('forecast');
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
