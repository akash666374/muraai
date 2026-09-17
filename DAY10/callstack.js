// console.log("A");
// console.log("B");
// console.log("C");
// js executes the code line by line since it is single threaded

// it follows lifo

// function greet() {
//     console.log("HELLO");
// }
// greet();  //when the js reaches the greet function hello will get executed and greet() finishes the execution and it will get removed


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");



// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
// });

// console.log("D");



// console.log("1");

// Promise.resolve().then(() => {
//     console.log("2");
// });

// Promise.resolve().then(() => {
//     console.log("3");
// });

// console.log("4");


console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 3000);

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");