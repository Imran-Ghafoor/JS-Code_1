// Reduce => Array

const myNum = [1, 2, 3,]
const myTottal = myNum.reduce(function (accumulator, currentvalue) {
    console.log(`acc: ${accumulator} and currval:${currentvalue} `);
    return accumulator + currentvalue
}, 0)

console.log(`Our tottal value: ${myTottal}`);