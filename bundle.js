let memoryCardsArray = [
    { image:"./images/dizzyhuman.webp" },
    { image:"./images/donaldduck.webp" },
    { image:"./images/powerpuff.webp" },
    { image:"./images/sailormoon.webp" },
    { image:"./images/snake.webp" },
    { image:"./images/dog.webp" },
    { image:"./images/office.webp" },
    { image:"./images/cutit.webp" },
];

// CREATE MEMORY CARDS

const restartButton = document.querySelector('.replay-button');
const board = document.querySelector(".board");

const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};

const createMemoryCard = ( image, index) => {
    return `<div class="card" data-cardIndex="${index}">
    <img class="front-side-card" src="${image}">
    <img class="back-side-card" src ="./images/hypnotic.jpg">
    </div>`;
};

const generateMemoryCard = () => {
    memoryCardsArray.forEach((card, index) => {
        const imageCard = createMemoryCard(card.image, index);
        board.appendChild(stringToHTML(imageCard));
       
    });
};

generateMemoryCard();
generateMemoryCard();

// SHUFFLE FUNCTION FISHER YATES


// function shuffle(array){
    //     let j, x, i;
    //     for(i = array.length - 1; i > 0; i--){
        //         j = Math.floor(Math.random() * (i + 1));
        //         x = array[i];
        //         array[i] = array[j];
        //         array[j] = x;
        //     }
        
        //     return array;
        // }
        
        // let myArray = ['0', '1', '2', '3', '4', '5', '6', '7'];
        // shuffle(memoryCardsArray);
        
        
        // ADDING CLASS TO CARD
        
        const cards = [...document.querySelectorAll('.card')];
        const flippedCards = [...document.querySelectorAll('.front-side-card')];
        
        // FUNTION TO ADD CLASS TO FLIPPED CARD
        
        function handleClick() {
            this.classList.toggle('flip')  
        }
        
        cards.forEach((card, i) => {
            card.addEventListener('click', handleClick)
        })
        

// SHUFFLEFUNCTION USED BY MARINA-FERREIRA

        (function shuffle(){
            card.forEach(cards => {
                let randomPos = Math.floor(Math.random() * 7);
                cards.style.order = randomPos;
            });
        })();
        