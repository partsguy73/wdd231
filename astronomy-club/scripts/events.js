document.addEventListener('DOMContentLoaded', () => {
    fetch('data/events.json')
        .then(response => response.json())
        .then(data => {
            const eventsContainer = document.querySelector('.events-container');
            
            data.monthly_meetings.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Time: ${event.time}</p>
                    <p>Location: ${event.location}</p>
                    <p>Agenda: ${event.agenda}</p>
                `;
                eventsContainer.appendChild(eventElement);
            });

            data.stargazing_events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Time: ${event.time}</p>
                    <p>Location: ${event.location}</p>
                    <p>Highlight: ${event.highlight}</p>
                `;
                eventsContainer.appendChild(eventElement);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
});
