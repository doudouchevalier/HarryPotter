async function GetCharacters(){
    let houses = document.querySelector('main ');
    houses.innerHTML =
    `
    <section>
        <h3>Harry Potter</h3>
        <div class="perso">
          <figure class="perso__left">
            <img src="./images/characters/harry.webp" alt="" srcset="" />
            <figcaption>Daniel Radcliff</figcaption>
          </figure>
          <div class="perso__right">  
            <p class="attr">Gender : Male</p>
            <p class="attr">Eye : Green</p>
            <p class="attr">Hair : Black</p>
            <p class="attr">Date of birth : 31-07-1980</p>
            <p class="attr">Patronus : Stag</p>

        </div>
      </section>
      <section class="house__perso">
        <img src="./images/logo/Gryffindor.png" alt="" srcset="" />
      </section>
    `
}

GetCharacters();