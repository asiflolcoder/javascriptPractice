console.log("Variables and data types");
var a = 100;
let name = "Asif";
const isStudent = true;
console.log(a, name, isStudent);
//primitive
let num = 234;
let str = "Md Asif ul Haque";
let bool = true;
let n = null;
let b;
console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(n, typeof n);
console.log(b, typeof b);
console.log("Here were some examples of data types");

//variable assignment is pass by value

let veg = "Carrot";
let fruit = "kiwi";

veg = fruit;
console.log(veg, fruit);

num1 = 100;
num2 = 300;
num1 = num2;
num2 = num1;
console.log(num1, num2);
//non primitve data type
let arr = ["Asif", 24, true, ["Dragon", "Apple"]];
console.log(arr, typeof arr);

let obj = {
  name: "Asif",
  age: 24,
  isStudent: true,
  fav: [334, 334],
};
console.log(obj, typeof obj);

//variable naming convention
// let react-play ;
let firstName = "MD Asif";
let lastName = "ul haque";
let fullName = firstName + lastName;
console.log(fullName);
my_age = 24;
// 1name = 23

//variable scoping
var a = 