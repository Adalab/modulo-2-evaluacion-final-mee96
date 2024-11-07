'use strict';

console.log("konichiwa sekai");

const list = document.querySelector(".js-list");
const form = document.querySelector(".anime-form");
const nameanime = document.querySelector(".anime-name");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = nameanime.value;
    console.log(nombre);



fetch (`https://api.jikan.moe/v4/anime?q=${nombre}`)
    .then (Response => Response.json())
    .then (data => {
        console.log(data); //confirmo que pido bien los datos al servidor
        const animes = data.data; //accedo a los datos que necesito
        const anime = animes[0];
        console.log(anime);
        list.innerHTML = `
        <div>

            <h5>${anime.title} ${anime.title_japanese}</h5>
            <img src="${anime.images.jpg.image_url}" alt="Portada serie">

        </div> 
         `
// pintamos en el html con los datos del api 

//for? para los titulos con varias series como naturo, soa, bleach, etc ?
        
    });

    })