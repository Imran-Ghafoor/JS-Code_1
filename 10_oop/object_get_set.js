const User = {
    _gmail: 'khan@gmail.com',
    _password: '@786',

    get gmail() {
        return this._gmail.toUpperCase()
    },
    set gmail(value) {
        this._gmail = value
    }
}
const imran = Object.create(User)
console.log(imran.gmail);