let random = parseInt(Math.random() *100 + 1);

// querySelector use karke hum pehle saari values ko select kar lete hai
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); // isse humari values array mein bharti chali jayegi
const remaining = document.querySelector('.lastResult'); // lastResult matlab kitne chances bache hue hai
const LowOrHigh = document.querySelector('.LowOrHigh');  // batayenge ki value result se low hai ya fir high
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [] // isme hum user ke previous guesses ko store karenge aur usse wahi time dikha denge
// taaki woh same value ko dobara guess na kare

let numGuess = 1 // user ne abhi tak kitne guess kiye hai

let playGame = true // taaki game start toh ho paye

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();             // form mein hai isiliye use karte hi hai 
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}


function validateGuess(guess) { //bohot use hoga aage ke projects mein
    // yeh use hoga to see ki user ne number hi guess kiya hai ya fir aur kuch like negative number, alphabets
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if((guess < 1)){
        alert('Please enter a number more than 1');
    }
    else if((guess > 100)){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    // yeh use hoga to check ki value low hai ya fir high
    if(guess === random){
        displayMessage(`You guessed it right`);
        endGame()
    } else if (guess < random){
        displayMessage(`Number is TOOO low`);

    } else if(guess > random){
        displayMessage(`Number is TOOO High`);
    }
}


function displayGuess(guess) {
    // sirf user ke guess display karega
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


function displayMessage(message) {
    // display karenge ki correct guess hai ya nahi
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    // game khatam , matlab guesses khatam ho chuke hai uske liye
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    // naya game start karna hai uske liye
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
    random = parseInt(Math.random() *100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

        playGame = true;
    })
}


