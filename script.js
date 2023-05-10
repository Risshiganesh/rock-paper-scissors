//Global Variables - To store values from functions (if it is inside a function, it get's re-declared everytime the function is called, so the values will not be stored.)
let numberOfRounds;
let playerScore = 0;
let computerScore = 0;
let chosenElement;



// Computer makes a choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*9)+1;

    if (randomNumber <= 3){
        return "Rock"
    } else if (randomNumber >= 7){
        return "Paper"
    }else{
        return "Scissors"
    } 
}


// Prompt the player to input an answer
function getPlayerSelection(){ // This function has issues.
    let userInput = prompt(`Rock, Paper or Scissors?
Type "help" if you need help`,'');
    if(userInput === null||userInput === undefined){
        return 'endTheProgram';
    }else if (userInput === ''){
        alert('Empty input, try again!');
        return getPlayerSelection();    

    } else if (typeof userInput === "string"){
        let caseInsensitive = userInput.toLowerCase();
        
        if (caseInsensitive === 'rock'){
            return 'Rock'
        } else if (caseInsensitive === 'paper'){
            return 'Paper'
        } else if (caseInsensitive === 'scissors'){
            return 'Scissors'   
        } else if(caseInsensitive === 'help'){
            help();
            return getPlayerSelection();
        }else {
            alert('Wrong input, Try again!');
            return getPlayerSelection();
        } 
    
    }else {
        alert('Wrong input, Try again!');
        return getPlayerSelection();
    }   
}


// Algo 1

function playRound(playerSelection, computerSelection){
    const choices = document.querySelector('#choices');
    choices.textContent = `You chose ${playerSelection},
    Computer chose ${computerSelection}`;
    console.log(`You chose ${playerSelection}
Computer chose ${computerSelection}`);

        if(playerSelection === computerSelection){
            return playerSelection+' and '+computerSelection+' is a draw!'
        } else if (computerSelection === 'Rock'){
            let winningCondition = 'Paper';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+', you win!'
            }else{
                return computerSelection+' beats '+playerSelection+', you lose!'
            }
        } else if (computerSelection === 'Paper'){
            let winningCondition = 'Scissors';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+', you win!'
            }else{
                return computerSelection+' beats '+playerSelection+', you lose!'
            }
        } else if (computerSelection === 'Scissors'){
            let winningCondition = 'Rock';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+', you win!'
            }else{
                return computerSelection+' beats '+playerSelection+', you lose!'
            }
        }        
}

// let numberOfRounds works because it doesn't get redeclared, 
//meaning, it doesn't start back from undefined, 
//addRounds function works, then stores the values outside of it, which is let numberOfRounds.
//If numberOfRounds was declared inside addRounds, it starts from scratch everytime.
//But is this the best way to do it? ###Function Scope is tricky!


// Add the number of rounds to global variable
function addRounds(){


    if(numberOfRounds === undefined){
        return  numberOfRounds = 1;
    }else{
        return ++numberOfRounds ;
    }
};




// Add player and computer score to global variable
function keepScore (copyOfResult){


    if (copyOfResult.includes('win')){
        if (playerScore === undefined){
            playerScore = 1;
            if (computerScore === undefined){
                computerScore = 0;
            }else{
                return;
            }
        }else{
            ++playerScore;
        }
        
    }else if (copyOfResult.includes('lose')){
        if (computerScore === undefined){
            computerScore = 1;
            if (playerScore === undefined){
                playerScore = 0;
            }else{
                return;
            }
        }else{
            ++computerScore;
        }
        
    }else if (copyOfResult.includes('draw')){
        if (playerScore === undefined){
            playerScore = 0;
            if (computerScore === undefined){
                computerScore = 0;
            }
        } else if (computerScore === undefined){
            computerScore = 0;
        }else {
            return;
        }


    }else{
        playerScore = 'Issue with PS';
        computerScore = 'Issue with CS';
    }

}

//Show final results

function showResults(playerScorePlaceholder,computerScorePlaceholder){
    if (playerScorePlaceholder === computerScorePlaceholder){
        return `Game Over, It's a draw!`;
    } else if (playerScorePlaceholder > computerScorePlaceholder){
        return `Game Over, You win!`;
    } else if (playerScorePlaceholder < computerScorePlaceholder){
        return `Game Over, Computer wins!`;
    }else{
        return 'Something is wrong with showResults function!'
    }

}



function getPlayerScore(playerScorePlaceholder){
    return `Player: ${playerScorePlaceholder}`;
}



function game (){
    
    if ( playerScore === 5 || computerScore === 5){
        const finalResult = document.querySelector('#title')
        finalResult.textContent = showResults(playerScore, computerScore);
        console.log(showResults(playerScore, computerScore));

        const totalRounds = document.querySelector('#totalRounds');
        totalRounds.textContent = `${numberOfRounds} Rounds in total`;
        return;
    } 

    chosenElement;
    let round = addRounds();
    const computerSelection = getComputerChoice();
    let result = playRound(chosenElement,computerSelection);
    
    //Displays what you and the computer chose
    const currentOutcome = document.querySelector("#currentResult");
    currentOutcome.textContent = result;

    keepScore(result);
    
    //This will be displayed at the top
    const scoreTitle = document.querySelector('#title');
    scoreTitle.textContent = `Round ${numberOfRounds}`;

    //Player score to be updated on DOM
    const playerScoreDOM = document.querySelector('#playerScoreDisplay');
    playerScoreDOM.textContent = `Player: ${playerScore}`;
    
    //Computer score to be updated on DOM
    const computerScoreDOM = document.querySelector('#computerScoreDisplay');
    computerScoreDOM.textContent = `Computer: ${computerScore}`;

    if ( playerScore === 5 || computerScore === 5){
        const finalResult = document.querySelector('#title')
        finalResult.textContent = showResults(playerScore, computerScore);
        console.log(showResults(playerScore, computerScore));

        const totalRounds = document.querySelector('#totalRounds');
        totalRounds.textContent = `${numberOfRounds} Rounds in total`;
        return;
    }  


}






// Listens for click event on buttons and returns appropriate values

function playerChoice(){

    if ( playerScore === 5 || computerScore === 5){
        const finalResult = document.querySelector('#finalResults')
        finalResult.textContent = showResults(playerScore, computerScore);
        console.log(showResults(playerScore, computerScore));




    } else {
        const rock = document.querySelector('#rock');

        ////
        rock.addEventListener('click', function (){
            chosenElement = 'Rock'
            game();
        });


        ////
        const paper = document.querySelector('#paper');

        paper.addEventListener('click', function (){
            chosenElement = 'Paper'
            game();
        });

        ////
        const scissors = document.querySelector('#scissors');

        scissors.addEventListener('click', function(){
            chosenElement = 'Scissors'
            game();
        });

        ////
        const helpButton = document.querySelector('#help');

        helpButton.addEventListener('click', function(){
            choices.textContent = `Rock beats Scissors,
            Paper beats Rock,
            Scissors beats Paper,
            Good luck!`;
            
        });

        const restartButton = document.querySelector('#restart');
        
        restartButton.addEventListener('click', function(){
            location.reload();
        });
    }
    
}



playerChoice();







