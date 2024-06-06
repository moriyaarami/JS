const board = document.querySelector(".container");
const Emogi = ["😂", "😍", "😒", "😁", "😘", "😎", "🤷‍♀️", "😉", "😢"];
const EmogiCards = [...Emogi, ...Emogi];
const cardsCount = EmogiCards.length;

let score = 0;


let revealdCard = 0;/* קלף חשוף */
let activeCard = null;/* קלף פעיל */
let awaitingEndOfMoves = false; /* מחקה לסוף הפעולה */



function createCard(emogi) {

    const element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML = '';

    element.setAttribute('data-emogi', emogi);
    element.setAttribute('data-reveled', "false");

    element.addEventListener("click", () => {
        const reveled = element.getAttribute('data-reveled');

        if (awaitingEndOfMoves || reveled === "true" || element == activeCard) {
            return;
        }

        element.style.backgroundColor = 'white';
        element.innerHTML = emogi;

        if (!activeCard) {
            activeCard = element;

            return;
        }

        /* בדיקת התאמה */
        const emogiMatch = activeCard.getAttribute('data-emogi');

        if (emogiMatch === emogi) {
            activeCard.setAttribute('data-reveled', "true");
            element.setAttribute('data-reveled', "true");

            awaitingEndOfMoves = false;
            activeCard = null;
            revealdCard += 2;

            if (revealdCard == cardsCount) {
                setTimeout(() => {
                    alert("ניצחת!");
                    score++;
                    document.querySelector("#win").textContent = score;
                }, 500);


            }

            return;
        }

        awaitingEndOfMoves = true;

        setTimeout(() => {
            element.style.backgroundColor = '';
            activeCard.style.backgroundColor = '';
            element.innerHTML = '';
            activeCard.innerHTML = '';

            awaitingEndOfMoves = false;
            activeCard = null;
        }, 1000)




    })

    return element;

}

for (let i = 0; i < cardsCount; i++) {

    const randomIndex = Math.floor(Math.random() * EmogiCards.length);
    const randomEmogi = EmogiCards[randomIndex];
    const card = createCard(randomEmogi);
    EmogiCards.splice(randomIndex, 1);

    board.appendChild(card);

}

const flipActiveCard = () => {
    element.classList.add('.card');
    element.innerHTML = '';


}






