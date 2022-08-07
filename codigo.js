// function to choose random number to represent computer's choice
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Global variables
let player = 0;
let computer = 0;
let wins  = 0;
let losses = 0;

while (wins < 3 && losses < 3) {
    computer = randomNumber(1, 3);
    player = prompt("Choose 1: rock, 2: paper or 3: scissors");
    // possible choices for the player
    if (player == 1) {
        alert("You chose rock");
    } else if (player == 2) {
        alert("You chose paper");
    } else if (player == 3) {
        alert("You chose scissors");
    } else {
        alert("You did not choose 1, 2 or 3");
    }
    // possible choices for the computer
    if (computer == 1) {
        alert("The computer chose rock");
    } else if (computer == 2) {
        alert("The computer chose paper");
    } else if (computer == 3) {
        alert("The computer chose scissors");
    } else {
        alert("The computer did not choose 1, 2 or 3");
    }
    //FIGHT!
    //1 = rock, 2 = paper, 3 = scissors
    if (player == 1 && computer == 1) {
        alert("It's a draw!");
    } else if (player == 1 && computer == 2) {
        alert("The computer wins!");
        losses++;
    } else if (player == 1 && computer == 3) {
        alert("You win!");
        wins++;
    } else if (player == 2 && computer == 1) {
        alert("You win!");
        wins++;
    } else if (player == 2 && computer == 2) {
        alert("It's a draw!");
    } else if (player == 2 && computer == 3) {
        alert("The computer wins!");
        losses++;
    } else if (player == 3 && computer == 1) {
        alert("The computer wins!");
        losses++;
    } else if (player == 3 && computer == 2) {
        alert("You win!");
        wins++;
    } else if (player == 3 && computer == 3) {
        alert("It's a draw!");
    } else {
        alert("You did not choose 1, 2 or 3");
    }

}

alert ("You won " + wins + " times and lost " + losses + " times");