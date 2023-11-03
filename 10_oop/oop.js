// javassript literals
const user = {
    username: 'imran',
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        // console.log("got user details from database");
        // console.log(`username ${this.username}`)
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetails());