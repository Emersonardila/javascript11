document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const characterContainer = document.getElementById('character-cards');

            characters.forEach(character => {
                const card = document.createElement('div');
                card.classList.add('card');

                const imageUrl = character.image;
                const name = character.name;
                const species = character.species;
                const status = character.status;

                card.innerHTML = `
                    <img src="${imageUrl}" alt="${name}">
                    <h2>${name}</h2>
                    <p><strong>Species:</strong> ${species}</p>
                    <p><strong>Status:</strong> ${status}</p>
                `;

                characterContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});
