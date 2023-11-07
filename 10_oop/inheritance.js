class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const variable = new Teacher('Imran', 'imran@gmail.com', '123')
variable.addCourse()

const variable2 = new User('ImranKhan')
variable2.logMe()

console.log(variable === variable2);
console.log(variable instanceof Teacher);