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

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}   
