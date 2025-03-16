const count=1; //keep track of card in array,increments for every new card- starts at 1 because 1st card is displayed right away

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");
});

const cards = require('./flashcards'); //json file of cards


//randomly shuffle cards and store in new array
function shuffleCards(flashcards) {
    let shuffledArray = [...flashcards]; //new array with shuffled cards

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
    }
const gameCards=shuffleCards(); //shuffles all cards and stores in gameCards
document.getElementById("card-front").innerHTML = gameCards[0].front;//displays the 1st card in card-front

//when nextButton is clicked
nextButton.addEventListener("click", displayValue); //onClick next button, call display value and disply vale on front of card

//display front of card
const displayValue=()=>{
    document.getElementById("card-front").innerHTML = gameCards[count].front;//displays the front of the card you are up to in card-front
    count++; //increment count each time card is displayed (to get to next card)
}

card-wrapper.addEventListener("click", flipCard); //when click on card, call flip card function

//trigger css to flip and display answer on back
function flipCard(){
    const flipCardElement = document.querySelector('.card-body');

    // Toggle the 'flipped' class to trigger the flip animation
    flipCardElement.classList.toggle('flipped');

  // After flipping, change the value on the back side
    document.getElementById("card-back").innerHTML = gameCards[count].back;
}