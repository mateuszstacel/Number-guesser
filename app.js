// Game values

let min = 1,   
    max = 20,
    winningNum = randNum(min, max),
    guessesLeft = 3;

    //UI elements
    const game = document.getElementById('game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess 
guessBtn.addEventListener('click', function(){
    
   let guess = parseInt(guessInput.value);

   //check for win
   if(guess === winningNum){
        winCase();
   } if(guessesLeft === 0) {
       loseCase(guessesLeft, winningNum);
   } else {
            //wrong attempt
            setMessage(`${guess} is wrong number, You have ${guessesLeft} more try`, 'red')
            //Check if number is in range
            checkRange(guess)
            guessInput.value = '';   
   }
})

//set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//Check if number is in range
function checkRange(guess) {
    if( guess < min || guess > max ){
        setMessage('Please enter the number from the range', 'red');
        } else {
            guessesLeft -= 1
        }
}
// check for lose case
function loseCase(guessesLeft, winningNum) {
    setMessage(`You Lose! winning number is ${winningNum}`, 'red')
    guessesLeft = 3
    playAgain();
}
//check foor winn case

function winCase(){
        //Disable Input
        guessInput.disabled = true;
        // Change color border
        guessInput.style.borderColor = 'green';
        // set message
        setMessage('You WIN!, CONGRATULATIONS!', 'green')
        guessesLeft = 3
} 
//play again

function playAgain() {
    guessBtn.value = "Play Again";
    guessBtn.addEventListener('click', function(){
    location.reload();
    })
}
// rundom number

function randNum(min, max) {
    Math.floor(Math.random() * (+max - +min)) + +min;
}


