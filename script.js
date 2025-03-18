let count=0; //keep track of card in array,increments for every new card

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");
});
let gameCards;

//import from json file, shuffle, and store in gameCards
fetch('./flashcards.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(flashcards => {
    console.log(flashcards);  // Inspect the structure of the fetched JSON
    gameCards=shuffleCards(flashcards); // Call shuffleCards function with the parsed data
    console.log("Shuffled cards:", gameCards);
    document.querySelector(".card-front").innerHTML = gameCards[0].front; // Front side

  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });


//randomly shuffle cards and store in new array
function shuffleCards(cards) {
    if (!Array.isArray(cards)) {
        throw new Error("shuffleCards expects an array, but got something else.");
    }
    let shuffledArray = [...cards]; //new array with shuffled cards

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
    }


//display front of card
const displayValue=()=>{
    if (gameCards && count < gameCards.length - 1) {
        count++; // Increment count
        document.querySelector(".card-front").innerHTML = gameCards[count].front;//displays the front of the card you are up to in card-front
    } else {
        console.error("No more cards to display, or gameCards is undefined.");
    }
};
    

//when nextButton is clicked
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", displayValue); //onClick next button, call display value and disply vale on front of card


//when click on card, call flip card function
document.querySelector(".card-wrapper").addEventListener("click", flipCard); 
//trigger css to flip and display answer on back
function flipCard(){
    const flipCardElement = document.querySelector('.card-wrapper');

    // Toggle the 'flipped' class to trigger the flip animation
    flipCardElement.classList.toggle('flipped');

  // After flipping, change the value on the back side
  document.querySelector(".card-back").innerHTML = gameCards[count].back;
}