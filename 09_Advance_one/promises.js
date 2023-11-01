// promises // fetch //
// const promise = new promise()
// fetch('https:something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // DO an async task
    // DB call cryptograph, network

    setTimeout(function () {
        console.log("Async Task is complete");
        resolve();
    }, 1000)

})
promiseOne.then(function () {
    console.log("promised consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 complete");
        resolve()
    }, 1000)
}).then(function () {
    console.log("promised 2 consumed");
})

// promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'imran', Gmail: 'imranghafoor427@gmail.com', age: 22 })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

// promise Four

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'khan', password: 1234 })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })                            // apply channing
    .then(function (username) {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The Promise is either Resolved or Rejected");
    })

// promise five

const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'JS', password: 123 })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async await // fetch
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    try {
        const data = response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()

// fetch // .then .catch
const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        // handle the data

    })
    .catch((error) => {
        console.log(error);
        // handle the error 
    })