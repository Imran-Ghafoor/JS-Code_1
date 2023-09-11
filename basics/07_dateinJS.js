//  Dates In Javascript //

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-15")         // date in dd/mm/yy

// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());

let myTime = Date.now()
// console.log(myTime);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);    //when value come with decimal 
// console.log(Math.floor(Date.now()/1000));    //apply in this form

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

