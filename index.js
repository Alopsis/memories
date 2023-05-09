// tableau des symboles des cartes
var symbols = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"];

// tableau contenant les cartes retournées
var flippedCards = [];

// fonction qui mélange les symboles des cartes
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// fonction qui initialise le jeu
function init() {
  // mélange les symboles des cartes
  symbols = shuffle(symbols.concat(symbols));

  // crée les cartes
  for (var i = 0; i < symbols.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-symbol", symbols[i]);
    card.addEventListener("click", function() {
      // retourne la carte si elle n'est pas déjà retournée
      if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        console.log("on retourne");
        this.classList.add("flipped");
        flippedCards.push(this);
        // affiche le symbole de la carte retournée
        this.innerHTML = this.getAttribute("data-symbol");
        // vérifie si les deux cartes retournées correspondent
        if (flippedCards.length == 2) {
          if (flippedCards[0].getAttribute("data-symbol") == flippedCards[1].getAttribute("data-symbol")) {
            flippedCards = [];
          } else {
            setTimeout(function() {
              flippedCards[0].classList.remove("flipped");
              flippedCards[1].classList.remove("flipped");
              flippedCards[0].innerHTML = "";
              flippedCards[1].innerHTML = "";
              flippedCards = [];
            }, 1000);
          }
        }
      }
    });
    document.getElementById("game-board").appendChild(card);
  }
}

// initialise le jeu
init();
