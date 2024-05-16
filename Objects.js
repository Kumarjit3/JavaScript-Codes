//singleton
//Object.create;

//symbol

const mySym = Symbol("Key1");

//object literals
const JsUser = {
    name: "Kumar",
    "full name": "Kumarjit Mongal",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "kumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser.name);  //we can access object properties by using . or
//console.log(JsUser["name"]); //we can access object properties by using []
//console.log(JsUser["full name"]); //here we can only access full name properties by using [](subscript) can not access by using .(dot) 
//console.log(JsUser[mySym]); //way to access symbol

//JsUser.age = 20; //update objects properties
//console.log(JsUser.age);
//Object.freeze(JsUser);
//JsUser.age = 30;  //update not possible because the object is freeze
//console.log(JsUser.age);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());