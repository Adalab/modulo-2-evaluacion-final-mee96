'use strict';

console.log("konichiwa sekai");

const list = document.querySelector(".js-list");
const listfav = document.querySelector(".js-list-fav");
const form = document.querySelector(".anime-form");
const nameanime = document.querySelector(".anime-name");
let animeList = [];
let favoritesAnimesList = []; // array buit per omplir de animes favs


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
                    <div class="js-anime" id=${anime.mal_id}>
                        <h5>${anime.title} ${anime.title_japanese}</h5>
                        <img src="${imageUrl}" alt="Portada serie" width="210" height="295">
                    </div> 
                `;

            list.innerHTML += listanime;

            //click per cada paleta
            const allanimesDOM = document.querySelectorAll(".js-anime");
            for (const animeDOM of allanimesDOM) {
                animeDOM.addEventListener("click", handleAddFavorite);
            }

        }

    }

    fetch(`https://api.jikan.moe/v4/anime?q=${nombre}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Confirmo que demano be les dades al servidor
            const animes = data.data; // Accedeixo a les dades que necesito
            list.innerHTML = "";

            renderAnime(animes);
            animeList = animes;

        }
        )

    //animes preferits: 
    function handleAddFavorite(event) {
        //console.log("click en un anime");
        //console.log(event.currentTarget.id);
        const idAnimeClicked = event.currentTarget.id;
        const animeSelected = animeList.find((anime) => {

            //console.log("id", anime.mal_id);
            //console.log("clicked", idAnimeClicked);
            return anime.mal_id === parseInt(idAnimeClicked);

        })
        //console.log("list", animeList);

        //console.log(animeSelected); 


        favoritesAnimesList.push(animeSelected);

        console.log(favoritesAnimesList);

        //pintem los animes copian lo de dal i pasant a favoriteanimelist i añadintho al js-fav del div de preferits
        listfav.innerHTML = "";
        for (const anime of favoritesAnimesList) {

            let imageUrl = anime.images.jpg.image_url;  //es un let perqe lo cambiem

            if (imageUrl === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {

                imageUrl = "https://media.istockphoto.com/id/1349233065/vector/404-error-page-not-found-sad-kawaii-bunny-and-duckling-with-err.jpg?s=612x612&w=0&k=20&c=HxgSK3akep5Jci8AL-6Ku4-T6LRvR7IZK9oYQKnvvR0=";
            } //si la url es la primera la cambio per la segona


            const listanime = `
                    <div class="js-anime" id=${anime.mal_id}>
                        <h5>${anime.title} ${anime.title_japanese}</h5>
                        <img src="${imageUrl}" alt="Portada serie" width="210" height="295">
                    </div> 
                `;


            listfav.innerHTML += listanime;

            //click per cada paleta
            const allanimesDOM = document.querySelectorAll(".js-anime");
            for (const animeDOM of allanimesDOM) {
                animeDOM.addEventListener("click", handleAddFavorite);
            }

        }




    }


});




//Local storage, si la usuaria ja hagues entrat anteriorment no caldria carregar el fetch i ahorrem temps
/*const animesLocalStorage = localStorage.getItem("animeInfo");
console.log(animesLocalStorage);

if (animesLocalStorage !== null) {
    //renderAnime(animes);

}*/
