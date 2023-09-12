 // +++++++ Arrays ++++++++//

 const myArr = [0,1,2,3,4,5]

 const myHerro = ["imrankhan", "Iqbal"]

 const myArr2 = new Array(0,1,2,3,4)

//  console.log(myArr[2]);

 //++++++++ Array Methods ++++++//

 myArr.push(6)      // add the value from end of the array
 myArr.push(7)

 myArr.pop()        // remove the value from the end of array
 myArr.pop()

 myArr.unshift(0)    // Add the value from the start of array
 myArr.unshift(9)

 myArr.shift()       // remove the value from the strat of the array
 myArr.shift()

 console.log(myArr.includes(9));    // in this method we ask the question
 console.log(myArr.includes(4));

console.log(myArr.indexOf(4));         // to find the index of the number

const newArr = myArr.join()
console.log(myArr);
 console.log(newArr);

// ++++ slice, Splice ++++ //

console.log("A", myArr);

const myArr3 = myArr.slice(1,3)

console.log(myArr3);
console.log("B ", myArr);
 

const myArr4 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myArr4);


