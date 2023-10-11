// For of Loop

// ["", "", ""]                // this are Array specific loop
// [{} , {}, {}]

const arr = [1, 2, 3, 4, 5]    // iterators is all like Array ,string, 
//object all is iterators where you linke put the loop
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is: ${greet}`);
}
