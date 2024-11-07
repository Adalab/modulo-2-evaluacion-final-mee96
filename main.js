'use strict';

console.log("konichiwa sekai");




const list = document.querySelector(".js-list");


fetch (" https://api.jikan.moe/v4/anime?q=naruto")
    .then (Response => Response.json())
    .then (data => {
        console.log(data); //confirmo que pido bien los datos al servidor
        const animes = data.data; //accedo a los datos que necesito
        const anime = animes[0];
        console.log(anime);
    });
