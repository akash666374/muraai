// // Basic Type Inference
// // let age: number = 15;
// // // age = "AKASH";
// // age = 25;
// // console.log(age);
// //

// // Type Inference with String
// let nam = "AKASH";
// nam = "VIKAS";
// // nam = 15;
// console.log(nam);

// // Type Inference with boolean
// // let isstudent = true
// // isstudent = false
// // console.log(isstudent);

// // Array Type Inference
// // let marks = [80, 90, 75, 85];
// // console.log(marks);
// // marks.push(95);
// // // marks.push("ABC");
// // console.log(marks);

// // Object Type Inference
// let student = {
//     name: "AKASH",
//     age: 22,
//     marks: 85
// };
// console.log(student);
// student.age = 25;
// // student.age = "ABC"
// console.log(student.age);

// // Function Return Type Inference

// function display(a: number, b: number) {
//     return a * b
// }
// console.log(display(10, 20));

// // console.log(display("HELLO", "ABC"));

// //Contextual Typing
// // let numbers: number[] = [10, 20, 30];
// // numbers.forEach((num) => {
// //     console.log(num);
// // })

// // let names: string[] = ["AAA", "BBB", "CCC", "DDD"];
// // // names.push(10)
// // names.forEach((xyz) => {
// //     console.log(xyz.toLowerCase());
// // })


// // let marks = [80, 90, 70];
// // console.log(marks);

// // let values = [10, "AKASH", true];
// // console.log(values);

// // Const Assertions —
// // without as const
// // let order = {
// //     status: "PENDING",
// //     id: 101
// // };

// // console.log(order);
// // order.status = "SUCCESS";
// // console.log(order);



// // with as const
// let order = {
//     status: "PENDING",
//     id: 101
// } as const;

// console.log(order);
// order.status = "SUCCESS";




// const ageInput = "Twenty Five";

// const age = Number(ageInput); //"25"

// console.log(age);

let age = "25";
console.log(Number(age));
