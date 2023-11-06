// class User {
//     constructor(username, gmail, password) {
//         this.username = username
//         this.gmail = gmail
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeNmae() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const value = new User('imran', 'imran@gmail.com', '123')
// console.log(value.encryptPassword());
// console.log(value.changeNmae());

// Behind the Scene

function User2(username, gmail, password) {
    this.username = username
    this.gmail = gmail
    this.password = password
}
User2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User2.prototype.changeName = function () {
    return `${this.username.toUpperCase()}`
}
const value = new User2('khan', 'khan@gmail.com', '123')
console.log(value.encryptPassword());
console.log(value.changeName());