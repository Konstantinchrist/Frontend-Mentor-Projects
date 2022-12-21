// windows;
const mainWindow = document.querySelector('main');
const optionsMenu = document.getElementById('options');
const resultMenu = document.getElementById('result');
const rulesMenu = document.getElementById('rulesSection');

// buttons
const playAgainButton = document.getElementById('playAgain');
const showRulesButton = document.getElementById('rulesButton');
const closeRules = document.getElementById('close');

// options
const paperButton = document.getElementById('paperOption');
const scissorsButton = document.getElementById('scissorsOption');
const rockButton = document.getElementById('rockOption');

// results
const yourPaper = document.getElementById('yourPaper');
const yourScissors = document.getElementById('yourScissors');
const yourRock = document.getElementById('yourRock');
const yourResults = Array.from(document.getElementsByClassName('yourResult'))

const hisPaper = document.getElementById('hisPaper');
const hisScissors = document.getElementById('hisScissors');
const hisRock = document.getElementById('hisRock');
const hisResults = Array.from(document.getElementsByClassName('hisResult'))

const resultText = document.getElementById('resultText');
const score = document.getElementById('score');

let yourChoiceValue;
let hisChoiceValue;
let result;
let randomNumber = 0;
let scoreValue = 0;

yourResults.forEach(hide); hisResults.forEach(hide);

// functions
function hide(element){
    element.style.display = 'none';
    // console.log(element + ' is hidden now')
}

function show(element){
    element.style.display = 'block';
    // console.log(element + ' is shown now')
}

function loadResult(){ 
    loadUsersChoice(); loadComputerChoice(); compareChoices(); 
    optionsMenu.style.display = 'none'; resultMenu.style.display = 'block';
    resultText.innerHTML = result; score.innerHTML = scoreValue;
}

// load computer choice
function loadComputerChoice(){
    randomNumber = Math.floor((Math.random() * 3) + 1);
    hisResults.forEach(hide);
    if (randomNumber == 3){
        show(hisScissors);
        hisChoiceValue = 'scissors';
    }
    if (randomNumber == 2){
        show(hisPaper);
        hisChoiceValue = 'paper';
    }
    if (randomNumber == 1){
        show(hisRock);
        hisChoiceValue = 'rock';
    }
    // console.log('loadComputerChoiceComplete | computersCoice: ' + hisChoiceValue)
}

// load computer choice
function loadUsersChoice (){
    yourResults.forEach(hide);
    if (yourChoiceValue == 'rock'){
        show(yourRock);
    }
    if (yourChoiceValue == 'paper'){
        show(yourPaper);
    }
    if (yourChoiceValue == 'scissors'){
        show(yourScissors);
    }
    // console.log('LoadUsersChoiceComplete | usersCoice: ' + yourChoiceValue);
}

// compare choices
function compareChoices(){
    if (yourChoiceValue == hisChoiceValue){
        result = 'Remis';
    }
    if (yourChoiceValue == 'rock'){
        if (hisChoiceValue == 'paper'){
            result = 'You lost';
        }
        if (hisChoiceValue == 'scissors'){
            result = 'You won';
            scoreValue++;
        }
    }
    if (yourChoiceValue == 'paper'){
        if (hisChoiceValue == 'rock'){
            result = 'You won';
            scoreValue++;
        }
        if (hisChoiceValue == 'scissors'){
            result = 'You lost';
        }
    }
    if (yourChoiceValue == 'scissors'){
        if (hisChoiceValue == 'rock'){
            result = 'You lost';
        }
    
        if (hisChoiceValue == 'paper'){
            result = 'You won';
            scoreValue++;
        }
    }
    console.log(yourChoiceValue + ' vs ' + hisChoiceValue + ' => ' + result);
}

// detect users choice
paperButton.addEventListener('click', () => {
    yourChoiceValue = 'paper';
    setTimeout(loadResult, 100);
})

scissorsButton.addEventListener('click', () => {
    yourChoiceValue = 'scissors';
    setTimeout(loadResult, 100);
})

rockButton.addEventListener('click', () => {
    yourChoiceValue = 'rock';
    setTimeout(loadResult, 100);
})

// playAgain
playAgainButton.addEventListener('click', () => {
    hide(resultMenu); show(optionsMenu);
})

// show rules
showRulesButton.addEventListener('click', () => {
    hide(mainWindow); show(rulesMenu);
})

closeRules.addEventListener('click', () => {
    hide(rulesMenu); show(mainWindow);
})