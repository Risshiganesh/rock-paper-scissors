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
    alert(`You chose ${playerSelection}
Computer chose ${computerSelection}`);

        if(playerSelection === computerSelection){
            return playerSelection+' and '+computerSelection+' is a draw!'
        } else if (computerSelection === 'Rock'){
            let winningCondition = 'Paper';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+' you win!'
            }else{
                return computerSelection+' beats '+playerSelection+' you lose!'
            }
        } else if (computerSelection === 'Paper'){
            let winningCondition = 'Scissors';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+' you win!'
            }else{
                return computerSelection+' beats '+playerSelection+' you lose!'
            }
        } else if (computerSelection === 'Scissors'){
            let winningCondition = 'Rock';
            if (playerSelection === winningCondition){
                return playerSelection+' beats '+computerSelection+' you win!'
            }else{
                return computerSelection+' beats '+playerSelection+' you lose!'
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
        return `You scored: ${playerScorePlaceholder}
Computer scored: ${computerScorePlaceholder}
It's a draw`;
    } else if (playerScorePlaceholder > computerScorePlaceholder){
        return `You scored: ${playerScorePlaceholder}
Computer scored: ${computerScorePlaceholder} 
You win!`;
    } else if (playerScorePlaceholder < computerScorePlaceholder){
        return `You scored: ${playerScorePlaceholder}
Computer scored: ${computerScorePlaceholder} 
You lose!`;
    }else{
        return 'Something is wrong with showResults function!'
    }

}

// Show current score
function currentScore(playerScorePlaceholder,computerScorePlaceholder){
    return `Round ${numberOfRounds} Score
    Player: ${playerScorePlaceholder}
    Computer: ${computerScorePlaceholder}`

}







function game (){
    
    if ( playerScore === 5 || computerScore === 5){
        alert(showResults(playerScore, computerScore));
        console.log(showResults(playerScore, computerScore));
        return;
    } 

    chosenElement;
    let round = addRounds();
    const computerSelection = getComputerChoice();
    let result = playRound(chosenElement,computerSelection);
    alert(result);
    keepScore(result);
    alert(currentScore(playerScore,computerScore));

    if ( playerScore === 5 || computerScore === 5){
        alert(showResults(playerScore, computerScore));
        console.log(showResults(playerScore, computerScore));
        return;
    }


}






// Listens for click event on buttons and returns appropriate values

function playerChoice(){

    if ( playerScore === 5 || computerScore === 5){
        alert(showResults(playerScore, computerScore))
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
    }
    
}



playerChoice();



// Loops the game

//function game(){


//let round = addRounds();
//
//    if(round<=5){
//            //alert(`Round number ${round} of 5`); 
        
            //const playerSelection = getPlayerSelection();
 //           const playerSelection = playerChoice();
//            if (playerSelection === 'endTheProgram'){
//                return alert("Bye!");
//            } else{
//                const computerSelection = getComputerChoice();
//                let result = playRound(playerSelection,computerSelection);
//                alert(result);
 //               keepScore(result);
 //               alert(currentScore(playerScore, computerScore));
//                console.log(currentScore(playerScore, computerScore));
//                game();                
//            }    
//
//    }else{
//        alert(showResults(playerScore, computerScore))
//       console.log(showResults(playerScore, computerScore));
//   }


    
//}


//Displays help guide

function help(){
    alert(`Rock beats Scissors
Paper beats Rock
Scissors beats Paper
Good luck!`);
}

// Initializes the game loop
//game();

///////////////////////////////



////


