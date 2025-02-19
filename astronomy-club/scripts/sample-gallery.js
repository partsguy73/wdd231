document.addEventListener('DOMContentLoaded', () => {
    fetch('data/gallery.json')
        .then(response => response.json())
        .then(data => {
            const galleryContainer = document.querySelector('#sample-gallery-container');
           
            const images = data.images.toSorted(() => Math.random() - 0.5).slice(0, 2);
 
 
            images.forEach(image => {
                const imageCard = document.createElement('div');
                imageCard.classList.add('image-card');
                imageCard.innerHTML = `
                    <img src="${image.image}" alt="${image.name}" loading="lazy">
                    <h2>${image.name}</h2>
                    <p>${image.description}</p>
                `;
                galleryContainer.appendChild(imageCard);
            });
        })
        .catch(error => console.error('Error fetching gallery data:', error));
});
