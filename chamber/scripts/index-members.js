async function fetchMembers() {
    const response = await fetch('./data/members.json');
    const members = await response.json();
    const filteredMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    const selectedMembers = getRandomMembers(filteredMembers, 2);
    displayIndexMembers(selectedMembers);
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayIndexMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-card';
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.iconFileName}" alt="${member.name}" />
            <p>${member.email}</p>
            <p>Phone: ${member.phoneNumber}</p>
            <p>Website: <a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a></p>
        `;
        container.appendChild(memberDiv);
    });
}

fetchMembers();