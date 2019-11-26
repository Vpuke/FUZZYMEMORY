const memoryCardsArray = [
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },
    { image:"" },

];



const cards = document.querySelector(".cards");

const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};

const createMemoryCard = ( image, index) => {
    return `<div class="card" data-cardIndex="${index}">
    <img src="${image}">
    </div>
    `;
};

const generateMemoryCard = () => {
    memoryCardsArray.forEach((card, index) => {
       const imageCard = createMemoryCard(card.image, index);
        cards.appendChild(stringToHTML(imageCard));
    });
};

generateMemoryCard();
