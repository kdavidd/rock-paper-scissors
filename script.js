
const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.margin = "0";
body.style.height = "100vh";


const content = document.querySelector("#content");
content.style.display = 'flex';
content.style.flexDirection = 'column';
content.style.alignItems = 'center';
content.style.margin = '0';
content.style.height = '100vh';
content.style.width = "80%";

const buttons = document.querySelector(".buttons")
buttons.style.margin = "40px 0px";
buttons.style.display = "flex";
buttons.style.justifyContent = "center";
buttons.style.gap = '40px';

const result = document.querySelector(".result");
result.style.display = "flex";
result.style.justifyContent = 'center';
result.style.alignItems = 'center';
result.style.margin ="100px";
result.style.gap = '100px';


let resultLeft = document.createElement('h1');
resultLeft.textContent = "PLAYER WON: ";

let resultCenter = document.createElement('h1');
resultCenter.textContent = "DRAW";
resultCenter.style.fontSize = "80px";
resultCenter.style.display = 'none';


let resultRight = document.createElement('h1');
resultRight.textContent = "COMPUTER WON: ";

result.style.backgroundColor = "rgba(0, 128, 0, 0.4)";
result.style.border = "4px dashed green"

result.style.height = "250px";
result.style.width = "110%";
result.style.padding = "50px";

result.append(resultLeft);
result.append(resultCenter);
result.append(resultRight);

const buttons2 = document.querySelectorAll(".btn");

let playerSelection = '';

buttons2.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        let ComputerSelection = getComputerChoice();        
        playRound(playerSelection,ComputerSelection);
        
    })
    
});

let computerRoundWon = 0;
let userRoundWon = 0;

function playRound(playerSelection,ComputerSelection){
    // console.log('\ncomputer choice is:' +ComputerSelection);
    // console.log('Player choice is:' +playerSelection);
    if(playerSelection==='rock'){
        if(ComputerSelection==='rock') {
            resultCenter.style.display = 'flex';

        }else if(ComputerSelection==='paper'){
            roundsWon('computer');
            resultCenter.style.display = 'none';
        }else {
            roundsWon('user');
            resultCenter.style.display = 'none';
        }

    } else if(playerSelection==='paper') {
        if(ComputerSelection==='paper') {
            resultCenter.style.display = 'flex';

        }else if(ComputerSelection==='rock'){
            roundsWon('user');
            resultCenter.style.display = 'none';
        }else {
            roundsWon('computer');
            resultCenter.style.display = 'none';
        }
    }else if(playerSelection==='scissors') {
        if(ComputerSelection==='scissors') {
            resultCenter.style.display = 'flex';
        }else if(ComputerSelection==='rock'){
            roundsWon('computer');
            resultCenter.style.display = 'none';
        }else {
            roundsWon('user');
            resultCenter.style.display = 'none';
        }
    }
}

function getComputerChoice() {
    let result;
    let choice= Math.floor(Math.random()*3);
    if(choice===0) {
        result='rock';
    }else if(choice===1) {
        result='paper';
    }else {
        result='scissors';
    }
    return result;

}

let msgWinnerPlayer = "PLAYER WON: \n";
let msgWinnerComputer = "COMPUTER WON: \n";
let winnerText = document.querySelector(".winnerText");
let winnerPlaceHolder = "Winner is: "; 


let playNew = function() {
    let playAgainButton = document.createElement('div');
    playAgainButton.style.display = "flex";
    playAgainButton.style.justifyContent = "center";
    playAgainButton.style.alignItems = "center";
    playAgainButton.style.cursor = "pointer";

    playAgainButton.textContent = "PLAY AGAIN?";
    playAgainButton.style.width = "400px";
    playAgainButton.style.height = "200px";
    playAgainButton.style.border = "4px dashed green"
    playAgainButton.style.backgroundColor = "rgba(0, 128, 0, 0.4)";
    buttons.style.display = 'none';
    result.style.display = 'none';
    content.append(playAgainButton);

    
    playAgainButton.addEventListener('click', ()=> {
        playAgainButton.remove();
        buttons.style.display = 'flex';
        result.style.display = 'flex';
        userRoundWon = 0;
        computerRoundWon = 0;
        winner = null;
        removeWinner();
    

    }, {
        once: true
    });
}
function roundsWon(winner) {

    if(winner===undefined) {
        playRound();
        
    }

    if(winner==='user') {
        userRoundWon++;
        resultLeft.textContent = msgWinnerPlayer+userRoundWon;
    }else if(winner==='computer'){
        computerRoundWon++;
        resultRight.textContent = msgWinnerComputer+computerRoundWon;
    }

     if(userRoundWon===5 || computerRoundWon===5) {
        playNew();
        resultLeft.textContent = msgWinnerPlayer;
        resultRight.textContent = msgWinnerComputer;
        
        let winnerDiv = document.querySelector('.winner');
        let whoWon = document.createElement('h1'); 

        if(userRoundWon==5) {
            winner = 'user';
            whoWon.textContent = winnerPlaceHolder +"player";
            winnerDiv.style.display = 'flex';


        } else if(computerRoundWon == 5) {
            winner ='computer';
            whoWon.textContent = winnerPlaceHolder +"computer";
            winnerDiv.style.display = 'flex';
        }
        winnerDiv.append(whoWon);
        return true;
        
    }
    
}
let removeWinner = function() {
    let winnerDiv = document.querySelector('.winner');
    let whoWon = document.querySelector('.winner>h1');

    winnerDiv.style.display = 'none';
    whoWon.remove();
}
