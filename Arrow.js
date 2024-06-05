const user =
{
    username: "hitesh",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username},"Welcome to our website"`)
    }
}

//user.welcomeMessage();
//user.username = "Rohit";
//user.welcomeMessage();


/*const chai = function()
{
    let username = "hitesh"
    console.log(this.username);
}*/

//using arrow function

/*const chai = ()  =>
{
    let username = "hitesh"
    console.log(this.username);
}*/

/*const addTwo = function(num1,num2)
{
    return (num1+num2);
} */

//console.log(addTwo(2,3)); 


//using arrow function

/*const addTwo = (num1,num2) =>
{
    return (num1+num2);
} */

//console.log(addTwo(22,3));


//updated by using arrow function

//const addTwo = (num1,num2) =>  num1+num2;

//or

//const addTwo = (num1,num2) =>  (num1+num2);
    
//console.log(addTwo(22,3));

const obj1 = () => ({username:"Kumrajit"})

console.log(obj1());
