let a1 = 300; //global scope
if(true)
{
    let a =10;   //local/block scope
    var b = 20;  //local/block scope
    const c = 30; //loacl/bloack scope
}

//console.log(a1);  // possible 
//console.log(a);  //not possible 
//console.log(b);  //possible
//console.log(c);  //not possible

function one()
{
   const username = "Kumarjit";

   function two()
   {
       const website = "YouTube";
       console.log(username);
   }
   //console.log(website);
   two();
}

one();


console.log(addone(10)); //possible

function addone(num)
{
    return num+1;
}

addone(10);   //possible

//console.log(addTwo(5)); //not possible

const addTwo = function(num)
{
    return num+2;
}

addTwo(5);   //possible
