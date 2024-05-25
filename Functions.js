
function sayMyName()
{
    console.log("K");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("I");
    console.log("T");
}

//sayMyName();

function addTwoNumbers(number1,number2)
{
    return (number1+number2);
}

const result = addTwoNumbers(3,4);
//console.log("Result: ",result);

function loginUserMessage(username)
{
    if(username === undefined) //or //(undefined) //or //(!username)
    {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage());

function calculateCartPrice(...num1)  //rest opperator
{
    return num1;
}

//console.log(calculateCartPrice(20,30,40,50,60,70)) ;

const user = {
    username: "Kumarjit",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));