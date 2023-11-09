class User {
    constructor(gmail, password) {
        this.gmail = gmail
        this.password = password
    }
    get gmail() {
        return this._gmail.toUpperCase()
    }
    set gmail(value) {
        this._gmail = value
    }
    get password() {
        // return this._password.toUpperCase()
        return `${this._password}imran`
    }
    set password(value) {
        this._password = value
    }
}
const imran = new User('imran@gmail.com', 'abx')
console.log(imran.gmail);
console.log(imran.password);