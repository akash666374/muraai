// objects objects are the data which are stored in the form of key value pairs
// let student = {
//     name: "AKASH",
//     age: 22,
//     dept: "ISE",
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.dept);   // dot notation

// console.log(student["age"]);
// console.log(student["name"]);
// console.log(student["dept"]);   // bracket notation

// console.log(`NAME:${student.name},Age:${student.age},DEPT:${student.dept}`);  // with key and values
// console.log(`${student.name},${student.age},${student.dept}`);    // with only values


// let student = {
//     name: "AKASH",
//     age: 22,
//     dept: "ISE"
// }

//adding property
// student.city = "BANGALORE";
// // //updating property
// student.age = 21;
// //deleting property
// // delete student.dept;

// console.log(student.name);
// console.log(student.age);
// // console.log(student.dept);
// console.log(student.city);  // by using dot notation

// let student = {
//     name: "AKASH",
//     age: 22,
//     dept: "ISE"
// }
// student["city"] = "BANGALORE";
// student["age"] = 21;
// delete student["dept"];
// console.log(student.name);
// console.log(student.age);
// console.log(student.dept);
// console.log(student.city);  // by using bracket notation


// nested object  an objects inside another object
// let employee = {
//     name: "RAHUL",
//     age: 20,
//     address: {
//         city: "BANGALORE",
//         pincode: 560091
//     }
// }
// console.log(employee.name);
// console.log(employee.address.city);
// console.log(employee.address.pincode);  // by using dot notation

// console.log(employee["name"]);
// console.log(employee["address"]["city"]);
// console.log(employee["address"]["pincode"]);  // by using bracket notation

// let company = {
//     name: "ABC",
//     employee: {
//         address: {
//             city: "Bangalore"
//         }
//     }
// };
// console.log(company.employee.address.city);
// console.log(company["employee"]["address"]["city"])


// let employee = {
//     name: "RAHUL",
//     skills: ["Java", "Spring Boot", "SQL"]
// };
// console.log(employee.skills[1]);


// console.log(employee["name"]);
// console.log(employee["skills"][0]);  // by using bracket notation in array indexing
// console.log(employee["skills"][2]);

// let student = {
//     name: "AKASH",
//     age: 22,
//     dept: "ISE"
// }
// // console.log(Object.keys(student));
// // console.log(Object.values(student));
// console.log(Object.entries(student));



// let stud = Object.entries(student);
// // destructing
// for (let i = 0; i < stud.length; i++) {
//     const [key, val] = stud[i];
//     // console.log(`KEY :${key},VALUE :${val}`);
//     console.log(key + " " + val);


// }





//objects using a function
// let employee = {
//     name: "RAHUL",
//     age: 20,
//     greet: function () {
//         return "HELLO";

//     }

// }
// console.log(employee.name);
// console.log(employee.age);
// employee.greet()
// console.log(employee.greet());

// this
// let employee = {
//     name: "RAHUL",
//     age: 22,
//     greet: function () {
//         console.log("HI THIS IS" + " " + this.name + " " + "and my age is" + " " + this.age);
//         // return "HI THIS IS" + " " + this.name + " " + "and my age is" + " " + this.age

//     }
// }
// let res = employee.greet();
// console.log(res);


// let car = {
//     brand: "TOYOTA",
//     model: "fortuner",
//     display: function () {
//         console.log(this.brand + " " + this.model);

//     }
// }
// car.display();



// let student1 = {
//     name: "RAHUL",
//     display: function () {
//         console.log(this.name);
//     }
// }
// let student2 = {
//     name: "VIKAS",
//     display: function () {
//         console.log(this.name);

//     }
// }
// student1.display();

// student2.display()
// console.log(student1.display());


// student2.display();
// console.log(student2.display());

// let student1 = {
//     name: "Rahul",

//     display() {
//         console.log(this.name);
//     }
// };

// let student2 = {
//     name: "Vikas",

//     display: student1.display  // get the function from the student 1
// };                             // student1.display() means execute the function

// student2.display();

// this by using arrow function
// const student = {
//     name: "AKASH",
//     display: () => {
//         console.log(this.name);

//     }
// }
// student.display();
// arrow function with normal function
// const student = {
//     name: "AKASH",
//     greet: function () {
//         let show = () => {
//             console.log(this.name);

//         }
//         show();
//     }
// }
// student.greet();

//scopes

// any scope which can be accessed inside any part of the program are called are global scope

// any scope which can be accessed inside the methods are called as function scope
// any scope which can be accessed inside the block are called block scope

// let and const are block scope
// var is a function scope


//global scope
// var name = "AKASH";
// function greet() {
//     console.log(name);

// }
// greet();

//function scope
// function greet() {
//     let name = 'AKASH';
//     console.log(name);

// }
// greet()
// console.log(name);


// block scope
// if (true) {
//     let age = 30;
//     console.log(age);

// }
// console.log(age);

// // lexical scope
// let name = "RAHUL";
// console.log(name); // global scope

// function greet() {
//     name = "AKASH";
//     let age = 30;
//     console.log(age);
//     console.log(name);
//     // console.log(city);


//     if (true) {
//         let city = "BANGALORE";
//         console.log(city);
//         console.log(age);
//         console.log(name);
//     }

//     console.log(name);
//     console.log(age);
//     // console.log(city);
// }
// greet();
// console.log(name);  // it can be redeclared  in any part of the program and it will take the recent upated value
// // console.log(age);
// // console.log(city);


// // closures

// function outer() {
//     let name = "HELLO";

//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }

// let res = outer();
// res();




// let student = {
//     name: "AKASH",
//     age: 22,
//     dept: "ISE",
// }
// student.city = "BANGALORE";
// student.age = 21;
// delete student.dept
// console.log(student.city);
// console.log(student.name);
// console.log(student.age);
// console.log(student.dept);






// Object has own property  one method to learn








//  import and export
// import { add, multiply, subtract } from "./math.js"

// console.log(add(10, 20));

// console.log(multiply(20, 10));

// console.log(subtract(20, 10));



// export function add(a, b) {
//     return a + b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// export function subtract(a, b) {
//     return a - b;
// }