//PseudoCode

//Make array of images and link them to front of card
//Declare variables: current players Turn, player1 score, player2 score, etc
//shuffle cards function using loop to iterate through array of cards. Use math.floor(math.random())
//Set up board using for loop to iterate through card array. output set to gameboard div? connect to start game somehow.
//Game play: several functions with conditionals. create array to hold value of 2 cards that are flipped?? If they match, the appropriate player's score is increased and it's the next player's turn. If they don't match, the next player goes. Players turn variable is increased next player is up, use setTimeout method.
//Make conditionals to see if the whole board is cleared/matched, if so declare the winner.
//How to determine players turn it is???  make currentPlayer function
//reset game function
//make start/play button function with event listener that asks for names for both players, add conditionals etc.
//enable start button once clicked.
//link new board once shuffled to start game.


//Card Array with linked images - array of objects for easier grabbing
const getImages = () => [
  { imgSrc: "./images/apple.png", name: "apple" },
  { imgSrc: "./images/banana.png", name: "banana" },
  { imgSrc: "./images/coffee.png", name: "coffee" },
  { imgSrc: "./images/donut.png", name: "donut" },
  { imgSrc: "./images/grapes.png", name: "grapes" },
  { imgSrc: "./images/orange.png", name: "orange" },
  { imgSrc: "./images/pear.png", name: "pear" },
  { imgSrc: "./images/strawberry.png", name: "strawberry" },
  { imgSrc: "./images/apple.png", name: "apple" },
  { imgSrc: "./images/banana.png", name: "banana" },
  { imgSrc: "./images/coffee.png", name: "coffee" },
  { imgSrc: "./images/donut.png", name: "donut" },
  { imgSrc: "./images/grapes.png", name: "grapes" },
  { imgSrc: "./images/orange.png", name: "orange" },
  { imgSrc: "./images/pear.png", name: "pear" },
  { imgSrc: "./images/strawberry.png", name: "strawberry" },
];
console.log('getImages function', getImages());

//global variables
let playerTurn = true;

//Grab from HTML via DOM
let startButton = document.querySelector(".start");
let resetButton = document.querySelector('.reset');
let grid = document.querySelector("section");
let playerOneName = document.querySelector(".playerOneName");
let playerTwoName = document.querySelector(".playerTwoName");
let playerOneScore = document.querySelector(".playerOneScore");
let playerTwoScore = document.querySelector(".playerTwoScore");


//radomize the cards-updated by putting in a function so I can use it easier, also decided not to concat array, might change mind later for dryer code.
const randomize = () => {
  const cardData = getImages();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
  // console.log(cardData)
};
// randomize();

//create cards put in function


const createCards = () => {
  const cardData = randomize(); //call randomize function to get shuffled version of the cards
  // console.log(cardData)
  //need to run through loop here to go through all 16 cards??
  cardData.forEach((item) => {
    //add index to setAttribute "name" to item.name from the object/array of images
    // console.log(item)//item is the array of objects
    const card = document.createElement("div"); //generate the HTML for the cards
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card"; //decided to use classList instead of setAttribute for cleaner looking code. W3 schools reference
    front.classList = "front";
    back.classList = "back";

    //attach the info to the cards(imgSrc and name) shown in HTML
    front.src = item.imgSrc;
    card.setAttribute("name", item.name);

    //attach the cards to the section/grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    //   console.log(card)
    // document.querySelectorAll('.back').src = "./images/mind_games.jpg"
    //Create event listener and set them to card. Use toggle method to target CSS. **referenced Jeff Cuartas blog on how to create flip effect sent to me by Gore and also W3schools using HTML DOM targeting variable in CSS for animation.

    card.addEventListener("click", (event) => {
      card.classList.toggle("toggleCard");
      checkCards(event); //call checkCards function when card is clicked, which will add attribute to specific card.
     
    });
  });
};

//check cards for match
const checkCards = (event) => {
  const clicked = event.target; //target event property refers to the element whose event listener triggered the event. so pass checkCards function in the eventlistener above.
  clicked.classList.add("flipped"); //add a class of flipped to each card so we can CHECK for a match, addign it to a variable
  const flippedCards = document.querySelectorAll(".flipped");
  // clicked.classList.add("match"); // added class of match so i can target the length of matched array to see who won the game compared to images array.
  // const matched = document.querySelectorAll(".match");
  // // console.log(matched)

  //game logic
  if (flippedCards.length === 2) {
    // two cards flipped (it adds a class 'flipped), check by attribute name and since it is an array of objects use index number
    if (
      flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        // console.log('card', card)
        card.classList.remove("flipped"); //once matched, remove 'flipped' class so they remain faceup

        if (playerTurn) {
          //starts with player 1
          playerOneScore.innerText ++;     
        } else {
          playerTwoScore.innerText ++; 
        }
      });

    gameWin(event)//pass event of clicked
    
    } else {
      console.log("not a match");
      playerTurn = !playerTurn; //If NOT a match switch players-use bang operater to return the opposite boolean value.
      if(playerTurn){
        playerOneName.style.textShadow = "2px 2px white" 
        playerTwoName.style.textShadow = "none" 
      }else{
        playerTwoName.style.textShadow = "2px 2px white" 
        playerOneName.style.textShadow = "none" 
      }
      flippedCards.forEach((card) => {
        card.classList.remove("flipped"); //once flipped and don't match, the 'flipped' class needs to be removed -referenced on stackOverflow.
        card.classList.remove("match")//once flipped and don't match, remove 'match' so array only counts on matched cards.
        setTimeout(() => card.classList.remove("toggleCard"), 2000); //to flip unmatched card back over, remove the animation on the toggleCard. Add a setTimeout so it doesn't immediately turn over.
      });
    }
  }
};

const gameWin = (event) => {
  const clicked = event.target
  clicked.classList.add("match"); // added class of match so i can target the length of matched array to see who won the game compared to images array.
  const matched = document.querySelectorAll(".match");
  // console.log(matched)
   console.log(matched.length, 'match length')
        if (matched.length === 8 && playerOneScore.innerText < playerTwoScore.innerText){ //why does this only alert correct player if the sign is wrong??????
          console.log('player1 score', playerOneScore.innerText)
          setTimeout(() => alert(`Congratulations ${playerOneName.innerText}! You won 🥳`), 1000);
        } 
        if (matched.length === 8 && playerTwoScore.innerText < playerOneScore.innerText){
           console.log('player2 score', playerTwoScore.innerText)
          setTimeout(() => alert(`Congratulations ${playerTwoName.innerText}! You won 🥳`), 1000);
        }
        if (matched.length === 8 && playerOneScore.innerText === playerTwoScore.innerText) {
          setTimeout(() => alert("It's a Draw! 🤠"), 1000);
        }
      // }
}

const resetGame = () =>{
  let cardData = randomize()//get randomized version of cards each time reset button is clicked.
  let front = document.querySelectorAll(".front")
  let cards =  document.querySelectorAll(".card")
  grid.style.pointerEvents = "none"
  cardData.forEach((item, index) =>{//run cardData through loop
    cards[index].classList.remove("toggleCard")//flip all cards back over to original position.
    setTimeout(() =>{
      cards[index].style.pointerEvents = "all"//so cards can be clicked again to play, add pointerEvents back on cards
      front[index].src = item.imgSrc
      cards[index].setAttribute("name", item.name)//randomize so each game is different.
      grid.style.pointerEvents = "all"
    }, 1000)
  })
}

//reset button-

resetButton.addEventListener('click', (event) => {
  event.target//.disabled = true;

   playerOneScore.innerText = 0//reset scores to 0
   playerTwoScore.innerText = 0
  //  playerOneName.innerText = prompt("What is your name?", "Enter Name");//option for different player
  //  playerTwoName.innerText = prompt("What is your name?", "Enter Name");
  playerOneName.style.textShadow = "2px 2px white"//highlight playerOneName to go first
  playerTwoName.style.textShadow = "none"
  // startButton.disabled = false
 resetGame()
  })

const stats = document.querySelector("#playerStats") //clear stats for start of game
stats.style.display = "none"
grid.style.background = "url('./images/thinking.png') no-repeat left / contain" 

//start button -event listener
startButton.addEventListener("click", (event) => { 
  playerOneName.innerText = prompt("What is your name?", "Player 1");
  playerTwoName.innerText = prompt("Player 2, What is your name?", "Player 2");
  event.target.disabled = true //turn off start button
  playerOneName.style.textShadow = "2px 2px white"//highlight playerOneName to go first
  const stats = document.querySelector("#playerStats")//add stats for game play
  stats.style.display = "flex"
  grid.style.background = "none"
  const gameRules = document.querySelector('#gameRules')
  gameRules.style.display = "none"
  // resetButton.disabled = false

  createCards();
  
});





  
