// For Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
// if (element == 5) {
//     console.log("5 is best number");
// } 
// console.log(element);
// }

// for (let i = 1; i <= 5; i++) {
// console.log(`outer loop value:${i}`);
// for (let j = 1; j <= 5; j++) {
// console.log(`inner loop value:${j} and outer loop ${i}`);

// console.log(i + '*' + j + ' = ' + i * j);



// }

// }

// loop with array

let myArray = ['superman', 'batman', 'spiderman']
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    // console.log(element);

}

// break statment

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);

}

// continue statment


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}





