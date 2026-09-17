//genrics means one code works with different data types

//normal functions
// function display(value: number) {
//     console.log(value);

// }
// display(10);
// // display("HELLO");

//genric functions

// function display<T>(value: T) {
//     console.log(value);

// }
// display(10)
// display("HELLO")
// display(true)



// Generic Array
// let numbers: Array<number> = [10, 20, 30];

// numbers.push(40);

// console.log(numbers);


// Generic Interface

// interface Box<T> {
//     value: T;
// }

// let box1: Box<string> = {
//     value: "Hello"
// };

// let box2: Box<number> = {
//     value: 100
// };

// console.log(box1.value);
// console.log(box2.value);



//Generic Type Aliases
// type Box<T> = {
//     value: T;
// }
// let numberBox: Box<number> = {
//     value: 100
// };
// let stringBox: Box<string> = {
//     value: "HELLO"
// }
// let booleanBox: Box<boolean> = {
//     value: true
// }
// console.log(numberBox);
// console.log(stringBox);
// console.log(booleanBox);


//Generic Default Value
// type Box<T> = {
//     value: T;
// }
// let box: Box<string> = {
//     value: "HELLO"
// }
// console.log(box);

// type Box<T = string> = {
//     value: T;
// };

// let box1: Box = {
//     value: "HELLO"
// };

// let box2: Box<number> = {
//     value: 100
// };

// console.log(box1);
// console.log(box2);

// function display<T extends string>(value: T) {
//     console.log(value);
// }
// display("HELLO")

function display<T extends number>(value: T) {
    return value * 2;
}
console.log(display(10));


