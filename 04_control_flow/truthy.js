const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Email not found");
}

// Falsy values

// false , 0 ,-0 , BigInt 0n , "" , null , undefined , NaN ,

// Truthy Value

// "0" , [] , 'false' , " " , {} , funciton(){} ,  

if (userEmail.length === 0) {               // if check array in API / database
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false             

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

