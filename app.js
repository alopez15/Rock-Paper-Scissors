const  computerPlay = () => {

    let randomNum = Math.floor(Math.random() * 3);
    let compPlay;

    switch (randomNum) {
        case 0:
            compPlay = 'Rock';
            break;

        case 1:
            compPlay = 'Paper';
            break;

        case 2:
            compPlay = 'Scissors';
    }
    console.log(compPlay)
    return compPlay;
};

const playRound = (computerSelection, playerSelection) => {

    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return result = null;

    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return result = true;;

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return result = false;

    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return result = true;

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return result = false;

    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') { 
        return result = null;

    }else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return result = null;

    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return result = false;

    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return result = true;
}
};

const displayImg = (compPlay) => {

    if(compPlay === 'Scissors'){
        computerChoice.src = './img/scissors2.png'

    } else if(compPlay === 'Rock'){
        computerChoice.src = './img/rock2.jpg'

    } else if(compPlay === 'Paper'){
        computerChoice.src = './img/paper2.png'

    };
}

const printResult = (result) => {
    if (result === null){
        gameResult.textContent = 'It\'s a Draw!';
        

    } else if (result === true ){
        gameResult.textContent = 'Player Won!';
        
        
    } else if( result === false ){
        gameResult.textContent = 'Computer Won!'
        

    }
}

const playerChoice = document.querySelector('#player-img')
const computerChoice = document.querySelector('#computer-img')
const scissors = document.querySelector('#scissors-btn')
const rock = document.querySelector('#rock-btn')
const paper = document.querySelector('#paper-btn')
const gameResult = document.querySelector('#game-result')
const playerScoreID = document.querySelector('#player-score')
const computerScoreID = document.querySelector('#computer-score')
const buttons = document.querySelector('#btns')
const animation = document.querySelector('.animation')
const playAgainbtn = document.querySelector('.btn')

let playerScore = 0, computerScore = 0;

scissors.addEventListener('click', (e) => {

    let compPlay = computerPlay()
    let result = playRound(compPlay, 'Scissors')

    //computerChoice.classList.add ('animation') 
    
    playerChoice.src = './img/scissors(1).png'; 
    gameResult.style.display = 'block';

    displayImg(compPlay);
    printResult(result);

    if (result === true){
        playerScore++;

    } else if(result === false){
        computerScore++;

    }

    playerScoreID.textContent = playerScore;
    computerScoreID.textContent = computerScore;
    endGame(playerScore, computerScore);

});

rock.addEventListener('click', (e) => {

    let compPlay = computerPlay();
    let result = playRound(compPlay, 'Rock');
    
    displayImg(compPlay);
    printResult(result);

    playerChoice.src = './img/rock.jpg';
    gameResult.style.display = 'block';

    if (result === true){
        playerScore++;

    } else if(result === false){
        computerScore++;

    }

    playerScoreID.textContent = playerScore;
    computerScoreID.textContent = computerScore;
    endGame(playerScore, computerScore);

});

paper.addEventListener('click', (e) => {

    let compPlay = computerPlay();
    let result = playRound(compPlay, 'Paper');   
    
    displayImg(compPlay);
    printResult(result);

    playerChoice.src = './img/paper(1).png';
    gameResult.style.display = 'block';

    if (result === true){
        playerScore++;

    } else if(result === false){
        computerScore++;

    }

    playerScoreID.textContent = playerScore;
    computerScoreID.textContent = computerScore;
    endGame(playerScore, computerScore)

});

playAgainbtn.addEventListener('click',(event) => {

    playerScore = 0;
    computerScore = 0;
    playerScoreID.textContent = 0
    computerScoreID.textContent = 0
    buttons.style.display = 'inline';
    gameResult.style.display = 'none'
    playAgainbtn.style.display = 'none'

})

const endGame = (playerScore, computerScore) => {
    
    if( playerScore === 5 && computerScore < 5){
        gameResult.textContent = 'Game Over, Player Wins!';
        buttons.style.display = 'none';
        playAgainbtn.style.display = 'inline'
        

    } else if ( playerScore === 5 && computerScore === 5 ){
        gameResult.textContent = 'Game Over, It\'s a Draw!';
        buttons.style.display = 'none';
        playAgainbtn.style.display = 'inline'
        

    } else if (playerScore < 5 && computerScore === 5){
        gameResult.textContent = 'Game Over, Computer Wins!';
        buttons.style.display = 'none';
        playAgainbtn.style.display = 'inline'
        
    }
       
}


