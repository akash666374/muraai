// Push method
// let numbers = [10, 20, 30];
// let res = numbers.push(40, 50)
// console.log(numbers);
// console.log(res);


//pop
// let num = [10, 20, 30];
// let res = num.pop()
// console.log(res);

// console.log(num);

//unshift
// let num = [10, 20, 30];
// num.unshift(5);
// console.log(num);

//shift
// let numbers = [5, 10, 20, 30];
// let res1 = numbers.shift();
// let res2 = numbers.shift();
// console.log(res1);
// console.log(res2);
// console.log(numbers);


//includes
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(30));

//join
// let numbers = [10, 20, 30, 40];
// let res = numbers.join("---");
// console.log(res);

//concat
// let num1 = [10, 20];
// let num2 = [30, 40];
// let res = num1.concat(num2)
// console.log(res);

//reverse
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.reverse());

// foreach method
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//     console.log(num);
// })

// let numbers = [10, 20, 30, 40];
// numbers.forEach(num => {
//     console.log(num * 2);

// })

// let numbers = [5, 10, 15, 20];
// numbers.forEach(num => {
//     if (num > 10) {
//         console.log(num);
//     }
// })

// find method
// let numbers = [10, 20, 30, 40, 50];

// let res = numbers.find(num => {
//     return num > 25;
// })
// console.log(res);

// let numbers = [10, 15, 22, 28, 35];
// let res = numbers.find(num => {
//     return num % 7 == 0;
// })
// console.log(res);

//find index
// let numbers = [10, 20, 30, 40, 50];
// let res = numbers.findIndex(num => {
//     return num > 25;
// })
// console.log(res);

// let numbers = [5, 12, 18, 25, 30];
// let res = numbers.findIndex(num => {
//     return num % 5 === 0;
// });
// console.log(res);


//slice
// let numbers = [10, 20, 30, 40, 50];

// let res = numbers.slice(1, 4);
// console.log(res);

//splice

// let numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 6);
// console.log(numbers);

// let numbers = [10, 20, 40, 50];
// numbers.splice(4, 0, 0);
// console.log(numbers);


// sort function
// let numbers = [40, 10, 30, 20, 50];
// numbers.sort();
// console.log(numbers);


// in ascending order
// let numbers = [10, 2, 30, 4, 25];
// let res = numbers.sort((a, b) => {
//     return a - b;

// })
// console.log(res);

// descending order
// let numbers = [10, 2, 30, 4, 25];

// let res = numbers.sort((a, b) => {
//     return b - a;
// })
// console.log(res);

// let numbers = [5, 100, 25, 1, 50];
// let res = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(res);

//map
// let numbers = [5, 10, 15, 20];
// let res = numbers.map(num => {
//     return num + 5;
// })
// console.log(res);


// let numbers = [2, 4, 6, 8];
// let res = numbers.map(num => {
//     return num * num;
// })
// console.log(res);


// let numbers = [10, 20, 30, 40];
// let res = numbers.map(num => {
//     return num / 2;
// })
// console.log(res);

// let numbers = [5, 10, 15, 20];
// let res = numbers.map(num => {
//     return num * 2 + 3;
// })
// console.log(res);

// let numbers = [10, 15, 20, 25];
// let res = numbers.map(num => {
//     return (num - 2) * 3;

// })
// console.log(res);

// let numbers = [2, 5, 8, 11];
// let res = numbers.map(num => {
//     return (num + 4) * 2;
// })
// console.log(res);

// let salaries = [25000, 30000, 40000, 50000];
// let res = salaries.map(num => {
//     return num + (num * 10 / 100)
// });
// console.log(res);


// let prices = [100, 200, 500, 1000];
// let res = prices.map(num => {
//     return num - (num * 20 / 100);
// })
// console.log(res);



// filter
// let numbers = [5, 10, 15, 20, 25, 30];
// let res = numbers.filter(num => {
//     return num > 20;
// })
// console.log(res);

// let numbers = [5, 10, 15, 20, 25, 30];
// let res = numbers.filter(num => {
//     return num % 2 == 0;
// })
// console.log(res);


// let numbers = [10, 15, 22, 28, 31, 40];
// let res = numbers.filter(num => {
//     return num % 2 == 0 && num > 20
// });
// console.log(res);


// let salaries = [25000, 35000, 45000, 55000, 65000];
// let res = salaries.filter(num => {
//     return num >= 45000;
// });
// console.log(res);


// let numbers = [10, 15, 20, 25, 30, 35, 40];
// let res = numbers.filter(num => {
//     return num > 15 && num % 5 == 0;
// });
// console.log(res);

// let numbers = [12, 15, 18, 21, 24, 27, 30];
// let res = numbers.filter(num => {
//     return num > 15 && num % 3 == 0;
// });
// console.log(res);



//reduce
// let numbers = [10, 20, 30, 40];

// let res = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);
// console.log(res);


// let numbers = [5, 10, 15];
// let res = numbers.reduce((total, num) => {
//     return total + num;

// }, 0);
// console.log(res);

// let numbers = [2, 3, 4, 5];
// let res = numbers.reduce((total, num) => {
//     return total * num;
// }, 1);
// console.log(res);

// let salaries = [20000, 30000, 40000];
// let highest = salaries[0];

// let total = salaries.reduce((num, largest) => {
//     if (num > largest) {
//         return num;
//     }
//     return largest;
// }, salaries[0]);
// console.log(total);

// let salaries = [20000, 30000, 40000];


// let total = salaries.reduce((num, total) => {
//     return total + num;
// }, 0);
// console.log(total);




// let prices = [100, 250, 50, 300];
// let res = prices.reduce((total, num) => {
//     return total + num;
// }, 0);
// console.log(res);


// const invoices = [{ invoiceNo: "INV001", amount: 15000, status: "PAID" },
// { invoiceNo: "INV002", amount: 25000, status: "PENDING" },
// { invoiceNo: "INV003", amount: 10000, status: "PAID" },
// { invoiceNo: "INV004", amount: 30000, status: "REJECTED" }];


// let rṇes = invoices.forEach(num => {
//     return (`${invoices.invoiceNo}-${invoices.amount}-${invoices.status}`);
// })
// console.log(res);


// let prices = [1, 2, 3, 4, 5, 4];  //some method atleast one of the condition must be true
// let res = prices.some(num => num > 5);
// console.log(res);


let numbers = [5, 6, 7, 8, 9];  //for every all the conditions must be true
let res = numbers.every(num => num > 4);
console.log(res);