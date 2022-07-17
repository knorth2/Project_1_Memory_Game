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


//create cards put in function

const createCards = () =>{
    const cardData = randomize(); //call randomize function to get shuffled version of the cards
    // console.log(cardData)
    //need to run through loop here to go through all 16 cards??
cardData.forEach((item)=>{ //add index to setAttribute "name" to item.name from the object/array of images
    // console.log(item)//item is the array of objects
    const card = document.createElement("div")//generate the HTML for the cards
    const front = document.createElement("img")
    const back = document.createElement("div")
    card.classList = "card"  //decided to use classList instead of setAttribute for cleaner looking code. W3 schools reference
    front.classList = "front"
    back.classList = "back"
    
     //attach the info to the cards(imgSrc and name) shown in HTML
     front.src = item.imgSrc
     card.setAttribute("name", item.name)
    
     //attach the cards to the section/grid
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    // console.log(card)
    // console.log(front)
    // console.log(back)

//Create event listener and set them to card. Use toggle method to target CSS. **referenced Jeff Cuartas blog on how to create flip effect sent to me by Gore and also W3schools using HTML DOM targeting variable in CSS for animation.

  card.addEventListener('click', event => {
    card.classList.toggle('toggleCard') 
    })
  })
}
createCards()


  
 //create players 
    











