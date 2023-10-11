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
    // console.log(items, index, arr);
})

// Objects in Array

const myCodding = [
    {
        languageNmae: 'javascript',
        languageFileName: 'Js'
    },
    {
        languageNmae: 'Python',
        languageFileName: 'Py'
    },
    {
        languageNmae: 'Ruby On Rails',
        languageFileName: 'Rb'
    }
]
myCodding.forEach((items) => {
    console.log(items.languageFileName);
})



