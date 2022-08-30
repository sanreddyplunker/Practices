let str = "12321156";
let c = 1;
for (let i = 0; i < str.length; i++) {
  c++;
  for (let j = 0; j < str.length; j = j + c) {
    str.substring(j, c);
  }
}
