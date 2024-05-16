const marvel_heros = ["Thor","Iron_Man","Spider_Man"];
const dc_heros = ["Super_Man","Flash","Batman"];
console.log(marvel_heros);
console.log(dc_heros);

//marvel_heros.push(dc_heros);  //adding dc_heros array in marvel_heros array
//console.log(marvel_heros);

//const all_heros = marvel_heros.concat(dc_heros); //adding all the elements of dc_heros array in marvel_heros array 
//console.log(all_heros);

//const all_new_heros = [...marvel_heros,...dc_heros]; //adding all the elements of dc_heros and marvel_heros array in a new array 
//console.log(all_new_heros);

//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
//const real_another_array = another_array.flat(Infinity); //convert all the arrays into a single array
//console.log(real_another_array);

//console.log(Array.isArray("Kumar"));  //check it is an array or not

//console.log(Array.from("Kumarjit")); //converting values into an array

//console.log(Array.from({name: "Kumarjit"})); //interesting it return empty array if not able to convert into a array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));