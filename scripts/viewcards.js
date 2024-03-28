let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++)
{
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);

    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card.title;

    // TODO rest of text spans
    let deleteBtn = cardView.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", function() {
        console.log(i);
    })

    cardList.appendChild(cardView);
}