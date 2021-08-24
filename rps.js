

let humanChoice = ' ';
let computerChoice = ' ';

//Calculate computer choice 
function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

computerChoice = getRandomNumber(3) + 1;


function determineWinner(player, computer){
    if (player === computer) {
       return console.log("It's a tie...");
    } else if (player === 'Rock' && computer === 'Scissors'){
        return console.log("You win!");
    } else if (player === 'Rock' && computer === 'Paper'){
        return console.log("You lose :(");
    } else if (player === 'Scissors' && computer === 'Paper'){
        return console.log("You win!");
    } else if (player === 'Scissors' && computer === 'Rock'){
        return console.log("You lose :(");
    } else if (player === 'Paper' && computer === 'Rock'){
        return console.log("You win!");
    } else if (player === 'Paper' && computer === 'Scissors'){
        return console.log("You lose :(");
    } else {
        console.log(player, computer);
        return console.log("Error");
    }
}

//console.log(computerChoice);


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Rock Paper Scissors game");

reader.question("Press 1 for Rock, 2 for Scissors, or 3 for Paper", function(input){

    if (input === "1"){
        humanChoice = 'Rock';
    } if (input === "2"){
        humanChoice = 'Scissors';
    } if (input === '3'){
        humanChoice = 'Paper';
    } if(input != "1" && input != "2" && input != "3"){
        console.log("Invalid choice")
    }
    
    if (computerChoice === 1){
        computerChoice = 'Rock';
    } if (computerChoice === 2){
        computerChoice = 'Scissors';
    } if (computerChoice === 3){
        computerChoice = 'Paper';
    } 
    
    
    
    console.log(`Player chooses ${humanChoice}`);
    console.log(`Computer chooses ${computerChoice}`);

    console.log(determineWinner(humanChoice, computerChoice));
    
    
    
    reader.close();


});

