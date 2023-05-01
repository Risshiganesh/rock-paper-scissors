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

function getPlayerSelection(){
    let userInput = prompt("Rock, Paper or Scissors?",'');

    if(userInput === null||userInput === undefined){
        return;
    }else if (userInput === ''){
        alert('Empty input, try again!')
        getPlayerSelection();    
    } else{
        let caseInsensitive = userInput.toLowerCase();
        
        if (caseInsensitive === 'rock'){
            return 'Rock'
        } else if (caseInsensitive === 'paper'){
            return 'Paper'
        } else if (caseInsensitive === 'scissors'){
            return 'Scissors'
    
        }else {
            alert('Wrong input, Try again!')
            getPlayerSelection();
        }       
    }
}




// Algo 1

function playRound(playerSelection, computerSelection){
    console.log('You chose '+playerSelection);
    console.log('Computer chose '+computerSelection);

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
    console.log(playerSelection);
    console.log(computerSelection);
}

// let numberOfRounds works because it doesn't get redeclared, 
//meaning, it doesn't start back from undefined, 
//addRounds function works, then stores the values outside of it, which is let numberOfRounds.
//If numberOfRounds was declared inside addRounds, it starts from scratch everytime.
//But is this the best way to do it?
let numberOfRounds;

//Paused here.

function addRounds(){


    if(numberOfRounds === undefined){
        return  numberOfRounds = 1;
    }else{
        return ++numberOfRounds ;
    }
};


function game(){

let round = addRounds();

alert('Round number: '+round);
    if(round<=5){


            

            let playerSelection = getPlayerSelection();
            if (playerSelection === null||playerSelection === undefined){
                return alert("Bye!");
            } else{
                let computerSelection = getComputerChoice();
                console.log('Checking the computer '+computerSelection);
                alert(playRound(playerSelection,computerSelection));
                game();
            }    

    }else{
        alert('Game Over!')
    }


    
}

game();


