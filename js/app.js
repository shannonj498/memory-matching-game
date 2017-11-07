
// Declare card symbols
let cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];

// Shuffle cards (function from http://stackoverflow.com/a/2450976)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  return array;
}

// Create each card's HTMl
function createCard() {
  for (var i = 0; i < cards.length; i++) {
    let getCards = shuffle(cards);
    $(".deck").append('<li><i class="card fa ' + getCards[i] + '"></i></li>');
  }
}


// Create array to hold opened cards
let openCard = [];

// Logic to find matching cards
function findMatch() {
  // Show cards on click
  $(".card").on("click", function() {
    $(this).toggleClass("flipInY open show");
    openCard.push($(this));
    disableClick();
   // Check if classlist matches when openCard length == 2
    if (openCard.length === 2) {
      if (openCard[0][0].classList[2] === openCard[1][0].classList[2]) {
      openCard[0][0].classList.add("bounceIn", "match");
      openCard[1][0].classList.add("bounceIn", "match");
      removeOpenCards();
    } else {
      // If classes don't match, add "wrong" class
      openCard[0][0].classList.add("shake", "wrong");
      openCard[1][0].classList.add("shake", "wrong");
      // Set timeout to remove "show" and "open" class
      setTimeout(removeClasses, 1300);
      // Reset openCard.length to 0
      setTimeout(removeOpenCards, 1300);
    }
  }
 })
}

// Reset openCard.length to 0
function removeOpenCards() {
  openCard = [];
}

function removeWrongClass() {
  openCard[0][0].classList.remove("shake", "wrong");
  openCard[1][0].classList.remove("shake", "wrong");
}

// Remove "show" and "open" classes
function removeClasses() {
  $(".card").removeClass("show open flipInY bounceIn shake wrong");
  removeOpenCards();
}

// Disable clicks
function disableClick() {
  $(openCard).click(function() {
    return false
  });
}



// Call functions
shuffle(cards);
createCard();
findMatch();


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
