let randomNumber = parseInt(Math.random() * 100 + 1);
const gameSec = document.getElementById('mainSec');
const inputBox = document.getElementById('inputBox');
const message = document.getElementById('message');
const previousGuess = document.getElementById('userGuess');
const chances = document.getElementById('number');
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');

let numGuess = 1;
let prevGuess = [];

function playGame() {
    inputBox.disabled = false;
    btnOne.disabled = true;
    btnTwo.disabled = false;
    btnThree.disabled = false;
}

function guessNumber() {
    const userGuess = parseInt(inputBox.value);
    if(isNaN(userGuess) || userGuess === '' || userGuess < 1 || userGuess > 100){
        message.innerHTML = 'Please enter a valid number';
    }

    else if(userGuess < randomNumber){
        message.innerHTML = 'Your guess is low. Please guess the right number'
        prevGuess.push(userGuess);
        previousGuess.innerHTML = prevGuess.join(', ');
        numGuess++;
        chances.innerHTML =`${11 - numGuess}`;
    }

    else if(userGuess > randomNumber){
        message.innerHTML = 'Your guess is high. Please guess the right number'
        prevGuess.push(userGuess);
        previousGuess.innerHTML = prevGuess.join(', ');
        numGuess++
        chances.innerHTML =`${11 - numGuess}`;
    }

    else if (userGuess === randomNumber) {
        message.innerHTML = 'Congratulations!! You won the game.'
        inputBox.disabled = true;
        btnOne.disabled = true;
        btnTwo.disabled = true;
        btnThree.disabled = true;
    }

    if (numGuess === 11) {
        message.innerHTML = `Sorry! the game is over. The number was ${randomNumber}`;
        inputBox.disabled = true;
        btnOne.disabled = true;
        btnTwo.disabled = true;
        btnThree.disabled = true;
        const newGameBtn = document.createElement('button');
        newGameBtn.innerHTML = `<p><b>Start new game</b></p>`
        newGameBtn.style.marginLeft = "20px";
        newGameBtn.style.marginTop = "20px";
        gameSec.appendChild(newGameBtn);
        newGameBtn.onclick = function() {
            newGameBtn.remove();
            newGame();
            playGame();
        };
    }

    inputBox.value = '';
}

function reset() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    prevGuess = [];
    previousGuess.innerHTML = '';
    message.innerHTML = '';
    chances.innerHTML = '10';
}
function newGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    prevGuess = [];
    previousGuess.innerHTML = '';
    message.innerHTML = '';
    chances.innerHTML = '10';
    inputBox.disabled = true;
    btnOne.disabled = false;
    btnTwo.disabled = true;
    btnThree.disabled = true;
}