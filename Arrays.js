//array 

/*const myArr = [0,1,2,3,4,5];
console.log(myArr);     //printing the full array
console.log(myArr[0]);  //printing the 0'th index value 

const myArr2 = ["Ram","Shyam","Rahul"];
console.log(myArr2);     //printing the full array
console.log(myArr2[0]);  //printing the 0'th index value 

const myArr3 = new Array(3,4,6,9,10,12);
console.log(myArr3);     //printing the full array
console.log(myArr3[0]);  //printing the 0'th index value 

//Array methods

myArr.push(6);  //inserting at last position of the array
console.log(myArr);

myArr.pop();  //deleting the last value of the array
console.log(myArr);

myArr.unshift(-1);  //inserting at first position of the array
console.log(myArr);

myArr.shift();  //deleting the first value of the array
console.log(myArr);

let flag = myArr.includes(0);  //0 present or not in the array, it returns boolean value
console.log(flag);

let flag1 = myArr3.indexOf(10);  //return the index no of the given value, if not found returns -1
console.log(flag1);

const newArr = myArr3.join();  //converting the array into string
console.log(newArr); */

//slice & splice

const Arr1 = new Array(5,10,15,20,25,30,35);

console.log("A "+Arr1);

const Arr2 = Arr1.slice(1,3); 
console.log("Slice "+Arr2);    //it returns starting index to n-1'th index value & it does'nt effect the main array
console.log("A "+Arr1);

const Arr3 = Arr1.splice(1,3);
console.log("Splice "+Arr3);  //it returns starting index to n'th index value & it effect the main array
console.log("A "+Arr1);


