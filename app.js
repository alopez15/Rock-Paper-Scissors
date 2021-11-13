  let  computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
    let compPlay;

    switch (randomNum) {
        case 0:
            compPlay = "Rock";
            break;

        case 1:
            compPlay = "Paper";
            break;

        case 2:
            compPlay = "Scissors";
    }
    return compPlay;
};

let result;

 let playRound = (computerSelection, playerSelection) => {

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = null;
        return `${playerSelection} vs ${computerSelection}, it's a Draw!`;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = true;
        return `${playerSelection} beats ${computerSelection}, You Won!`;

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = false;
        return `${computerSelection} beats ${playerSelection}, You Lose!`;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = true;
        return `${playerSelection} beats ${computerSelection}, You Won!`;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = false;
        return `${computerSelection} beats ${playerSelection}, You Lose!`;

    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = null
        return `${computerSelection} vs ${playerSelection}, It's a Draw!`;

    }else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = null
        return `${computerSelection} vs ${playerSelection}, It's a Draw!`;

    }else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = false;
        return `${computerSelection} beats ${playerSelection}, You Lose!`;

    }else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = true;
        return `${playerSelection} beats ${computerSelection}, You Won!`;
}
};

const round = 5;
 
let game = () => {

    let playerScore = 0, computerScore = 0, gameRound = 0, flag = 0;
    let playerSelection, newPlayerSelection, computerSelection, firstLetter, newFirstLetter, slicedWord;

    for(let i = 0; i < round; i++){
    
        while (flag == 0){
            playerSelection = prompt('Enter Rock, Paper, or Scissors');

            newPlayerSelection = playerSelection.toLowerCase();         // convert string to lower case
            firstLetter = newPlayerSelection.charAt(0);                 // take first letter
            newFirstLetter = firstLetter.toUpperCase();                 // convert first letter to uppercase
            slicedWord = newPlayerSelection.slice(1);                   // remove first letter and keep the rest of the
            newPlayerSelection = newFirstLetter + slicedWord            // add uppercase first letter + the remaining letters from the sliced word

        if(newPlayerSelection != 'Rock' && newPlayerSelection != 'Scissors' && newPlayerSelection != 'Paper'){
            alert('Invalid Input, Try Again!')
        
        } else {
            flag = 1;

        }
        }   

    gameRound++;
    computerSelection = computerPlay();
    
    console.log(`Round ${gameRound} \nComputer played ${computerSelection}`)
    console.log(playRound(computerSelection, newPlayerSelection))

    if (result === true){
        playerScore++

    }else if(result === false){
        computerScore++
    }

    console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`)
    flag = 0;

    }

    console.log(`Game Over!`)
}

game();
