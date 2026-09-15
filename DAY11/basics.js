"use strict";
// // //types
// // // let names: string = "AKASH";            //Type annotation + string
// // // console.log(names);
let stud = {
    marks: 20,
    sal: 30000
};
console.log(stud);
function display(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
display("abc");
