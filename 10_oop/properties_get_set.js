// Function getter_setter

function User(gmail, password) {
    this._gmail = gmail
    this._password = password

    Object.defineProperty(this, 'gmail', {
        get: function () {
            return this._gmail.toUpperCase()
        },
        set: function (value) {
            this._gmail = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            // return this._password.toUpperCase()
            return `${this._password}done`
        },
        set: function (value) {
            this._password = value
        }
    })
}
const imran = new User('imrankhan@gmail', '786')
console.log(imran.gmail);
console.log(imran.password);