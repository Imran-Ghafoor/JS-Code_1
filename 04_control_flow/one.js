// Control Flow
// If statment


// const isUserLoggedIn = true
// const temperature = 60

// if(temperature === 70){
// console.log("less than 60");
// }else{
//     console.log("temp grater than 60");
// }
// console.log("executed");

// <,>, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score > 100){
//     let power = "fly"f
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);        // scope concept

// reall life example 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGmail || loggedInFromGmail){
    console.log("User Logged In");
}

