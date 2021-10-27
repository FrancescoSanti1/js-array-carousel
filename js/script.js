// array di dati con cui popolare il carousel
const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

const title = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'];

const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.', 'Lorem ipsum', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'];

// variabili con stringa vuota in cui vado a inserire l'html per popolare la pagina nella situazione di partenza
let mieImmagini = "";
let mieThumb = "";

// per ogni valore di i, prendo in ciascun array il valore corrispondente alla posizione espressa da i
for (let i = 0; i < items.length; i++) {

    // qui compongo la parte dell'immagine principale
    mieImmagini += `
    <div class="blocco-immagine">
        <img src="${items[i]}" alt="${title[i]}">

        <div class="testi">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
        </div>
    </div>`;

    // qui compongo l'elenco laterale delle immagini piccole
    mieThumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;
}

// stampo in pagina le stringhe composte nel ciclo con i dati raccolti
document.getElementById("immagini").innerHTML = mieImmagini;

document.getElementById("elenco").innerHTML += mieThumb;

// aggiungo la classe active al primo elemento in modo che compaia correttamente nella situazione iniziale
document.querySelector(".blocco-immagine").classList.add("active");

document.querySelector(".thumb").classList.add("active");

// questa variabile mi permette di sapere a ogni click in quale punto dell'array mi trovo.
// Nella situazione di partenza, l'elemento visibiie è il primo della lista.
let posizioneAttuale = 0;

// a ogni click del pulsante in basso, sposto la classe active all'immagine successiva
document.querySelector(".successivo").addEventListener("click", function() {

        // tolgo la classe active all'elemento che ce l'ha attualmente
        document.querySelector(".blocco-immagine.active").classList.remove("active");
        document.querySelector(".thumb.active").classList.remove("active");

        // aggiorno la posizione dell'indice
        posizioneAttuale++;
        console.log(posizioneAttuale);

        // controllo che l'indice non vada oltre il numero di elementi dell'array
        if (posizioneAttuale === items.length) {
            posizioneAttuale = 0;
        }

        // aggiungo la classe active all'elemento corrispondente alla posizione in cui mi trovo a seguito del click
        document.getElementsByClassName("blocco-immagine")[posizioneAttuale].classList.add("active");
        document.getElementsByClassName("thumb")[posizioneAttuale].classList.add("active");
    }
);

// a ogni click del pulsante in alto, sposto la classe active all'immagine precedente
document.querySelector(".precedente").addEventListener("click", function() {

    // tolgo la classe active all'elemento che ce l'ha attualmente
    document.querySelector(".blocco-immagine.active").classList.remove("active");
    document.querySelector(".thumb.active").classList.remove("active");

    // aggiorno la posizione dell'indice
    posizioneAttuale--;
    // console.log(posizioneAttuale);

    // se il numero dell'indice va sotto lo zero, allora lo porto alla posizione che corrisponde all'ultimo elemento dell'array
    if (posizioneAttuale < 0) {
        posizioneAttuale = items.length - 1;
    }
    // console.log(posizioneAttuale);

    // aggiungo la classe active all'elemento corrispondente alla posizione in cui mi trovo a seguito del click
    document.getElementsByClassName("blocco-immagine")[posizioneAttuale].classList.add("active");
    document.getElementsByClassName("thumb")[posizioneAttuale].classList.add("active");
}
);