const adresseAPI = `https://hp-api.onrender.com/api/characters`

// Récupère et affiche les 12 premiers personnages
async function getAllCharacters() {
    try {
        const response = await fetch(adresseAPI);
        const characters = await response.json(); // Convertir la réponse en JSON
        const AllCharacters = characters.slice(0, 12); // Récupérer les 12 premiers personnages
        displayCharacters(AllCharacters);
    } catch (error) {
        console.error("Erreur lors de la récupération des personnages :", error);
    }
}

async function displayCharacters(characters) {

    const personnages = await fetch(adresseAPI)
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));
    let characterSection = document.querySelector('main section .characters');

    for (const perso of characters){
        const figure = document.createElement('figure');
                figure.classList.add('perso__left');
                const img = document.createElement('img');
                img.src = perso.image; // URL de l'image du personnage
                img.alt = perso.name;
                const figcaption = document.createElement('figcaption');
                figcaption.textContent = perso.name;
                figure.appendChild(img);
                figure.appendChild(figcaption);
                console.log(perso.name);
                characterSection.appendChild(figure)
            }
    }

// Fonction pour gérer le clic sur les maisons
function handleHouseClick() {
    const houses = document.querySelectorAll('.houses div'); // Sélectionner tous les divs des maisons

    houses.forEach(houseDiv => {
        houseDiv.addEventListener('click', function(event) {
            const houseName = event.currentTarget.id; // Utiliser event.currentTarget.id pour obtenir l'ID de la maison
            console.log('Maison sélectionnée:', houseName);

            // Filtrer les personnages selon la maison sélectionnée
            fetchHarryPotterCharacters(houseName); // Appeler la fonction de filtrage avec le nom de la maison
        });
    });
}

// Fonction pour récupérer et afficher les personnages par maison
async function fetchHarryPotterCharacters(house = '') {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const characters = await response.json();

        // Si une maison est sélectionnée, filtrer les personnages par maison
        const filteredCharacters = house 
            ? characters.filter(character => character.house === house)
            : characters;

        displayCharacters(filteredCharacters); // Appeler la fonction pour afficher les personnages
    } catch (error) {
        console.error('Erreur lors de la récupération des personnages:', error);
    }
}

//GetAllCharacters();
getAllCharacters();