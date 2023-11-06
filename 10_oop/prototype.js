// let myName = 'imran   '
// console.log(trueLength());
// console.log(myName.trim().length);


let heros = ['spiderman', 'Thor']

let heroPower = {
    spiderman: 'sling',
    thor: 'hammer',

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.imran = function () {
    console.log(`imran is present in all abject`);
}
Array.prototype.heyimran = function () {
    console.log(`imran is presnt in all array`);
}

// heroPower.imran()
// heros.imran()
// heros.heyimran()
// heroPower.heyimran()


// Inheritance
const user = {
    name: 'imran',
    mail: 'imran@gmail.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = 'imrankhan     '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`The length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
'imran      '.trueLength()
'game'.trueLength()

