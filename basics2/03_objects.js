// 2 things are important if you grip on JS //
// 1. Obbjects  2. Events   ///
// we declare objects in two from 1. constructor 2. literals 
// Singleton > when object is created with constructor singleton created.

// Object Literals

// Object.ceate > other way to declare object >> use in construtor method >> also know singleton//
const mySym =  Symbol("Key1")

const JsUser = {
    name: "imran",
    "full name": "imran kahn",
    age: 20,
    [mySym ]: "myKey1",
    location: "lahore",
    email: "imran@gmail.com",
    logedIn: false,
    lastLogenIn: ["Monday", "Saturday"]
}

//ways to access objects>
console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym] );

JsUser.email = "imrankhan@gmail.com"     // How to update object value //

Object.freeze(JsUser);                   // how to freeze the object

JsUser.email = "kahanbaba.com"
console.log(JsUser);

