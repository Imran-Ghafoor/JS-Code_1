           // Number

const num = 400

// console.log(num);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 125.789
console.log(otherNumber.toPrecision(3));

const bigNumber = 100000;
// console.log(bigNumber.toLocaleString())
// console.log(bigNumber.toLocaleString('en-PK'));


          //+++++++++++++++++++++++++////+++++++++++++++++++++++++++++//

                       // +++++++++ Math  ++++++++++++ //

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.9));  
// console.log(Math.sqrt(40));
// console.log(Math.min(2,4,6,9));
// console.log(Math.max(2,4,6,8,9,10));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

// console.log(Math.random() * (min - max + 1) + min);    // we need value without digit

console.log(Math.floor(Math.random() * (max - min + 1))+ min);