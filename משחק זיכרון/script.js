const gridContainer = document.querySelector('.grid-container');
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector("#score").textContent = score;

fetch('./data/cards.json')
    .then((res) => res.json())
    .then((data) => {
        cards = [...data, ...data];
        mixCards();
        createCards();
    });

function mixCards() {
    let currentIndex = cards.length,
        randomIndex,
        temporaryValue;


    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex - 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;

    }
}

function createCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
        <img class="front-image" src=${card.image}/>
        </div>
        <div class="back"></div>
        `
    }
}



