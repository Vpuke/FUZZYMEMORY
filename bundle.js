let memoryCardsArray = [
  { image: "./images/dizzyhuman.webp", id: "dizzy" },
  { image: "./images/donaldduck.webp", id: "donald" },
  { image: "./images/powerpuff.webp", id: "power" },
  { image: "./images/sailormoon.webp", id: "sailor" },
  { image: "./images/snake.webp", id: "snake" },
  { image: "./images/dog.webp", id: "dog" },
  { image: "./images/office.webp", id: "office" },
  { image: "./images/cutit.webp", id: "cut" }
];

// duplicate the images array, so shuffle function works properly.

const shuffleCards = [...memoryCardsArray, ...memoryCardsArray];

// CREATE MEMORY CARDS

const restartButton = document.querySelector(".replay-button");
const board = document.querySelector(".board");
let isFlipped,
  disable = false;
let first, second;

// RESTART GAME ADDED TO BUTTON ON CLICK

restartButton.addEventListener("click", restartGame);

// CALLING SHUFFLE

shuffle(shuffleCards);

const stringToHTML = str => {
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.firstChild;
};

const createMemoryCard = (image, index) => {
  return `<div class="card" data-id="${index}">
    <img class="front-side-card" src="${image}">
    <img class="back-side-card" src ="./images/gradient.jpg">
    </div>`;
};

const generateMemoryCard = () => {
  shuffle(shuffleCards);
  shuffleCards.forEach(card => {
    const imageCard = createMemoryCard(card.image, card.id);
    board.appendChild(stringToHTML(imageCard));
  });
  const cards = [...document.querySelectorAll(".card")];
  cards.forEach((card, i) => {
    card.addEventListener("click", handleClick);
  });
};

generateMemoryCard();

// SHUFFLE FUNCTION FISHER YATES

function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

// FUNCTION TO ADD CLASS TO FLIPPED CARD AND SEE IF DATASET IS A MATCH.

function handleClick() {
  if (disable || this === second) return;
  this.classList.toggle("flip");
  if (!isFlipped) {
    isFlipped = true;
    first = this;
    return;
  }
  second = this;
  first.dataset.id === second.dataset.id ? match() : noMatch();
}

// CHECKS IF THE CARDS ARE A MATCH

function match() {
  first.removeEventListener("click", handleClick);
  second.removeEventListener("click", handleClick);
  clear();
}

// CHECKS IF THE CARS ARE NO MATCH

function noMatch() {
  disable = true;
  setTimeout(() => {
    first.classList.remove("flip");
    second.classList.remove("flip");
    clear();
  }, 800);
}

// CLEARS THE PREVIOUS CLICKS

function clear() {
  isFlipped = false;
  disable = false;
  first = null;
  second = null;
}

// RESTARTS THE GAME

function restartGame() {
  board.innerHTML = "";
  generateMemoryCard();
}
