// object literals
const user = {
    username: 'imran',
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        console.log("got user details from database");
        console.log(`username ${this.username}`)
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// constructor function      // everytime gives new instance // new copy

function User(username, loginCount, signedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn


    this.greeting = function () {
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const userOne = new User('imran', 12, true)
const userTwo = new User('khan', 10, false)         // new instance
console.log(userOne.constructor);  // another method is instanceof> check for instance is same or not
console.log(userTwo);



// new keyword generate = empty object is created which is called instance
// 1.new object create
// 2.constructor function created
// 3. this. keyword arguments injected
// 4. all gives in function


// oop concept here
// abstration >> contructor function >> greeting function //user not know hoe to greeting function works that is abstraction
// encapsulation >> userOne // we encapsulate all things in userOne // user notknow where data is store




