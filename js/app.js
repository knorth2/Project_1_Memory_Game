//PseudoCode

//Make array of cards
//Declare variables:  memory values array = [], cards flipped, players Turn, player1 score, player2 score, etc
//shuffle cards function using loop to iterate through array of cards. Use math.floor(math.random())
//Set up board using for loop to iterate through card array and push in to string? output set to gameboard div? connect to start game somehow.

//Game play: several functions with conditionals. create array to hold value of 2 cards that are flipped. If they match, the appropriate player's score is increased and it's the next player's turn. If they don't match, the next player goes. Players turn variable is increased next player is up, use setTimeout method.
//Make conditionals to see if the whole board is cleared/matched, if so declare the winner. 
//If not a match, Make function to flip card back over targeting 2 card array? 
//How to determine players turn it is???  If playersTurn % 2 === 0, playerID = 1  else playerID = 2
//reset button add eventListener function
//make start/play button function with event listener that asks for names for both players, add conditionals etc.
//inable start button once clicked.
//link new board once shuffled to start game.

//Card Array
const cardsArray = ['🍕', '🥐', '🍷', '🍯', '🍦', '🦪', '🥟', '🌯', '🥓', '🍄', '🥑', '🫒'];

let firstGuess = ""
let secondGuess = ""
let count = ""

const game = document.querySelector('#game')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.appendChild(grid)

const gameGrid = cardsArray //make 24 cards on the grid. 2 of each by using .concat to join 2 strings.
.concat(cardsArray)
console.log(gameGrid)

//Shuffle gameGrid

gameGrid.forEach(output => {
    output += Math.floor(Math.random() * gameGrid.length)
    console.log(output)
})
























