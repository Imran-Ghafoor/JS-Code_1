 // Array //

 const heroName = ["imrankahn", "quid", "iqbal"]
 const ourHero = ["superman", "spderman", "batman"]

//  heroNmae.push(ourHero)
//  console.log(heroName);

//  const allHeros = heroName.concat(ourHero)
//  console.log(allHeros);

const all_New_Heros = [...heroName, ...ourHero]

console.log(all_New_Heros);