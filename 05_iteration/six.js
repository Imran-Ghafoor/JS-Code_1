// Filter => //Array

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.filter((num) => num > 4)  // filter also gives callback function
// console.log(newNums);

// const newNums = myNum.filter((num) => {    // if use {} return must apply
// return num > 4
// })

const newNum = []
myNum.forEach((num) => {            // with using foreach loop
    if (num > 4) {
        newNum.push(num)
    }
})
// console.log(newNum);

// Real Work example

const books = [
    {
        title: 'book one', genre: 'Science', publish: '2009', edition: '2014'
    },
    {
        title: 'book two', genre: 'History', publish: '2010', edition: '2018'
    },
    {
        title: 'book three', genre: 'Science', publish: '2012', edition: '2020'
    },
    {
        title: 'book four', genre: 'History', publish: '2015', edition: '2021'
    },
    {
        title: 'book five', genre: 'Game', publish: '1980', edition: '2022'
    },
    {
        title: 'book six', genre: 'History', publish: '1999', edition: '2023'
    },
]
let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => bk.publish > 2000 && bk.genre === 'History')
userBooks = books.filter((bk) => bk.genre === 'Game')
console.log(userBooks);


