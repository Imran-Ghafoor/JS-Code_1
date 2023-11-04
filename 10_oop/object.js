function multiplyBy5(num) {
    return num * 5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.prinMe = function () {
    console.log(`price is ${this.score}`);
}

const milk = new createUser('milk', 150)
const tea = new createUser('tea', 250)
milk.prinMe();
tea.prinMe()