let nom = "Harry Potter";
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const idDiv = getParameterByName('id');
    console.log("IDENTIFIANT PERSONNAGE : "+idDiv)
async function GetDetails(identifiant){
  const personnages = await fetch(`https://hp-api.onrender.com/api/characters`)
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));
    let main = document.querySelector('main ');
    console.log(personnages);
    for (const perso of personnages){
      if(perso.id == idDiv){
        main.innerHTML =
        `
        <section>
            <h3>${perso.name}</h3>
            <div class="perso">
              <figure class="perso__left">
                <img src="${perso.image}" alt="" srcset="" />
                <figcaption>${perso.actor}</figcaption>
              </figure>
              <div class="perso__right">  
                <p class="attr">Gender : ${perso.gender}</p>
                <p class="attr">Eye : ${perso.eyeColour}</p>
                <p class="attr">Hair : ${perso.hairColour}</p>
                <p class="attr">Date of birth : ${perso.dateOfBirth}</p>
                <p class="attr">Patronus : ${perso.patronus}</p>
    
            </div>
          </section>
          <section class="house__perso">
            <img src="./images/logo/${perso.house}.png" alt="" srcset="" />
          </section>
        `
      }

    }

}

GetDetails(idDiv);