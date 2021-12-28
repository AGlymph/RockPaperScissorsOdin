let computerWinCount = 0;
let playerWinCount = 0;
/*round result comparsion variables*/
const win = 'Win';
const lose = 'Lose';
const tie ='tie';

//get the computer's guess
function computerPlay(){
    let choice =Math.floor(Math.random()*3)+1;
    if(choice == 1)
        return "Rock";
    else if(choice == 2)
        return "Paper";
    else 
        return "Scissors";
}

//check who wins the round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    switch(playerSelection){
        case "ROCK":
            if(computerSelection == "ROCK")
            {
                return tie;
            }   
            else if(computerSelection == "PAPER")
            {
                return lose;
            }
            else //computerSelection must be SCISSORS;
            {
                return  win;
            }  
            break;
        case "PAPER":
            if(computerSelection == "ROCK")
            {
                return win;
            }
            else if(computerSelection == "PAPER")
            {
                return tie;
            }
            else //computerSelection must be SCISSORS;
            {
                return  lose;
            }
            break;
        case "SCISSORS":
            if(computerSelection == "ROCK")
            {
                return lose;
            } 
            else if(computerSelection == "PAPER")
            {
                return win;
            }
            else //computerSelection must be SCISSORS;
            {
                return  tie;
            }
            break;
        default:
            return `${playerSelection} is not an option`;
    
    }
}
//print the result from the round
function roundResultString(playerSelection,computerSelection, result)
{
    if(result == win)
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(result == lose)
    {
        return `You Lose! ${playerSelection} does not beat ${computerSelection}`;
    }
    else
    {
        return`TIE! Both selected ${playerSelection}`;
    }
}
//increment total score 
function trackGameScore(resultWon)
{
    if(resultWon == win)
        playerWinCount++;
    else if((resultWon == lose))
        computerWinCount++;
}
//show final result
function printFinalResult()
{
    console.log("FINISHED!")
    if(playerWinCount > computerWinCount)
    {
        console.log(`You Win! You: ${playerWinCount}   Computer: ${computerWinCount}`);
    }
    else if(computerWinCount > playerWinCount)
    {
        console.log(`You Lose. You: ${playerWinCount}   Computer: ${computerWinCount}`);
    }
    else
    {
        console.log(`Tie. You: ${playerWinCount}   Computer: ${computerWinCount}`);
    }
}
//play game
function game(){

    for (let r = 1; r<=5; r++){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResultString(playerSelection, computerSelection, roundResult));
        trackGameScore(roundResult);
    }
    
    printFinalResult();
}
//start game
game();