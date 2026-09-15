// Utility Types = tools to modify an existing type.
//partial
// interface Student {
//     name: string,
//     id: number,
//     marks: number
// }
// let stud: Student = {
//     name: "VIKAS",
//     id: 100,
//     marks: 85
// }
// console.log(stud);

// let student1: Partial<Student> = {
//     name: "VIKAS"
// }
// console.log(student1);
// let student2: Partial<Student> = {
//     id: 30,
// }
// console.log(student2);

// let student3: Partial<Student> = {
//     marks: 85
// }

// console.log(student3);

//required

// interface Student {
//     name: string,
//     id: number,
//     marks?: number
// }
// let stud: Required<Student> = {
//     name: "VIKAS",
//     id: 10,
//     marks: 90
// }
// console.log(stud);


//record<K,T>
// type Products = Record<string, number>;

// let items: Products = {
//     Laptop: 75000,
//     Phone: 30000,
//     Watch: 5000
// }
// console.log(items);

// //omit
// interface Student {
//     name: string,
//     id: number,
//     marks: number
// }
// type StudentWithoutId = Omit<Student, "id">;
// let student: StudentWithoutId = {
//     name: "VIKAS",
//     marks: 20
//     // id: 10
// };
// console.log(student);


//pick
// interface Student {
//     name: string,
//     id: number,
//     marks: number
// }
// type student = Pick<Student, "name" | "marks">;
// let std: student = {
//     name: "VIKAS",
//     marks: 90
// };
// console.log(std);


//exculde
// type Role = "admin" | "user" | "guest";

// type AllowedRole = Exclude<Role, "guest">;

// let role1: AllowedRole = "admin";
// let role2: AllowedRole = "user";

// console.log(role1);
// console.log(role2);


type color = "red" | "green" | "blue" | "yellow";

type col = Exclude<color, "yellow">;

let col1: col = "blue";
let col2: col = "green";
let col3: col = "red";
// let col4:col = "yellow"
console.log(col1);
console.log(col2);
console.log(col3);

// readonly

// type product = {
//     id: number,
//     name: string
// }
// let prod: Readonly<product> = {
//     id: 10,
//     name: "laptop"
// }
// console.log(prod);
// prod.name= "MOBILE"

interface Employee {
    id: number;
    name: string;
    salary: number;
}
let emp: Readonly<Employee> = {
    id: 10,
    name: "VIKAS",
    salary: 10000
}
console.log(emp);

// emp.id = 20








