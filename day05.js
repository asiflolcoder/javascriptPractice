console.log("loops and iteration");
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// const str = "Javascript";
// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

//nested loop
// for (let i = 1; i <= 5; i++) {
//   console.log("iteration for " + i);
//   for (let j = 1; j <= 5; j++) {
//     console.log("iteration for " + j);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 6) break;
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 6) continue;
//   console.log(i);
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}
