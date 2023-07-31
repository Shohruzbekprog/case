let a = 9;
let b = 11;
let c = 18;

if (a + b > b + c) {
 res = a + b;
}
if (c + b > a + c) {
 res = b + c;
}
if (c + b < a + c) {
 res = a + c;
}

console.log(res);