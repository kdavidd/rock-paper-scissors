
// dom

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.margin = "0";
body.style.height = "100vh";

// body.style.backgroundColor = "bisque";

const content = document.querySelector("#content");
content.style.display = 'flex';
content.style.flexDirection = 'column';
content.style.flexWrap = "wrap";
content.style.margin = '0';

content.style.width = "80%";

const buttons = document.querySelector(".buttons")
buttons.style.margin = "50px 0px";
buttons.style.display = "flex";
buttons.style.justifyContent = "center";
buttons.style.gap = '50px';

const result = document.querySelector(".result");
result.style.display = "flex";
result.style.justifyContent = 'center';
result.style.alignItems = 'center';

result.style.gap = '100px';

let resultLeft = document.createElement('h1');
resultLeft.textContent = "PLAYER WON: ";

let resultRight = document.createElement('h1');
resultRight.textContent = "COMPUTER WON: ";


result.style.backgroundColor = "rgba(0,0,0,0.4)";
result.style.height = "450px";

result.append(resultLeft);
result.append(resultRight);

const buttons2 = document.querySelectorAll(".btn");

let playerSelection = '';

buttons2.forEach(button => {
    button.style.backgroundColor = 'red';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        playerSelection = button.id;
        game();
    })
    
});




let computerRoundWon = 0;
let userRoundWon = 0;

function playRound(playerSelection,ComputerSelection){
    console.log('\ncomputer choice is:' +ComputerSelection);
    console.log('Player choice is:' +playerSelection);
    if(playerSelection==='rock'){
        if(ComputerSelection==='rock') {
            console.log('DRAW');
        }else if(ComputerSelection==='paper'){
            console.log('You lost! Paper beats rock!');
            roundsWon('computer');

        }else {
            console.log('You won! Rock beats scissors!');
            roundsWon('user');

        }

    } else if(playerSelection==='paper') {
        if(ComputerSelection==='paper') {
            console.log('DRAW');
        }else if(ComputerSelection==='rock'){
            console.log('You won! Paper beats rock!');
            roundsWon('user');

        }else {
            console.log('You lost! scissors beat paper!');
            roundsWon('computer');

        }
    }else if(playerSelection==='scissors') {
        if(ComputerSelection==='scissors') {
            console.log('DRAW');
        }else if(ComputerSelection==='rock'){
            console.log('You lost! Rock beats scissors!');
            roundsWon('computer');

        }else {
            console.log('You won! Scissors beat paper!');
            roundsWon('user');

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



function game() {
    
    roundsWon();
     let ComputerSelection = getComputerChoice();

    playRound(playerSelection,ComputerSelection);
}

let msgWinnerPlayer = "PLAYER WON: ";
let msgWinnerComputer = "COMPUTER WON: ";
let winnerText = document.querySelector(".winnerText");
let winnerPlaceHolder = "Winner is: "; 


let playNew = function() {
    let playAgainButton = document.createElement('div');
    playAgainButton.style.display = "flex";
    playAgainButton.style.justifyContent = "center";
    playAgainButton.style.cursor = "pointer";

    playAgainButton.textContent = "PLAY AGAIN?";
    playAgainButton.style.width = "400px";
    playAgainButton.style.height = "200px";
    playAgainButton.style.backgroundColor = "red";

    buttons.style.display = 'none';
    result.style.display = 'none';
    content.append(playAgainButton);

    playAgainButton.addEventListener('click', ()=> {
        playAgainButton.remove();
        buttons.style.display = 'flex';
        result.style.display = 'flex';
        userRoundWon = 0;
        computerRoundWon = 0;
        winnerText.textContent = winnerPlaceHolder;
    

    }, {
        once: true
    });
}
function roundsWon(winner) {
    if(userRoundWon===5 || computerRoundWon===5) {
        playNew();
        resultLeft.textContent = msgWinnerPlayer;
        resultRight.textContent = msgWinnerComputer;

        let winnerDiv = document.querySelector('.winner');
        let whoWon = document.createElement('h1'); 
        winnerDiv.append(whoWon);


        

        if(userRoundWon==5) {
            winner = 'user';
            whoWon.textContent = winnerPlaceHolder +"player";
            
            

        } else if(computerRoundWon == 5) {
            winner ='computer';
            whoWon.textContent = winnerPlaceHolder +"computer";
            

        }
        return true;
        
    }else {
    if(winner==='user') {
        ++userRoundWon;
        resultLeft.textContent = msgWinnerPlayer+userRoundWon;
        console.log('user won '+userRoundWon);
    }else if(winner==='computer'){
        ++computerRoundWon;
        resultRight.textContent = msgWinnerComputer+computerRoundWon;

        console.log('computer won '+computerRoundWon);
    }else {
        console.log('draw');
    }
}
}
