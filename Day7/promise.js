//promises
// example

// let promise = new Promise((resolve, reject) => {
//     let age = 30;
//     if (age > 18) {
//         resolve("ELIGIBLE TO DRIVE")
//     } else {
//         reject("U SHOULD NOT DRIVE");
//     }

// });
// promise.then((res) => {
//     console.log(res);

// }).catch((Error) => {
//     console.log(Error);

// });



// real time example
// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let order = "placed";
//         if (order === "placed") {
//             resolve("ORDER HAS BEEN PLACED")
//         } else {
//             reject("ORDER HAS BEEN CANCELLED")
//         }
//     }, 2000);
// });
// promise.then((resolve) => {
//     console.log(resolve);

// }).catch((error) => {
//     console.log(error);

// })


//async and await
// async function greet() {
//     return "HELLO";
// }

// async function main() {
//     let res = await greet();
//     console.log(res);


// }
// main();

// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("DATA RECIVED")
//     }, 5000);
// })

// async function greet() {
//     let res = await promise;
//     console.log(res);


// }
// greet();

// -------------------------------------------<><>----------------------------------
// function greet() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("ORDER HAS PLACED")
//         }, 4000);
//     })
// };

// async function hello() {
//     console.log("PREPARING TO ORDER...............");

//     let res = await greet();
//     console.log(res);
//     console.log("ORDER PROCESS COMPLETED");
// }
// hello();




//synchronus
// console.log("A");
// console.log("B");
// console.log("C");

//asynchronus
// console.log("A");
// setTimeout(() => {
//     console.log("B");

// }, 2000);
// console.log("C");




// error handling

// try {
//     let age = 11;
//     if (age > 18) {
//         console.log(" U CAN VOTE");

//     } else {
//         throw new Error("U CAN'T VOTE");
//     }
// } catch (error) {
//     console.log(error.message);

// } finally {
//     console.log("NO AGE LIMIT");

// }

let promise = new Promise((resolve, reject) => {
    let order = "placed";
    setTimeout(() => {
        if (order === "placed") {
            resolve("ORDER PLACED SUCESSFULLY")
        } else {
            reject("ORDER HAS BEEN REJECTED")
        }
    }, 4000);
})

async function greet() {
    try {
        let res = await promise;
        console.log(res);
    } catch (error) {
        console.log(error);

    } finally {
        console.log("ORDER HAS COMPLETED");

    }
}
greet();