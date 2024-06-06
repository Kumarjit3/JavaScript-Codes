//Immediately Invoked Function Expressions (IIFE)

//IIFE 
//this is a named iife
(function chai()
{
    console.log(`DB CONNECTED`);
})();


//IIFE using arrow function
//this is not a named iife
(
   () =>
    {
        console.log(`DB CONNECTED_2`);
    }
)();

//this is not a named iife
(
    (name) =>
     {
         console.log(`DB CONNECTED_3${name}`);
     }
 )('Kumajit');

