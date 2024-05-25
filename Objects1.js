//const tinderUser = new Object();
//console.log(tinderUser);

const tinderUser = {};

tinderUser.id = "123ABC";
tinderUser.name = "Shyam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

//object nesting
const regularUser = {
    email: "shayam@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname: "Ram",
            lastname: "Roy"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({},obj1,obj2);
//console.log(obj3);

const obj4 = {...obj1, ...obj2};
//console.log(obj4);

const user = [
    {
        id1: "10"
    },
    {
        id2: "20"
    },
    {
        id3: "30"
    },
]

//console.log(user[0].id1);

//Object Destructuring.......................

const course =
{
       courseName: "js in hindi",
       price: "10001",
       courseInstructor: "Kumarjit"
}

//course.courseName;

const {courseInstructor: instructor} = course;

//console.log(instructor);


[
    {},
    {},
    {}
]

