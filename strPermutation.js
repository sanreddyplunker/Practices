let str = "abcd";
let result = [];

function findPermutations(str, res) {
  if (str.length == 0) {
    console.log(res);
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let left_substr = str.slice(0, i);
    let right_substr = str.slice(i + 1);
    let rest = left_substr + right_substr;
    findPermutations(rest, res + ch);
  }
}

findPermutations(str, result);
