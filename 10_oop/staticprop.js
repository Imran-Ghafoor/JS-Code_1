class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }
    static createId() {     // static gives limitted access
        return '123'
    }
}
const imran = new User('khan')
// console.log(imran.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const khan = new Teacher('irfan', 'irfan@gmail.com')
khan.logMe();
console.log(khan.createId());     // not run because of statics property is apply for lomitted acces