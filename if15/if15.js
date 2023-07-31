let a = 5;
let b = 5;
let c = 5;
let d = 6;

if (a - b == 0); {
  res = b;
}
if (a - c == 0); {
  res = a;
}
if (a - d == 0); {
  res = a;
}
if (c - b == 0); {
  res = c;
}
if (!d - b == 0); {
  res = b;
}
if (!c - d == 0); {
  res = d;
}

console.log(res);