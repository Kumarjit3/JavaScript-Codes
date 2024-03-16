
// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, Functions


//primitive data types 

let Name = "Kumarjit";   //String
let number = 10;         //Number
const age = 20;          //const Number
let flag = true;         //Boolean
let city = null;         //null
let phone;               //undefined
let id = Symbol('123');  //Symbol
let sum = 123445677899n;

console.log("\n\n");
console.log(typeof(Name)+" : "+Name);
console.log(typeof(number)+" : "+number);
console.log(typeof(age)+" : "+age);
console.log(typeof(flag)+" : "+flag);
console.log(typeof(city)+" : "+city);
console.log(typeof(phone)+" : "+phone);
console.log(typeof(id)+" : ");
console.log(id);
console.log(typeof(sum)+" : "+sum);
console.log("\n\n");


//We can not update constant variables


//Arrays

let myarr = [0, 1, 2, 3, 4];
const myarr1 = ["Kumar","Neil","Rohan","Raj","Jatin"];
const arr = new Array(12,15,17,33,50);

console.table(
              [myarr,myarr1,arr]
             );


//Objects

let myObj = {
     Name : "Kumarjit",
     Age : 20,
}

console.log("\n"+typeof(myObj)+"\n");

console.table(
    [myObj]
   );

//Functions

function sub(num1 , num2)
{
    return num1 - num2;
}


console.log("\n Sub of (5 - 6) is = "+sub(5,6)); 


