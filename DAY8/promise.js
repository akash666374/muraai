//promise.race
// let user = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("USER DETAILS");
//     }, 3000);
// });

// let order = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("ORDER DETAILS");
//     }, 1000);
// });

// let product = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("PRODUCT DETAILS");
//     }, 2000);
// });

// Promise.race([user, order, product])
//     .then((result) => {
//         console.log(result);
//     });

//promise.any
// let user = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("USER DETAILS");
//     }, 3000);
// });

// let order = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ORDER DETAILS");
//     }, 1000);
// });

// let product = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("PRODUCT DETAILS");
//     }, 2000);
// });

// Promise.any([user, order, product])
//     .then((result) => {
//         console.log(result);
//     });

// all settled
// let user = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("USER DETAILS");
//     }, 3000);
// });

// let order = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ORDER DETAILS");
//     }, 1000);
// });

// let product = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("PRODUCT DETAILS");
//     }, 2000);
// });

// Promise.allSettled([user, order, product])
//     .then((result) => {
//         console.log(result);
//     });


// promise.all

let user = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("USER DETAILS");
    }, 3000);
});

let order = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ORDER DETAILS");
    }, 1000);
});

let product = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("PRODUCT DETAILS");
    }, 2000);
});

Promise.all([user, order, product])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);

    })