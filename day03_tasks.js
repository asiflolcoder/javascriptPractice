console.log("Day 03 tasks");
num = 34;
let evenOdd = num % 2 == 0 ? "Even" : "Odd";
console.log(`${num} is ${evenOdd}`);

age = 15;
let drivingLicence = age >= 18 ? "Eligible" : "Not eligible";
console.log(drivingLicence);

const monthlySalary = 12300;
let yearlySalary = monthlySalary * 12;
const bonus = yearlySalary * 0.2;
const ctc = yearlySalary + bonus;
console.log(ctc);

let color = "green";
const trafficLight = color === "red" ? "Stop" : color === "green" ? "Go" : null;
console.log(trafficLight);

//electricity bill calculator
let units = 15;
const monthlyBill = units * 150 * 30;
console.log(monthlyBill);
let annual = monthlyBill * 12;
let discount = annual * 0.2;
annual = annual - discount;
console.log(annual);
