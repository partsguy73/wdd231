function toggleModal(modalID){
    const eventElement = document.querySelector(`#${modalID}-modal`);
    eventElement.classList.toggle('show-modal');
}

function populateEvents(parent, event) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
    const eventId = event.name.replace(/\s/g, '-').toLowerCase();
    eventElement.innerHTML = `
                    <h2>${event.name}</h2>
                    <p class="event-date">Date: ${event.date}</p>
                    <p class="event-time">Time: ${event.time}</p>
                    <p class="event-location">Location: ${event.location}</p>
                    <p class="event-detail">${event.agenda ? 'Agenda' : 'Highlight'}: ${event.agenda ? event.agenda : event.highlight}</p>
                    <button onclick="javascript:toggleModal('${eventId}')">Get More Information</button>
                    <div class="event-modal" id="${eventId}-modal">
                        <div class="modal-content">
                            <span class="close-btn" onclick="toggleModal('${eventId}')">&times;</span>
                            <h2>${event.name}</h2>
                            <p>${event.agenda ? event.agenda : event.highlight}</p>
                            <p class="event-date">Date: ${event.date}</p>
                            <p class="event-time">Time: ${event.time}</p>
                            <p class="event-location">Location: ${event.location}</p>
                            <p>Contact us to join and to get more information for local events!</p>
                            <div class="modal-footer">
                                <div class="modal-button">
                                    <a href="contact-us.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    parent.appendChild(eventElement);
}
 
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/events.json')
        .then(response => response.json())
        .then(data => {
            const monthlyMeetingEvents = document.querySelector('.meeting-container');
            const starGazingEvents = document.querySelector('.stargazing-container');
 
            data.monthly_meetings.forEach(event => populateEvents(monthlyMeetingEvents, event));
            data.stargazing_events.forEach(event => populateEvents(starGazingEvents, event));
 
        })
        .catch(error => console.error('Error fetching events:', error));
});

window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.show-modal');
    console.log(modals);
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show-modal');
        }
    });
});