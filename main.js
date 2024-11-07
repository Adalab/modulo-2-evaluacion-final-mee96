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
    
        for (const anime of animes){
            const listanime = `
        <div>

            <h5>${anime.title} ${anime.title_japanese}</h5>
            <img src="${anime.images.jpg.image_url}" alt="Portada serie">

        </div> 
         `
          list.innerHTML += listanime; //pinto y concateno todo lo relacionado con el nombre
        }
    });

    })