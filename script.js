let randomnumber = parseInt(Math.random() * 100 + 1);
console.log(randomnumber)


const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const previous = document.querySelector('.prevg');
const remaining = document.querySelector('.remaining');
const loworhi = document.querySelector('.loworhi');
const results = document.querySelector('.resultsparas');


const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if (playgame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess)
  });

}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  }
  else if (guess < 1) {
    alert("please enter a number greater than 1");
  }
  else if (guess > 100) {
    alert("please enter a number less than 100");
  }
  else {
    prevguess.push(guess)
    if (numguess === 10) {
      displayGuess(guess);
      displayMessage(`game over.Random number was ${randomnumber}`);
      endgame()
    }
    else {
      displayGuess(guess)
      checkguess(guess)
    }
  }

}
function checkguess(guess) {
  if (guess === randomnumber) {
    displayMessage(`You gussed it right`)
    endgame()
  } else if (guess < randomnumber) {
    displayMessage('number is too low')
  }
  else if (guess > randomnumber) {
    displayMessage(`number is too high`)
  }

}
function displayGuess(guess) {
  userinput.value = '';
  previous.innerHTML += `${guess},`;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;

}
function displayMessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2`

}
function endgame() {
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<button class="newGame">Start new Game<button>`;
  results.appendChild(p);
  playgame = false;
  newgame()
}

function newgame() {
  const newgamebutton = document.querySelector('.newGame')
  randomnumber = parseInt(Math.random() * 100 + 1);
  newgamebutton.addEventListener('click',function(e){
      prevguess = [];
      numguess = 1;
      previous.innerHTML = '';
      remaining.innerHTML = `${11 - numguess}`;
      userinput.removeAttribute('disabled');
      results.removeChild(p);
      playgame = true;
    loworhi.innerHTML = '';

    });



}

