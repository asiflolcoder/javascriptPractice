console.log("conditional statements");
// age = 20;
// if (age > 18) {
//   console.log("He can drive");
// } else {
//   console.log("He cannot drive");
// }

// //condition will be converted in boolean value
// //there are six  falsy values in javascript - "",NaN,false,undefined,null,0
// let marks = 0;
// if (marks >= 40) {
//   console.log("B+");
// } else if (marks < 40) {
//   console.log("F");
// } else {
//   console.log("He didn't attend");
// }

// let aVal = "Asif" - 23;
// console.log(typeof aVal);
// if (aVal) {
//   console.log("I am true");
// } else {
//   console.log("I am false");
// }

// let x = 10;
// if (x) console.log("x is 10");

// //nested if else
// let age = 133;
// if (age > 100) {
//   console.log("Age is greater than 100");
//   if (age > 150) {
//     console.log("Age is greater than 150");
//   } else {
//     console.log("Age is less than 150");
//   }
// }

// //switch case - mapping a single value from many conditions
// let day = "Saturday";
// switch (day) {
//   case "Sunday":
//     console.log("Today is Sunday");
//     break;
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//     break;
//   default:
//     console.log("Day is not found");
// }

// //ternary/conditonal operator
// //let age = 20;
// let cond = age > 18 ? "He can drive" : "he cannot drive";
// console.log(cond);

// //let num = -10;
// if (num >= 0) console.log("positive");
// else console.log("negative");

// let productPrice = 100;
// let shippingCost = 50;
// let totalCost = productPrice + shippingCost;
// if (totalCost >= 100) {
//   console.log("Gets a free shipping");
// }
// let num1 = 20;
// let num2 = 30;
// let operator = "*";
// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("invalid operation");
// }

// //let num = 12;
// let evenOdd = num % 2 == 0 ? "Even" : "odd";
// console.log(evenOdd);

// let backgroundColor = "black";
// let mood = backgroundColor === "black" ? "Dark mode" : "light mode";
// console.log(mood);

// // let loggedIn = true;
// // let message = loggedIn ? "User is logged in" : "user is not logged in";
// // console.log(message);

// let score = 100;
// let highScore = 30;
// //let message = score > highScore ? "High score" : "Try Again";

// console.log(message);
//tasks of day 03
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
//Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
let amount = 240;
if (amount % 100 == 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

let age = 67;
if (age < 18) console.log("$3");
else if (age >= 18 && age <= 60) console.log("$10");
else if (age > 60) console.log("$8");

let month = "January";
switch (month) {
  case "March":
    console.log("Aries");
    break;
  case "April":
    console.log("Aries");
    break;
  case "April":
    console.log("Taurus");
    break;
  case "May":
    console.log("Taurus");
    break;
  case "May":
    console.log("Leo");
    break;
  default:
    console.log("Month not found");
}

let side1 = 12;
let side2 = 12;
let side3 = 12;
if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
