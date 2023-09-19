// ++++ Immediately Invoked Function Expressions +++++// 

(function iifi (){

//named iifi
    console.log(`DB Connected`);

}) ();        // semi colon ; is important in Invoke function when write two iifi function ... for better where the function is break

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})("imran")  

// invoked function //