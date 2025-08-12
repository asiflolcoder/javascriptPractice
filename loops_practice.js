console.log("Loops and iteration");
// for (let i = 0; i <= 10; i++) {
//   console.log(`iteration no ${i}`);
// }
//1-10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// let num = 10;
// for (let i = 0; i < 2; i++) {
//   for (let j = 1; i <= 10; j++) {
//     let multi = j * num;
//     console.log(`${num} * ${j} = ${multi}`);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`iteration for 1st ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`iteration for ${j}`);
//   }
// }

// let num = 8;
// for (let i = 1; i < 2; i++) {
//   console.log(`multiplication table`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${num} * ${j} = ${num * j}`);
//   }
// }

for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//factorial

let num = 8;
let fac = 1;
for (let i = 1; i <= 8; i++) {
  fac *= i;
}
console.log(fac);

//brak and continue
for (let i = 0; i < 100; i++) {
  if (i == 45) continue;
  else {
    console.log(i);
  }
}

//multiple operators
for (let i = 0, j = 5; i <= 3, j >= 0; i++, j--) {
  console.log(`iteration for ${i} and iteration for ${j}`);
}
//multiple operator use korle not nested but ek line ei hobe

//while-number of iteration is not known
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//count digits in a number
// var n = 14532;
// while (n % 10 !== 0) {
//   let dig = n % 10;
//   console.log(dig);
//   n = n / 10;
// }
