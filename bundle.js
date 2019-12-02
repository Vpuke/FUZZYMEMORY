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
let isFlipped, disable = false;
let first, second;

const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};

const createMemoryCard = ( image, index) => {
    return `<div class="card" data-id="${index}">
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


function shuffle(array){
        let j, x, i;
        for(i = array.length - 1; i > 0; i--){
                j = Math.floor(Math.random() * (i + 1));
                x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        
            return array;
        }
        
// CALLING SHUFFLE 
shuffle(memoryCardsArray);

// ADDING CLASS TO CARD
        
const cards = [...document.querySelectorAll('.card')];
const flippedCards = [...document.querySelectorAll('.front-side-card')];
        
// FUNCTION TO ADD CLASS TO FLIPPED CARD
        
function handleClick() {
    if(disable || this === second) return
    this.classList.toggle('flip');
    if(!isFlipped){
        isFlipped = true;
        first = this;
        return
    }
    second = this;
    first.dataset.id === second.dataset.id ? match() : noMatch();  
}
        
cards.forEach((card, i) => {
    card.addEventListener('click', handleClick)
})
        
// CHECKS IF THE CARDS ARE A MATCH

function match() {
    first.removeEventListener('click', handleClick);
    second.removeEventListener('click', handleClick);
    clear();
}

// CHECKS IF THE CARS ARE NO MATCH

function noMatch(){
    disable = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        clear();
    }, 800)
}

function playGame(){
    
}






// CLEARS THE PREVIOUS CLICKS

function clear(){
    isFlipped = false;
    disable = false;
    first = null;
    second = null;
}

// RESTARTS THE GAME

function restartGame() {
    cards.forEach((card) => {
    card.classList.remove('flip');
    card.addEventListener('click', handleClick);
    shuffle(idArray);
    playGame();
    clear();
    })
}