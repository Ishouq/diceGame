function rollDice() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.getElementsByClassName("player1")[0].setAttribute("src", randomNumber1 + ".png");
  document.getElementsByClassName("player2")[0].setAttribute("src", randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "Player 1 is the winner";
    document.getElementsByClassName("winPic")[0].setAttribute("src", "winner.png");

    var audio = new Audio('applause.mp3');
    audio.play();

  } else if(randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerHTML = "Player 2 is the winner";
    document.getElementsByClassName("winPic")[0].setAttribute("src", "winner.png");

    var audio1 = new Audio('applause.mp3');
    audio1.play();

  } else{
    document.querySelector(".winner").innerHTML = "TIE";
    document.getElementsByClassName("winPic")[0].setAttribute("src", "");
  }
}
