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
