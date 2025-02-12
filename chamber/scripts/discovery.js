document.addEventListener('DOMContentLoaded', () => {
    fetch('data/discover.json')
        .then(response => response.json())
        .then(data => {
            const placesContainer = document.getElementById('places-container');
            data.places.forEach(place => {
                const placeCard = document.createElement('div');
                placeCard.classList.add('place-card');
                
                placeCard.innerHTML = `
                    <img src="${place.image}" alt="${place.name}">
                    <h2>${place.name}</h2>
                    <address>${place.address}</address>
                    <p>${place.description}</p>
                    <button class="learn-more-btn">Learn More</button>
                `;
                
                placesContainer.appendChild(placeCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
