
let firstName = "Kumarjit";
let midSpace = " ";
let lastName = "Mongal";

 //non standard way of string concatination
 console.log("Hello i am "+firstName.toUpperCase()+" and my last name is "+lastName.toUpperCase());

 //Standard way of string concatination
 console.log(`Hello i am ${firstName.toUpperCase()} and my last name is ${lastName.toUpperCase()}`);


 //how to declear a string object

 let str = new String("Kumarjit Mongal");
 console.log(str);
 console.log(str[0]); //thats looks like array index not in javascript it is object

 console.log(str.length);

 //String Methods

 //1
 console.log(str.charAt(3));   //return given index character

 //2
 console.log(str.indexOf('M'));  //return given character index no

 //3
 console.log(str.concat(" "+"CPP","JAVA"));   //return a new concatinate string but does not change the main string 

 //4
 console.log(str.toLowerCase());      //return a new string in lowercase but does not change the main string

 //5
 console.log(str.toUpperCase());     //return a new string in uppercase but does not change the main string

 //6
 console.log(str.trim());            //return a new without space string but does not change the main string
 
 //7
 console.log(str.search('P'));      //return index if the character is found other wise return -1
 
 //8
 console.log(str.substring(1,3));   //return a new string according to starting to ending index but does not modify the main string

 //9
 console.log(str.slice(-3,7));    //this method works same as subString but it support negative value arguments 

 //10
 console.log(str.includes("M"));  //this method actually work same as search() method