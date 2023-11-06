function SetUseername(username) {
    // complex DB call
    console.log('called');
    this.username = username
}

function createUser(username, email, password) {
    SetUseername.call(this, username)   // .call is used for refrence hold
    // .call // current excecution context pass to other

    this.email = email
    this.password = password
}
const call = new createUser('imran', 'imran@gmail.com', '123')
console.log(call);