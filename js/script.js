const adresseAPI = `https://hp-api.onrender.com/api/characters`;
let allCharacters = []; // Variable globale pour stocker les personnages récupérés
try {
    const response = await fetch(adresseAPI);
    allCharacters = await response.json(); // Convertir la réponse en JSON et stocker dans la variable globale
    allCharacters = allCharacters.slice(0, 12); // Récupérer les 12 premiers personnages
} catch (error) {
    console.error("Erreur lors de la récupération des personnages :", error);
}
// Récupère et affiche les 12 premiers personnages
async function getAllCharacters() {
    try {
        const response = await fetch(adresseAPI);
        allCharacters = await response.json(); // Convertir la réponse en JSON et stocker dans la variable globale
        const initialCharacters = allCharacters.slice(0, 12); // Récupérer les 12 premiers personnages
        console.log("test" + initialCharacters);
        return initialCharacters;
    } catch (error) {
        console.error("Erreur lors de la récupération des personnages :", error);
    }
}

// Fonction pour afficher les personnages dans la section Characters
function displayCharacters(characters) {
    let characterSection = document.querySelector('main section .characters');
    characterSection.innerHTML = ''; // Vider la section avant d'ajouter les nouveaux personnages

    for (const perso of characters) {
        const figure = document.createElement('figure');
        figure.classList.add('perso__left');
        
        const img = document.createElement('img');
        img.src = perso.image; // URL de l'image du personnage
        img.alt = perso.name;
        figure.id = perso.id;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = perso.name;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        characterSection.appendChild(figure);
        ajoutLienDetails();
    }
}

// Fonction pour gérer le clic sur les maisons
function handleHouseClick() {
    const houses = document.querySelectorAll('.houses div'); // Sélectionner tous les divs des maisons

    houses.forEach(houseDiv => {
        houseDiv.addEventListener('click', function(event) {
            const houseName = event.currentTarget.id; // Utiliser event.currentTarget.id pour obtenir l'ID de la maison
            console.log('Maison sélectionnée:', houseName);

            // Filtrer les personnages selon la maison sélectionnée à partir des personnages présélectionnés
            const filteredCharacters = allCharacters.filter(character => character.house === houseName);
            fetchHarryPotterCharacters(houseName);
            //displayCharacters(filteredCharacters); // Appeler la fonction pour afficher les personnages filtrés
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
            ? allCharacters.filter(allCharacters => allCharacters.house === house)
            : allCharacters;

        displayCharacters(filteredCharacters); // Appeler la fonction pour afficher les personnages
    } catch (error) {
        console.error('Erreur lors de la récupération des personnages:', error);
    }
}

function ajoutLienDetails (){
    let personnages = document.querySelectorAll('.characters .perso__left')
    console.log(personnages);
    personnages.forEach(perso => {
        perso.addEventListener('click', function(event){
            window.location.href = "details.html?id=" + event.currentTarget.id;
        })
});
}
//GetAllCharacters();
//allCharacters = getAllCharacters();
displayCharacters(allCharacters);
handleHouseClick();
ajoutLienDetails();
