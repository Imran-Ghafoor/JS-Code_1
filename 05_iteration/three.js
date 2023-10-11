// For of Loop

// ["", "", ""]                // this are Array specific loop
// [{} , {}, {}]

const arr = [1, 2, 3, 4, 5]    // iterators is all like Array ,string, 
//object all is iterators where you linke put the loop
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each character is: ${greet}`);
}

// Maps               // Maps is use for unique value , also an objet

const map = new Map()
map.set('PK', "pakistan")
map.set('Fr', "france")
map.set('UK', "united kingdom")
console.log(map);