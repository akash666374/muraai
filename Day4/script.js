// let name = "AKASH";
// name = "KUSHAL";
// console.log(name);   // let can be reassigned but we cannot redeclare in it


// var name = "AKASH";
// var name = "KUSHAL";
// name = "ABC";
// console.log(name);  // var can be redeclared and reinitialized


// const name = "AKASH";
// name = "KUSHAL";  // const cannot be reassigned or redeclared
// console.log(name);


//global scope
// let name = "AKASH";

// function greet() {
//     console.log(name);

// }
// greet();
// console.log(name);

//local variable

// function greet() {
//     let name = "AKASH"
//     console.log(name);
// }
// greet();
// // console.log(name);


//scopes
//global scope
// let name = "AKASH";

// function greet() {
//     console.log(name);
// }
// greet();
// console.log(name);


// function scope

// function greet() {
//     let name = "AKASH"
//     console.log(name);
// }
// greet();
// // console.log(name);


//block scope

// if (true) {
//     const name = "AKASH";
//     console.log(name);

// }
// console.log(name);


// <------------------------------------>
//arrow function
// let name = () => {
//     console.log("HII");

// }
// name()

// let add = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(add(20, 10));  // explicit return in arrow function


// let add = (a, b) => a + b;
// console.log(add(10, 20));  // implicit return in arrow function

// let greet = () =>
//     console.log("HI HELLO");


// greet();  //implicit return


// let greet = () => {
//     let name = "AKASH";
//     console.log(name);
// }
// greet();  //explicit return

// <------------------------------------>
//  template literals

// let name = "AKASH";
// let age = 20;
// console.log(`my name is ${name} and my age is ${age}`);

// let a = 10;
// let b = 20;
// console.log(`the total is ${a + b}`);




// let a = 10;
// let b = 20;
// console.log(`${a + b}`);


// <------------------------------------>
//destructing

// const student = {
//     name: "Akash",
//     age: 20,
//     course: "Java"
// };

// const name = student.name   // without destructing
// const age = student.age
// const course = student.course
// console.log(name, age, course);

// const { name, age, course } = student;  // destructing
// console.log(name, age, course);


const student = {
    name: "AKASH",
    age: 30, course: "JAVA"
}
// let newname = student.name;
// let newage = student.age;
// let newcourse = student.course;
// console.log(newname, newage, newcourse);
// without destructing


// with destructing

// const { name, age, course } = student;
// console.log(name, course, age);



// const numbers = [10, 20, 30];

// const first = numbers[0];   // without destructing
// const second = numbers[1];
// const third = numbers[2];
// console.log(first, second, third);

// const [first, second, third] = numbers;  // destructing

// console.log(first, second, third);

// const fruits = ["Apple", "Banana", "Mango"];

// const first = fruits[0];   // without destructing
// const second = fruits[1];
// const third = fruits[2];
// console.log(first, second, third);

// const [fruit1, fruit2, fruit3] = fruits;  // destructing
// console.log(fruit1, fruit2, fruit3);

// <------------------------------------>
//spread operator

// const numbers = [10, 20, 30];
// const newnumbers = [...numbers];
// console.log(newnumbers);

// const numbers = [10, 20, 30];
// const newnumbers = [...numbers, 40, 50, 60];
// console.log(newnumbers);

// const num = [10, 20, 30];
// let newnum = [...num, 40, 50]
// console.log(newnum);

// const num = [10, 20, 30];
// let newnum = [...num, 400, 500];
// console.log(newnum);




// let student = {
//     name: "AKASH",
//     age: 20
// }
// const newstudent = { ...student, course: "JAVA" };
// console.log(newstudent);

// <------------------------------------>
//rest operator
// function add(...numbers) {
//     console.log(numbers);
// }
// add(10, 20, 30, 40, 50);


// function add(first, ...remaining) {
//     console.log(first);
//     console.log(remaining);


// }
// add(10, 20, 30, 40, 50);


// function add(...numbers) {
//     console.log(numbers);
// }
// add(10, 20, 30, 40, 50)

// function add(first, ...remaining) {
//     console.log(first);
//     console.log(remaining);
// }
// add(10, 20, 30, 40, 50);




// <------------------------------------>
//default parameter

// function greet(name) {
//     console.log(`HELLO ${name}`);

// }
// greet("AKASH");


function greet(name = "AKASH") {
    console.log(`MY NAME IS ${name}`);

}
greet("AKASH");