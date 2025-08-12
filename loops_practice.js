console.log("Loops and iteration");
for (let i = 0; i <= 10; i++) {
  console.log(`iteration no ${i}`);
}
1-10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

let num = 10;
for (let i = 0; i < 2; i++) {
  for (let j = 1; i <= 10; j++) {
    let multi = j * num;
    console.log(`${num} * ${j} = ${multi}`);
  }
}

for (let i = 1; i <= 5; i++) {
  console.log(`iteration for 1st ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`iteration for ${j}`);
  }
}

let num = 8;
for (let i = 1; i < 2; i++) {
  console.log(`multiplication table`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${num} * ${j} = ${num * j}`);
  }
}
break and continue