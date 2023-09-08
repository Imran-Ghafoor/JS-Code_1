const name = "imran"
const count = 60

// console.log(name + count + " value")   //bad approach

console.log(`Hello my name is ${name} and my count is ${count}`); // right approach

//another way to declare string

const gameName = new String('ImranKhan');

console.log(gameName[0])
console.log(gameName[5]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const stringOne = "    Imran      "
console.log(stringOne);
console.log(stringOne.trim());

const url = "imranghafoor427_20%.com";
console.log(url.replace('_20%',  '@gmail'));
console.log (url.includes('khan'));
console.log(gameName.split('-'));
console.log(gameName.toUpperCase());
console.log(gameName.codePointAt());
console.log(gameName.matchAll('ok'));
console.log(gameName.normalize());