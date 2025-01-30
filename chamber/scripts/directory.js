async function fetchMembers() {
    const response = await fetch('./data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `
            <img src="${member.iconFileName}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phoneNumber}</p>
            <p>Website: <a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a></p>
        `;
        container.appendChild(memberDiv);
    });
}

function toggleLayout(layout) {
    const container = document.getElementById('members-container');
    const members = container.getElementsByClassName('member');
    if (layout === 'grid') {
        container.classList.add('grid-layout');
        container.classList.remove('list-layout');
        Array.from(members).forEach(member => {
            const img = member.querySelector('img');
            if (img) {
                img.style.display = 'block';
            }
        });
    } else {
        container.classList.add('list-layout');
        container.classList.remove('grid-layout');
        Array.from(members).forEach(member => {
            const img = member.querySelector('img');
            if (img) {
                img.style.display = 'none';
            }
        });
    }
}

document.getElementById('grid').addEventListener('click', () => toggleLayout('grid'));
document.getElementById('list').addEventListener('click', () => toggleLayout('list'));

fetchMembers();
