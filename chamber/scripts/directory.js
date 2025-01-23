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

fetchMembers();
