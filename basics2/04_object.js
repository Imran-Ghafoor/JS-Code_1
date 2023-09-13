// +++++++++++++++ Object Singleton > constructor ++++++++++++++ //

// const tinderUser = new Object()             //Singleton object

const tinderUser = {}                       // Non Singlton

tinderUser.id = "123abc"
tinderUser.name ="Imran"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "khan@123.com",
    fullname:{
        userfullname: {
            firstname: "imran",
            lastname: "kahn"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const user = [                       // Important when fetch data from database
    {
        id: 1,
        email: "imrna123@.com"
    },
    {
        id: 1,
        email: "imrna123@.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('IsLoggedIn'));
console.log(tinderUser.hasOwnProperty('game'));