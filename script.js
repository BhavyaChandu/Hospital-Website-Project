document.addEventListener('DOMContentLoaded', function () {
    const profiles = [
        {
            name: 'Dr. Johnson',
            image: 'd1.jpg',
            description: 'Cardiac Surgery'
        },
        {
            name: 'Dr. Smith',
            image: 'd2.jpg',
            description: 'Paediatrics, Neonatology'
        },
        {
            name: 'Dr. Clara ',
            image: 'd3.jpg',
            description: 'Lab Medicine'
        },
        {
            name: 'Dr. Williams',
            image: 'd4.jpg',
            description: 'Cardiology'
        },
        {
            name: 'Dr. Rosy',
            image: 'd5.jpg',
            description: 'General Surgery'
        },
        {
            name: 'Dr. Narayan',
            image: 'd6.jpg',
            description: 'Dentist'
        },
        {
            name: 'Dr. Swetha',
            image: 'd7.jpg',
            description: 'Gyncologist'
        },
        {
            name: 'Dr. Harini krishnan',
            image: 'd8.jpg',
            description: 'Urology'
        },
        {
            name: 'Dr. Kiran',
            image: 'd9.jpg',
            description: 'Neurology'
        }
    ];

    const profileGrid = document.getElementById('profileGrid');

    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        profileCard.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" class="profile-image">
            <h3 class="profile-name">${profile.name}</h3>
            <p class="profile-description">${profile.description}</p>
        `;

        profileGrid.appendChild(profileCard);
    });
});
