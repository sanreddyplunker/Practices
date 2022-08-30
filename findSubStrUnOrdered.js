let s = "ttattyyybauuuab";
let input = "ab";
let ind;

for (let i = 0; i < s.length; i++) {
  let str = s
    .substring(i, i + input.length)
    .split("")
    .sort();
  if (str.join("") === input) {
    console.log(str, i);
  }
}
