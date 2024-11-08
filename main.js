'use strict';

console.log("konichiwa sekai");

const list = document.querySelector(".js-list");
const form = document.querySelector(".anime-form");
const nameanime = document.querySelector(".anime-name");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = nameanime.value;
    console.log(nombre);


    function renderAnimes(animes) {
        for (const anime of animes) {

            let imageUrl = anime.images.jpg.image_url;  //es un let perqe lo cambiem

            if (imageUrl === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {

                imageUrl = "https://media.istockphoto.com/id/1349233065/vector/404-error-page-not-found-sad-kawaii-bunny-and-duckling-with-err.jpg?s=612x612&w=0&k=20&c=HxgSK3akep5Jci8AL-6Ku4-T6LRvR7IZK9oYQKnvvR0=";
            } //si la url es la primera la cambio per la segona


            const listanime = `
                    <div>
                        <h5>${anime.title} ${anime.title_japanese}</h5>
                        <img src="${imageUrl}" alt="Portada serie" width="210" height="295">
                    </div> 
                `;


            list.innerHTML += listanime;
        }
    }

    fetch(`https://api.jikan.moe/v4/anime?q=${nombre}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Confirmo que pido bien los datos al servidor
            const animes = data.data; // Accedo a los datos que necesito
            list.innerHTML = ""; // borro lo anterior per a que no se me sumen cada vegada

            renderAnimes(animes)

        })

});