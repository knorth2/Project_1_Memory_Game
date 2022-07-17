//PseudoCode

//Make array of cards
//Declare variables:  memory values array = [], cards flipped, players Turn, player1 score, player2 score, etc
//shuffle cards function using loop to iterate through array of cards. Use math.floor(math.random())
//Set up board using for loop to iterate through card array and push in to string? output set to gameboard div? connect to start game somehow.

//Game play: several functions with conditionals. create array to hold value of 2 cards that are flipped. If they match, the appropriate player's score is increased and it's the next player's turn. If they don't match, the next player goes. Players turn variable is increased next player is up, use setTimeout method.
//Make conditionals to see if the whole board is cleared/matched, if so declare the winner. 
//If not a match, Make function to flip card back over targeting 2 card array? 
//How to determine players turn it is???  If playersTurn % 2 === 0
//reset button add eventListener function
//make start/play button function with event listener that asks for names for both players, add conditionals etc.
//enable start button once clicked.
//link new board once shuffled to start game.



//Card Array with linked images - array of objects for easier grabbing
const getImages = () => [
    {imgSrc: "./images/apple.png", name: "apple"},
    {imgSrc: "./images/banana.png", name: "banana"},
    {imgSrc: "./images/coffee.png", name: "coffee"},
    {imgSrc: "./images/donut.png", name: "donut"},
    {imgSrc: "./images/grapes.png", name: "grapes"},
    {imgSrc: "./images/orange.png", name: "orange"},
    {imgSrc: "./images/pear.png", name: "pear"},
    {imgSrc: "./images/strawberry.png", name: "strawberry"},
    {imgSrc: "./images/apple.png", name: "apple"},
    {imgSrc: "./images/banana.png", name: "banana"},
    {imgSrc: "./images/coffee.png", name: "coffee"},
    {imgSrc: "./images/donut.png", name: "donut"},
    {imgSrc: "./images/grapes.png", name: "grapes"},
    {imgSrc: "./images/orange.png", name: "orange"},
    {imgSrc: "./images/pear.png", name: "pear"},
    {imgSrc: "./images/strawberry.png", name: "strawberry"},
    
];

//global variables
let playerName = null
let player1Score = 1
let player2Score = 1

//Grab from HTML via DOM
const startButton = document.querySelector('.start')
const playerOne = document.querySelector('.playerOne')
const playerTwo = document.querySelector('.playerTwo')
const grid = document.querySelector('section')


//radomize the cards-updated by putting in a function so I can use it easier, also decided not to concat array, might change mind later for dryer code.
const randomize = () => {
    const cardData = getImages();
    cardData.sort(() => Math.random() - 0.5); 
    return cardData;
    // console.log(cardData)
};
// randomize();


//create cards 

const card = document.createElement('div')
card.setAttribute('class', 'card')
card.dataset.img = output  //link the image to the card using dataset to the shuffled array targeting output variable.

const front = document.createElement('div')
front.setAttribute('class', 'front')

const back = document.createElement('div')
back.setAttribute('class', 'back')


// append to grid, append front and back to card.

grid.appendChild(card)
card.appendChild(front)
card.appendChild(back)

})

//create players



//created matched function and set a class of 'match' on the card variable. To target each card run through a loop to setAttribute via DOM.
function match(){
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.setAttribute('class', 'match');
    });
  };
  


//create reset function to flip unmatched cards back over, removeAttribute method?? 

function resetCards(){
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.removeAttribute('.selected');
    });
  };

//Create event listener for cards(grid) and set them to a variable so I can target them easier for game play. Make conditionals so when clicked it runs match and resetCards Functions.
  
  grid.addEventListener('click', event => {
  
    const clicked = event.target;
  
    if (
      clicked.nodeName === 'section' ||
      clicked === previousCard ||
      clicked.parentNode.classList.contains('selected') ||
      clicked.parentNode.classList.contains('match')
    ) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.img;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.img;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, 1000);
        }
        setTimeout(resetCards, 1000);
      }
      previousCard = clicked;
    }
  
  });












