const num = 266219;
const a = num.toString();
let b = 1;
for (let i = 0; i < a.length; i++) {
   b *= a[i];
}
console.log(b);
b = b ** 3;
console.log(b.toString().substr(0, 2));
