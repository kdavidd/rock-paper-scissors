
function playRound(playerSelection,ComputerSelection){
    console.log('\ncomputer choice is:' +ComputerSelection);
    console.log('Player choice is:' +playerSelection);
    if(playerSelection.toLowerCase()==='rock'){
        if(ComputerSelection==='rock') {
            console.log('DRAW');
        }else if(ComputerSelection==='paper'){
            console.log('You lost! Paper beats rock!');
        }else {
            console.log('You won! Rock beats scissors!');
        }

    } else if(playerSelection.toLowerCase()==='paper') {
        if(ComputerSelection==='paper') {
            console.log('DRAW');
        }else if(ComputerSelection==='rock'){
            console.log('You won! Paper beats rock!');
        }else {
            console.log('You lost! scissors beat paper!');
        }
    }else if(playerSelection.toLowerCase()==='scissors') {
        if(ComputerSelection==='scissors') {
            console.log('DRAW');
        }else if(ComputerSelection==='rock'){
            console.log('You lost! Rock beats scissors!');
        }else {
            console.log('You won! Scissors beat paper!');
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
    for(i=0;i<5;i++) {
     let playerSelection = prompt();
     let ComputerSelection = getComputerChoice();

    playRound(playerSelection,ComputerSelection);
    }
}
game();
