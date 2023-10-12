// Reduce => Array

const myNum = [1, 2, 3,]
const myTottal = myNum.reduce(function (accumulator, currentvalue) {
    // console.log(`acc: ${accumulator} and currval:${currentvalue} `);
    return accumulator + currentvalue
}, 0)

// console.log(`Our tottal value: ${myTottal}`);

const shopingCart = [
    {
        itemName: 'Bread',
        price: 250
    },
    {
        itemName: 'Egg',
        price: 300
    },
    {
        itemName: 'Milk',
        price: 170
    },
    {
        itemName: 'Rice',
        price: 400
    },
    {
        itemName: 'Tea',
        price: 100
    },
]

const priceToPay = shopingCart.reduce((accoumudate, item) => accoumudate + item.price, 0)
console.log(priceToPay);