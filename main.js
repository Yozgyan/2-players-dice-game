//Assigning the button
let btn = document.getElementById('diceRoll');
btn.addEventListener('click', randomImage1);


//Array for the dice images
let imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
let imagesArray2 = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Player 1 & Player 2 scores
pl1Score = 0;
pl2Score = 0;

// Variable for changing the player from Player1 to Player2
let player = "Player1";

// Random number(index) for selecting IMG from the array
let num = 0;
let num2 = 0;


function randomImage1() {
    if (player == "Player1") {
        document.getElementById("rolled1").innerHTML = " ";
        document.body.style.background = "";
        // array with the names of the images!
        num = Math.floor(Math.random() * 6);
        document.canvas.src = imagesArray[num];
        num2 = Math.floor(Math.random() * 6);
        document.second.src = imagesArray2[num2];
        pl1Score += num + 2 + num2;
        document.getElementById("score").innerHTML = "Score: " + pl1Score;
        player = "Player2"

        if (num === 0 || num2 == 0 ) {
            document.getElementById("rolled1").innerHTML = "Lost: Try again ";
            errorColor('rgb(255,0,0)');
            pl1Score = 0;
            disableButton();
            return;
        } else if (pl1Score > 20) {
            document.getElementById("rolled1").innerHTML = "Winner";
            errorColor("rgb(87,189,130)");
            pl1Score = 0;
            disableButton();
        }
    } else if (player == "Player2") {
        document.getElementById("rolled2").innerHTML = " ";
        document.body.style.background = "";
        // array with the names of the images!
        num = Math.floor(Math.random() * 6);
        document.canvas.src = imagesArray[num];
        num2 = Math.floor(Math.random() * 6);
        document.second.src = imagesArray2[num2];
        pl2Score += num2 + 2 + num;
        document.getElementById("score2").innerHTML = "Score: " + pl2Score;
        player = "Player1"

        if (num2 === 0 || num === 0) {
            document.getElementById("rolled2").innerHTML = "Lost: Try again ";
            errorColor('rgb(255,0,0)');
            //  document.body.style.background = 'rgb(255,0,0)';
            pl2Score = 0;
            disableButton()
            return;

            // alert('You win');
        } else if (pl2Score > 20) {
            document.getElementById("rolled2").innerHTML = "Winner";
            errorColor("rgb(87,189,130)");
            pl2Score = 0;
            disableButton()
            // alert('Upps you dice 1 `Game over`')
        }
    }

};

function errorColor(color) {
    document.body.style.background = color;

};

function restartGame() {
    location.reload(true)
};

function disableButton() {
    document.getElementById('diceRoll').disabled = true
};