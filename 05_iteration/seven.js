// Map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = myNumbers.map((num) => num + 10)
// console.log(newNumbers);

//     with foreach Loop
myNumbers.forEach((num) => {
    // console.log(num + 10);
})

// Channing method
const newNum = myNumbers                // in which we use methods multitimes
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num <= 50)

console.log(newNum);
