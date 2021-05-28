"use strict";

const num = 266219;
// const a = num.toString();
// let b = 1;
let c = Array.from(num.toString(), Number);

let result = c.reduce((sum, cur) => {
   return sum * cur;
});
console.log(result);

// for (let i = 0; i < a.length; i++) {
//    b *= a[i];
// }
// console.log(b);

result = result ** 3;
console.log(result.toString().substr(0, 2));
