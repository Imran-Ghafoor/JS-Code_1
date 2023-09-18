// Function key ///

function myName(){
    console.log("I");
    console.log("M");
    console.log("R");
    console.log("A");
    console.log("N");

}
// myName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2                  // return when print the value
    return result
}
// addTwoNumbers(5, 5) 

const result = addTwoNumbers(5, 5) 
// console.log("result:", result );            

function loginUserMessage(username){
    return `${username} just logged in `

}
// console.log(loginUserMessage("Imran"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log (calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,600,900));

const user= {                   // Object create
    username: "imran",
    price: 299
    // prices: 299             // type checking important
}

function handleObject(anyobject){            // Now in this how to use object in function
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);

}
// handleObject(user)

// other way to define the object
handleObject({
    username: "khan",
    price: 300
})

const myNewArray = [200, 400, 100, 900]           // pass the Array in function

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 ,400, 100, 900]));

