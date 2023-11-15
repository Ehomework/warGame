

var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");

for (i=1; i<14; i++){
  for (k=1; k<5; k++) {
    var j = [i,k];
    cards.push(j);
  }
}

cards.shuffle = function(){
  Console.log("shuffle");
  var input = this;
  for (var i = cards.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = cards[randomIndex][0];
    var itemAtSecond = cards[randomIndex][1];

    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond;
  }
  return input;
}
//end of shuffle function

cards.shuffle();
var half = cards.length/2;
for (i=0; i<half; i++){
  firstPlayer.push(cards[i]);
}
cards.splice(0,half);

secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

$draw.on('click', function() {
  $firstPlayerSuit.empty();
  $secondPlayerSuit.empty();
  var number1=firstplayer[0][0];
  var number2=secondPlayer[0][0];
  //need to pit in Jack, Queen, King
  $firstPlayerNumber.html(number1);
  $secondPlayerNumber.html(number2);

  suit1 = firstPlayer[0][1];
  suit2 = secondPlayer[0][1];
  if (suit1 == 1) {
    suit1 = "<img src='./'/>"
  }
  if (suit1 == 2) {
    suit1 = "<img src='./'/>"
  }
  if (suit1 == 3) {
    suit1 = "<img src='./'/>"
  }
  if (suit1 == 4) {
    suit1 = "<img src='./'/>"
  }
  if (suit2 == 1) {
    suit2 = "<img src='./'/>"
  }
  if (suit2 == 2) {
    suit2 = "<img src='./'/>"
  }
  if (suit2 == 3) {
    suit2 = "<img src='./'/>"
  }
  if (suit2 == 4) {
    suit2 = "<img src='./'/>"
  }
  for (i=0; i<number1; i++) {
    firstPlayerSuit.append(suit1);
  }
  for (i=0; i<number2; i++) {
    secondPlayerSuit.append(suit1);
  }

  playedCards.push(firstPlayer[0]);
  playedCards.push(secondPlayer[0]);;

  firstPlayer.splice(0.1);
  secondPlayer.splice(0,1);


  if (number1 > number2) {
    $winner.html("Player One Wins");
    for (i=0; i <playedCards.length; i++) {
      firstPlayer.push(playedCards[i]);
    }
  } else {
      $winner.html("Player Two Wins");
        for (i=0; i <playedCards.length; i++) {
          secondPlayer.push(playedCards[i]);
          Console.log("pushed a card to player");
        }
      }

      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      #draw {
        position: relative;
        background-color: #04AA6D;
        border: none;
        font-size: 28px;
        color: #FFFFFF;
        padding: 20px;
        width: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
      }

      #draw:after {
        content: "";
        background: #90EE90;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
      }

      #draw:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
      }
      </style>
      </head>
      <body>

      <h2>Animated Button - Ripple Effect</h2>

      <button class="button">Click Me</button>

      </body>
