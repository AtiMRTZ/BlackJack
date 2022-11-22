let cardOne = getRandomCard ();
let cardTwo = getRandomCard ();
let sum = cardOne + cardTwo;
let message = "";
let cards = [cardOne, cardTwo];
let sumEl = document.getElementById ('sum-el');
let cardsEl = document.getElementById ('cards-el');
let hasBlackJack = false;
let isAlive = true; 

function getRandomCard () {
	let randomNum = Math.floor(Math.random ()*13)*1;
	
	if (randomNum === 1) {
		return 11;
	} else if (randomNum > 10) {
		return 10;
	} else {
		return randomNum;
	}
};

function startGame () {
	renderGame ();
};

function renderGame (){ 
sumEl.textContent = "Sum: " + sum;
cardsEl.textContent = "Your cards: ";

	for (let i=0; i< cards.length; i++) {
		cardsEl.textContent += cards [i] + " ";
	};


	if (sum <21) {
		message = "Want a draw?";
	} else if (sum === 21) {
		message = "You've got a BLACKJACK";	
		hasBlackJack = true;
		} else {	
		message = "You Lost";
		isAlive = false;
		}
	document.getElementById ('message-el').textContent = message;
};

function newGame () {
	if (isAlive === true && hasBlackJack === false) {
	let card = getRandomCard ();
	
	sum += card;
	cards.push (card);
	renderGame ();
	}
};