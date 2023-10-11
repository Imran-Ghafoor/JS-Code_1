// foreach Loop

const coding = ['js', 'py', 'java', 'ruby', 'cpp']

// coding.forEach(function (items) {
//     console.log(items);
// })

// coding.forEach((items) => {    // Arrow function also use in foreach loop
// console.log(items);
// })


// Another way
// function printMe(items) {
//     console.log(items);
// }
// coding.forEach(printMe)


coding.forEach((items, index, arr) => {   // loop have many parameter value
    console.log(items, index, arr);
})




