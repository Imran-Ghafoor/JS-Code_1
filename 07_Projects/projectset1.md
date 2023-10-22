# Projects Related to DOM

## Project Link

[click here](https://github.com/Imran-Ghafoor/JS-Mini-Projects/tree/main/1-ColorChanger)

# Solution Code

## Project 1

```Javascript
console.log(imran);
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
    // console.log(button)

    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
    });
});
```

# Project 2

## Project Link

[Click here](https://github.com/Imran-Ghafoor/JS-Mini-Projects/tree/main/2-BMICalculator)

```javascript
console.log(Imran);
const form = document.querySelector("form");

// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const BMI = weight / ((height * height) / 1000).toFixed(2);

    // Result Show
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
```

# Project 3

## Project Link

[Click here](https://github.com/Imran-Ghafoor/JS-Mini-Projects/tree/main/3-DigitalClock)

```javascript
console.log(imran);
const clock = document.getElementById("clock");
// const cock = document.querySelector('clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  // console.log(clock);
}, 1000);
```

# Project 4

## Project link

[click here](https://github.com/Imran-Ghafoor/JS-Mini-Projects/tree/main/4-GuessTheNumber)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGmae = true;

// Methods

if (playGmae) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please Enter a Number More Than 1 ");
  } else if (guess > 100) {
    alert("Please Enter a Number Less Than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`(Game Over) Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGmae = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${1 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGmae = true;
  });
}
```
