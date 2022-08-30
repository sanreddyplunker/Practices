const arr = [1, 2, 3];
arr.push(4);

// console.log(arr);

// console.log(arr.filter((a) => a > 2));

//longest palindrome
const str = "123454321";
const arr2 = str.split("").map(Number);
const arr3 = [];
let j = arr2.length;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == arr2[j]) {
    j--;
    arr3.push(arr2[i]);
    continue;
  } else {
    continue;
  }
}
arr3.push(1, 2, 3);
console.log(arr3);
