let x = /[,$&]/;
//console.log(x.test("&"));

//Reverse string without affecting spl chars
const str = "a&b,c";
const str1 = str.split("");
let i = 0;
let j = str1.length - 1;
while (i != j) {
  if (x.test(str1[i])) {
    i++;
  } else if (x.test(str1[j])) {
    j--;
  } else {
    let temp = str1[i];
    str1[i] = str1[j];
    str1[j] = temp;
    j--;
    i++;
  }
}
//console.log(str1.join(""));

//find palindromes in string
function palindrome() {
  let palin = "abacccasddsa";
  let result = [];
  for (let i = 0; i < palin.length; i++) {
    for (let j = i + 1; j < palin.length; j++) {
      if (isPalindrome(palin.substring(i, j + 1))) {
        result.push(palin.substring(i, j + 1));
      }
    }
  }
  return result;
}
const isPalindrome = (str) => {
  for (let k = 0; k < str.length / 2; k++) {
    if (str[k] != str[str.length - 1 - k]) {
      return false;
    }
  }
  return true;
};
//console.log(palindrome());

//triplets of sum equal
const tripletSum = () => {
  let a = [1, 1, 1, 2, 3, 4];
  let sum = 6;
  let triplet = [];
  a = a.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    let j = i + 1;
    let k = a.length - 1;
    while (j < k) {
      if (a[i] + a[j] + a[k] >= sum) {
        triplet.push(a[i], a[j], a[k]);
        k--;
      } else {
        j++;
      }
    }
  }
  return triplet;
};
//console.log(tripletSum());

//Array in zig-zag way
function zigZag(a) {
  for (let i = 0; i < a.length; i = i + 2) {
    if (a[i] > a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
    }
    if (a[i + 2] > a[i + 1]) {
      let temp = a[i + 2];
      a[i + 2] = a[i + 1];
      a[i + 1] = temp;
    }
  }
  return a;
}
//console.log("zigzag", zigZag([4, 3, 7, 8, 6, 2, 1]));

//smallest no which cannot be rep as sum of subarray
function smallestNoSum() {
  let a = [1, 1, 1];
  let res = 1;
  for (let i = 0; i < a.length; i++) {
    if (res >= a[i]) {
      res = res + a[i];
    }
  }
  return res;
}
//console.log(smallestNoSum());

function moveNegativeOneSide() {
  let arr = [1, 3, 2, -3, -2, -1, 4, 6];
  let res = [];
  let l = 0;
  let r = arr.length - 1;
  for (let a of arr) {
    if (a < 0) {
      res[l] = a;
      l++;
    } else {
      res[r] = a;
      r--;
    }
  }
  return res;
}
//console.log(moveNegativeOneSide());

function unionIntersection() {
  let a = [1, 3, 4, 6];
  let b = [4, 6, 7, 8];
  let alen = 0;
  let blen = 0;
  let res = [];
  let resInter = [];
  while (alen < a.length && blen < b.length) {
    if (a[alen] < b[blen]) {
      res.push(a[alen]);
      alen++;
    } else if (a[alen] > b[blen]) {
      res.push(b[blen]);
      blen++;
    } else {
      res.push(b[blen]);
      resInter.push(b[blen]);
      alen++;
      blen++;
    }
  }
  while (alen < a.length) {
    res.push(a[alen]);
    alen++;
  }
  while (blen < b.length) {
    res.push(b[blen]);
    blen++;
  }
  console.log(res);
  console.log(resInter);
}

//unionIntersection();

function subArraySumZero() {
  let a = [4, 2, -3, 1, 6];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum == 0) {
      return true;
    }
  }
}

//console.log(subArraySumZero());

function allSubArraySumZero() {
  let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
  let map = new Map();
  let res = [];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0) {
      res.push(`0 - ${i}`);
    }
    if (map.has(sum)) {
      res.push(`${map.get(sum) + 1}-${i}`);
    }
    map.set(sum, i);
  }
  return res;
}
//console.log(allSubArraySumZero());

function maxSubArraySum() {
  let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
  let max = 0;
  let maxSum = 0;
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    max += arr[i];
    if (max < 0) {
      max = 0;
      start = i + 1;
    }
    if (maxSum < max) {
      maxSum = max;
      end = i;
    }
  }
  console.log(maxSum, start, end);
}

//maxSubArraySum();

function minElementInSortedRotated() {
  let arr = [8, 9, 10, 2, 3, 4];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) left = mid + 1;
    else right = mid;
  }
  return arr[left];
}

//console.log(minElementInSortedRotated());

function productArrayExceptSelf() {
  let a = [1, 2, 3, 4];
  let left = [];
  let right = [];
  let res = [];
  left[0] = 1;
  right[a.length - 1] = 1;

  for (let i = 1; i < a.length; i++) {
    left[i] = a[i - 1] * left[i - 1];
  }
  for (let j = a.length - 2; j >= 0; j--) {
    right[j] = a[j + 1] * right[j + 1];
  }
  console.log(left);
  console.log(right);
  for (let k = 0; k < a.length; k++) {
    res[k] = left[k] * right[k];
  }
  return res;
}

//console.log(productArrayExceptSelf());

function maxProductSubArray() {
  let arr = [2, 3, 4, -3];
  let max = 1;
  let cumulativeProd = 1;
  let startIndex = 0;
  let endIndex = 0;
  arr.map((a, index) => {
    cumulativeProd *= a;
    if (cumulativeProd >= max) {
      max = cumulativeProd;
      endIndex = index;
    } else if (cumulativeProd < max) {
      startIndex = index;
    }
  });
  console.log(max, startIndex, endIndex);
}

//maxProductSubArray();
function maxArea() {
  let a = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  let i = 0;
  let j = a.length - 1;
  let area = 1;
  while (i < j) {
    area = Math.max(area, Math.min(a[i], a[j]) * (j - i));
    if (a[i] > a[j]) j--;
    else i++;
  }
  return area;
}

//console.log(maxArea());

var a = [1, [2, [3, [4], 6, 9], 10], 11];
let res = [];

function flatArray(a) {
  a.map(function(a) {
    if (Array.isArray(a)) {
      flatArray(a);
    } else {
      res.push(a);
    }
  });
  return res;
}

console.log(flatArray(a));
