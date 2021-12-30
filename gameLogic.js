let computerWinCount = 0;
let playerWinCount = 0;
let pointsToWin = 5;

/*round result comparsion variables*/
const win = 'Win';
const lose = 'Lose';
const tie ='tie';
const error = 'error';


//get html sections for information display
const selections = document.querySelectorAll('.selection');
const roundResultSection = document.querySelector('.round-result');
const maxScoreCounter = document.querySelector('.max-score');
const scoreBoard = document.querySelector('.current-score');
const gameResult = document.querySelector('.game-result');
const changeScoreButton = document.querySelector('#change-points');
const resetButton = document.querySelector('#reset-button');

//attach events to buttons
selections.forEach(button => button.addEventListener('click', ()=> playRound(button.id, computerPlay())));
resetButton.addEventListener('click', () =>reset());

//on "change score button" click ask user for new score, validate, and then show
changeScoreButton.addEventListener('click', () =>{
    pointsToWin = prompt("Enter new max score: ")
    if(!(pointsToWin > 0))
        pointsToWin = 5;
    maxScoreCounter.textContent = `Points to win: ${pointsToWin}`;
});

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
    let result = tie;

    switch(playerSelection){
        case "ROCK":
            if(computerSelection == "ROCK")
            {
                result = tie;
            }   
            else if(computerSelection == "PAPER")
            {
                result = lose;
            }
            else //computerSelection must be SCISSORS;
            {
                result =  win;
            }  
            break;
        case "PAPER":
            if(computerSelection == "ROCK")
            {
                result = win;
            }
            else if(computerSelection == "PAPER")
            {
                result = tie;
            }
            else //computerSelection must be SCISSORS;
            {
                result =  lose;
            }
            break;
        case "SCISSORS":
            if(computerSelection == "ROCK")
            {
                result = lose;
            } 
            else if(computerSelection == "PAPER")
            {
                result = win;
            }
            else //computerSelection must be SCISSORS;
            {
                result =  tie;
            }
            break;
        default:
            result = error;
    
    }

    displayRoundResult(playerSelection,computerSelection,result);
    trackGameScore(result);
}
//print the result from the round
function displayRoundResult(playerSelection,computerSelection, result)
{
    if(result == win)
    {
        roundResultSection.textContent =`You Win! ${playerSelection} beats ${computerSelection}` ;
    }
    else if(result == lose)
    {
        roundResultSection.textContent =`You Lose! ${playerSelection} does not beat ${computerSelection}` ;
    }
    else
    {
        roundResultSection.textContent =`TIE! Both selected ${playerSelection}`;
    }
}
//increment total score 
function trackGameScore(resultWon)
{
    if(resultWon == win)
        playerWinCount++;
    else if((resultWon == lose))
        computerWinCount++;

    updateScoreBoard(playerWinCount,computerWinCount);

    if(playerWinCount >= pointsToWin || computerWinCount >= pointsToWin)
    {
        printFinalResult();
    }
}
//show final result
function printFinalResult()
{
    roundResultSection.textContent="";
    if(playerWinCount > computerWinCount)
    {
       gameResult.textContent = "You Win!";
    }
    else if(computerWinCount > playerWinCount)
    {
       gameResult.textContent = "You Lose.";
    }
    else
    {
       gameResult.textContent = "Tie.";
    }
}

function updateScoreBoard(playerScore = 0, computerScore = 0)
{   
    scoreBoard.textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
}

function reset(){
    playerWinCount = 0;
    computerWinCount = 0;
    updateScoreBoard();
    roundResultSection.textContent="";
    gameResult.textContent ="";
}
