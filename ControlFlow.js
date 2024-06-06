//if

const isUserLoggedIn = null;

function UserLogin(status)
{
    if(status)
    {
        console.log("User Logged In.....\n");
    } 
    else
    {
        console.log("User Is Not Logged In.....\n");
    }
}

//UserLogin(true);
//UserLogin(false);


//conditional statements

// <, >, <=, >=, ==, ===, !=

//== not check type
/*if(2 == "2")
{
   console.log("Equals...");
}
else
{
    console.log("Not Equals...");
}

//=== check type 
if(2 === "2")
{
    console.log("Equals...");
}
else
{
    console.log("Not Equals...");
} */


//nested if

const rupes = 650;

if(rupes < 500)
{
    console.log("You can not buy it!\n");
}
else if(rupes == 500)
{
    console.log("You can buy it\n");
}
else
{
    console.log("You can buy it and you have some extra money take it "+(rupes-500)+"\n");     
}

//switch case

const weekdays = (Day) =>
{

switch(Day) 
{
    case 1:
    {
       console.log("Monday");
       break;
    }
    case 2:
    {
       console.log("Tuesday");
       break;
    }
    case 3:
    {
       console.log("Wednesday");
       break;
    }
    case 4:
    {
       console.log("Thursday");
       break;
    }
    case 5:
    {
       console.log("Friday");
       break;
    }
    case 6:
    {
        console.log("Saturday");
        break;
    }
    case "7":
    {
        console.log("Sunday");
        break;
    }
    default:
    { 
        console.log("Funday");
        break;
    }
}

}

weekdays(6);

//Nullish Coalescring Operator (??): null underfind
let val1;
//val1 = 5 ?? 10;
val1 = null ?? 3;
console.log(val1);

//Ternary Operator
// condition ? true: false;
const iceTeaPrice = 80;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

    





