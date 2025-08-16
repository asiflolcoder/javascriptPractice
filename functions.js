console.log("Functions");
//function - user defined , built it
//array filter
// const numbers = [12, 23, 21, 22, 11];
// let filter = numbers.filter((x) => x % 2 == 1);
// console.log(filter);
// function greet() {
//   console.log("Hi I am Asif");
// }

// greet();

//function as a expression
//expression - something that produces a value
// let greetMe = function () {
//   console.log("Hello I am Asif");
// };
// // console.log(greetMe());
// let greet = greetMe();
// console.log(greet);
//when a function expression doesn't have return value ,it returs undefined
// let calcAge = function (birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   return age;
// };
// console.log(calcAge(2001, 2025));
//parameter ,arguments
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// sum(10, 20);
// //function expression
// let divide = function (a, b) {
//   const divide = a / b;
//   let x = console.log(divide);
//   return console;
// };
// console.log(divide(30, 2));
//when a function expression doesn't return anything ,it prints undefined
// function ret(a, b) {
//   return a, b;
// }
// console.log(ret(10, 20));
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(10, 20);
// function double(num) {
//   return 2 * num;
// }
// console.log(double(result));
// function calc(a = 10, b = 10, c = 10, d = 10) {
//   return a + b - c + d;
// }
// console.log(calc());
//to make code more failsafe - we use default parameters
//rest parameter
// function restParam(...rest) {
//   let filter = rest.filter((x) => x % 2 == 0);
//   return filter;
// }
// console.log(restParam(12, 23, 33, 2, 10, 13));

//nested functions- functions inside another functions
// function outer() {
//   console.log("outer function");
//   function inner() {
//     console.log("inner function");
//   }
//   inner();
// }

// outer();

function sayName(name) {
  console.log("Hi i am " + name);
  return function age() {
    console.log("I am 24");
  };
}
let outer = sayName("asif");
console.log(outer());
