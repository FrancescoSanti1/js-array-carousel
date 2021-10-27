// array di dati con cui popolare il carousel
const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

const title = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'];

const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.', 'Lorem ipsum', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'];

// dichiaro variabili e costanti
let mieImmagini = "";
let mieThumb = "";

// scorro tutti gli array e a ogni giro prendo tutte le informazioni relative
for (let i = 0; i < items.length; i++) {

    mieImmagini += `
    <div class="blocco-immagine">
        <img src="${items[i]}" alt="${title[i]}">

        <div class="testi">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
        </div>
    </div>`;

    mieThumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;
}

document.getElementById("immagini").innerHTML = mieImmagini;
document.querySelector(".blocco-immagine").classList.add("active");

document.getElementById("elenco").innerHTML += mieThumb;
document.querySelector(".thumb").classList.add("active");