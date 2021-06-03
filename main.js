"use strict";

let arr = [
   '122',
   '223',
   '224',
   '125',
   '426',
   '127',
   '428',
];

console.log(arr.filter(item=>{
  return item.substr(0,1)==='4'|| item.substr(0,1)==='2';
}));

//_________________________
function search(a) {
   for (let j = a - 1; j > 1; j--) {
      if (a % j === 0) {
         return;
      }
   }
   console.log(a + " : Делители этого числа: 1 и " + a);
}

for (let i = 1; i <= 100; i++) {
   search(i);
}

