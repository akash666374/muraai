"use strict";
// // // narrowing  =   checking a value to find its specific type.
// // // typeof Narrowing         //Checks the type of a value. 
// // function checkValue(value: string | number) {
// //     if (typeof value === "string") {
// //         console.log(value.toUpperCase());
// //     } else {
// //         console.log(value + 10);
// //     }
// // }
// // checkValue("hello");
// // checkValue(20);
// // // // === / !== Narrowing                Checks whether a value is equal or not equal to something.
// // function checkName(name: string | null) {
// //     if (name !== null) {
// //         console.log(name.toUpperCase());
// //     } else {
// //         console.log("No name");
// //     }
// // }
// // checkName("akash");
// // checkName(null);
// // //  Truthiness Narrowing  Checks whether a value exists
// // function checkEmail(email: string | undefined) {
// //     if (email) {
// //         console.log(email);
// //     } else {
// //         console.log("No email");
// //     }
// // }
// // checkEmail("akash@gmail.com");
// // checkEmail(undefined);
// // // // in Narrowing   Checks whether an object has a property.
// // type User = {
// //     name: string;
// // };
// // type Admin = {
// //     name: string;
// //     permissions: string[];
// // };
// // function checkUser(person: User | Admin) {
// //     if ("permissions" in person) {
// //         console.log(person.permissions);
// //     } else {
// //         console.log(person.name);
// //     }
// // }
// // checkUser({ name: "Akash" });
// // checkUser({
// //     name: "Rahul",
// //     permissions: ["read", "write"]
// // });
// // // // instanceof Narrowing   Checks whether an object belongs to a class.
// class Dog {
//     bark() {
//         console.log("dog");
//     }
// }
// class Cat {
//     meow() {
//         console.log("cats");
//     }
// }
// function makeSound(animal: Dog | Cat) {
//     if (animal instanceof Dog) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }
// makeSound(new Dog());
// // makeSound(new Cat());
// enum Direction {
//     LEFT = "LEFT",
//     RIGHT = "RIGHT",
//     UP = "UP",
//     DOWN = "DOWN"
// }
// let direction: Direction = Direction.RIGHT;
// console.log(direction);
// function add(a: number, b: number | string) {
//     return a + b
// }
// add(20, "20")
const ageInput = "Twenty Five";
const age = Number(ageInput);
console.log(age);
