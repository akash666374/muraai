// // //types
// // // let names: string = "AKASH";            //Type annotation + string
// // // console.log(names);


// // // let isStudent: boolean = true;                 //Type annotation + boolean
// // // console.log(isStudent);

// // // let marks: number[] = [80, 75, 90];             //Type annotation + array
// // // console.log(marks);

// // // let city: string = "BANGALORE";
// // // console.log(city);                                             //Type annotation + string

// // // let age=  22;                               //Type inference
// // // // age = "AKASH";                                     //Type checking
// // // console.log(age);

// // // let age: any = 10                                  //any type
// // // age = 20;                                        //any allows different types
// // // age = true
// // // age = "HELLO";
// // // console.log(age);


// // // let employee: {            //object type
// // //     id: number;           //property type
// // //     name: string;          //property type
// // //     salary: number;          //property type
// // // } = {
// // //     id: 101,
// // //     name: "Akash",
// // //     salary: 30000
// // // };

// // // console.log(employee);


// // // let data: null = null;
// // // console.log(data);        // null

// // // let value: undefined = undefined;
// // // console.log(value);              // undefined means no value has been assigned

// // // function greet(): void {
// // //     console.log("Hello");
// // // }
// // // greet();             //it performs an action it cannot do anything

// // // let value: unknown = "AKASH";

// // // if (typeof value === "string") {
// // //     console.log(value);                  //it can accept any values  but we need to check its type before using
// // // }



// // // type aliases   we give name to type so that we can reuse that gain and again
// // type PRICE = number

// // let productprice: PRICE = 500
// // console.log(productprice);


// // // type CITY = string;
// // // let loc: CITY = "BANGALORE";
// // // console.log(loc);


// // //in objects

// // // type student = {
// // //     id: number,
// // //     name: string,
// // //     marks: number
// // // }

// // // let stud: student = {
// // //     id: 101,
// // //     name: "Akash",
// // //     marks: 90
// // // };
// // // console.log(stud);


// // // in array
// // // type MARKS = number[];
// // // let marks: MARKS = [10, 20, 30, 40, 50];
// // // console.log(marks);


// // // let value: number | string;
// // // value = 10;
// // // value = "ABCD";
// // // console.log(value);

// // // type ID = number | string
// // // let value: ID = 101;
// // // value = "A101";
// // // console.log(value);

// // // type id = number | string | boolean
// // // let val: id = "101AKASH"
// // // val = "101AKASH",
// // //     val = true;
// // // console.log(val);

// // // // by tuples
// // // type student = [number, string, number];
// // // let stud: student = [10,1234,"ABCD"];
// // // console.log(stud);


// // // type Product = [number, string, number];
// // // let prod: Product = [101, "laptop", 75000];
// // // console.log(prod);

// // // by functions

// // // type num = (a: number, b: number) => number;

// // // let res: num = (a, b) => {
// // //     return a + b;
// // // };
// // // console.log(res(10, 20));

// // // type greet = (name: string) => string;
// // // let result: greet = (name) => {
// // //     return "HELLO " + name;
// // // }
// // // console.log(result("AKASH"));


// // // interface    //used to give structure for an object
// // interface student {
// //     id: number,
// //     name: string,
// //     marks: number
// // };
// // let stud: student = {
// //     id: 101,
// //     name: "ABCD",
// //     marks: 90
// // }
// // console.log(stud);

// // // interface Product {
// // //     id: number,
// // //     name: string,
// // //     price: number,
// // //     category: string
// // // };
// // // let prod: Product = {
// // //     id: 101,
// // //     name: "LAPTOP",
// // //     price: 75000,
// // //     category: "ELECTRONICS"
// // // };
// // // console.log(prod);


// // interface Product {
// //     id: number,
// //     name: string,
// //     price: number,
// //     category?: string
// // };
// // let prod: Product = {
// //     id: 101,
// //     name: "LAPTOP",
// //     price: 75000,
// //     // category: "ELECTRONICS"
// // };
// // console.log(prod);


// // //readonly  // readonly property cannot reassign a value after the object is created
// // // interface Student {
// // //     name: string,
// // //     readonly id: number
// // // }
// // // let student: Student = {
// // //     name: "RAHUL",
// // //     id: 101
// // // }
// // // student.name = "VIKAS";
// // // student.id = 102;
// // // console.log(student);



// // // interface with methods

// // // interface Student {
// // //     display(name: string, marks: number): string;
// // // }
// // // let student: Student = {
// // //     display(name, marks) {
// // //         return `${name}-${marks}`;
// // //     }
// // // }
// // // console.log(student.display("VIKAS", 90));

// // // extending interfaces


// // // extending the interface = accessing the property of one interface to another
// // // interface Student {
// // //     name: string,
// // //     age: number
// // // };

// // // interface Person extends Student {
// // //     sal: number
// // // };

// // // let person: Person = {
// // //     name: "VIKAS",
// // //     age: 20,
// // //     sal: 30000
// // // }

// // // console.log(person);


// // // index signature
// // // index signature basically means every property name must be a string and every value must be a number

// // interface Marks {
// //     [studentName: string]: number;
// // }
// // let marks: Marks = {
// //     ABCD: 60,
// //     BCDE: 60,
// //     CDEF: 60
// // };
// // console.log(marks);


// // // interface items {
// // //     [name: string]: number;
// // // }
// // // let prod: items = {
// // //     Laptop: 75000,
// // //     Phone: 30000,
// // //     Headphones: 5000,
// // //     Watch: 8000
// // // }
// // // console.log(prod);


// // // union

// // // let age: number = 22;
// // // console.log(age);

// // // let age: number | string | boolean | null
// // // age = null;
// // // console.log(age);


// // //union using functions
// // // function display(id: number | string | boolean) {
// // //     console.log(id);

// // // }
// // // display(123);
// // // display("AKASH");
// // // display(true)

// // // function getvalue(): number | string {
// // //     return 100;
// // // }
// // // console.log(getvalue());


// // //union using objects
// // // let student: {
// // //     name: string
// // //     age: number | string;
// // // };
// // // student = {
// // //     name: "VIKAS",
// // //     age: "20"
// // // }
// // // console.log(student);

// // // let product: {
// // //     name: string,
// // //     price: number | string,
// // //     available: boolean;
// // // }
// // // product = {
// // //     name: "VIKAS",
// // //     price: "1000",
// // //     available: true
// // // }
// // // console.log(product);

// // // function greet(value: string | number) {
// // //     if (typeof value === "string") {
// // //         console.log(value.toUpperCase());
// // //     } else {
// // //         console.log(value);

// // //     }

// // // }
// // // greet("vikas")
// // // greet(100)
// // //  <--------------------------------------------------------------------------------------------------------------------->
// // //enum
// // // a fixed list of named choices



// // //default numeric enums
// // // enum days {
// // //     monday,
// // //     tuesday,
// // //     wednesday,
// // //     thursday,
// // //     friday,
// // //     saturday,
// // //     sunday
// // // }
// // // console.log(days.sunday);

// // // // Initialized numeric enums
// // // enum days {
// // //     monday = 100,
// // //     tuesday,
// // //     wednesday,
// // //     thursday,
// // //     friday,
// // //     saturday,
// // //     sunday
// // // }
// // // console.log(days.sunday);


// // // // fully Initialized numeric enums


// // enum days {
// //     monday = 1,
// //     tuesday = 2,
// //     wednesday = 3,
// //     thursday = 4,
// //     friday = 5,
// //     saturday = 6,
// //     sunday = 7
// // }
// // console.log(days.sunday);

// // // String Enum
// // // enum order {
// // //     pending = "PENDING",
// // //     success = "SUCCESSFULL",
// // //     fail = "FAILED"

// // // }
// // // console.log(order.success);

// interface User {
//     name: string;
//     age: number;
// }

// const user: User = {
//     name: "John"
// };
// console.log(user);







//How can we declare multiple types in Interface?


// interface student {
//     marks: number | string;
//     sal: number;
// }
// let stud: student = {
//     marks: 20,
//     sal: 30000
// }
// console.log(stud);









