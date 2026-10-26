console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("");
console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
  if (num % 6 === 0) {
    console.log(`Found: ${num}`);
    break;
  }
  num++;
}

let doNum = 1;
do {
  if (doNum % 2 === 0) {
    doNum++;
    continue;
  }
  doNum++;
} while (doNum <= 10);
