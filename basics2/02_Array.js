 // Array //

 const heroName = ["imrankahn", "quid", "iqbal"]
 const ourHero = ["superman", "spderman", "batman"]

//  heroNmae.push(ourHero)
//  console.log(heroName);

//  const allHeros = heroName.concat(ourHero)
//  console.log(allHeros);

const all_New_Heros = [...heroName, ...ourHero]

// console.log(all_New_Heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("imran"));
console.log(Array.from("imran"));
console.log(Array.from({name: "imran"}));  // value return empty array /// intrusting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

