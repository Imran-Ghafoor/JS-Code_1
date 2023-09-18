const user= {
    username: "imran",
    price: 299,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);  // this. is used to refer/select the current content
        console.log(this);
    }
}

// user.welcomeMessage()
// user. username = "khanBaba"
// user.welcomeMessage()
// console.log(this);

// const one = function(){
    //let username = "baba"
//     console.log(this.username);
// }
// one();

// const one = () => {
//     let username = "baba"
//     console.log(this.username);
// }
// one();

// basic Arrow ffunction

// const addTwo = (num1, num2) => {
//     return num1 + num2 

const addTwo = (num1, num2) => num1 + num2   // in arrow function if put the curly brases need to write return , But if put pranthesis not need to write return function 

console.log(addTwo(2, 3));                    // implicit return / explicit return

