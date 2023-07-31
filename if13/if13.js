let A = 5;
let B = 7;
let C = 5;

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