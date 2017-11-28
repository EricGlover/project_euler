//EULER #1
//HAXRAX
//FIND THE SUM OF ALL MULTIPLES OF 3 OR 5 BELOW N

//input
//T
//T lines of N

//constraints
//1 <= T <= 10 ** 5
//1 <= N <= 10 ** 9

const assert = require("assert");

//FIND THE SUM OF ALL MULTIPLES OF 3 OR 5 BELOW N
//attempt 1
// const euler1 = n => {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     } else if (i % 5 === 0) {
//       sum += i;
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//       // sum -= i
//     }
//   }
//   return sum;
// };
//attempt 2
// const euler1 = n => {
//   let sum = 0;
//   let i = 0;
//   while ((i += 3) < n) {
//     sum += i;
//   }
//   i = 0;
//   while ((i += 5) < n) {
//     sum += i;
//   }
//   i = 0;
//   while ((i += 15) < n) {
//     sum -= i;
//   }
//
//   return sum;
// };
// 10 / 3 = 3
// 3 , 3 2, 3 3, 3 4, 3 5
// 5 , 5 2, 5 3, 5 4, 5 5
const sumToI = i => i * (i + 1) / 2;
const euler1 = n => {
  n -= 1;
  let threes = Math.floor(n / 3);
  let fives = Math.floor(n / 5);
  let fifteens = Math.floor(n / 15);
  return sumToI(threes) * 3 + sumToI(fives) * 5 - sumToI(fifteens) * 15;
};

euler1(7);

module.exports = euler1;
