const date = new Date();
const moonURL = `https://aa.usno.navy.mil/api/rstt/oneday?date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&coords=37.095169,-113.575974&tz=-7`;

async function getMoonData() {
    try {
        const response = await fetch(moonURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage
getMoonData().then(data => displayMoonData(data));

function displayMoonData(data) {
    const nightWeatherElement = document.getElementById('night-weather');
    if (nightWeatherElement) {
        var moonPhase = data.properties.data.curphase;
        nightWeatherElement.innerHTML = `
            <h3>Moon Phase</h3>
            <p>${moonPhase}${phaseCodes[moonPhase]}</p>
            <p>Moonrise: ${data.properties.data.moondata[2].time}</p>
            <p>Moonset: ${data.properties.data.moondata[1].time}</p>
        `;
    }
}

const phaseCodes = {
    "New": "&#127761;",
    "Waxing Crescent": "&#127762;",
    "First Quarter": "&#127763;",
    "Waxing Gibbous": "&#127764;",
    "Full Moon": "&#127765;",
    "Waning Gibbous": "&#127766;",
    "Last Quarter": "&#127767;",
    "Waning Crescent": "&#127768;",
};
