function getSumEqual() {
  let a = [1, 3, 6, 7, 8];
  let b = 9;
  let j = a.length - 1;
  let i = 0;
  while (i <= j) {
    if (a[i] + a[j] === b) {
      console.log(a[i], a[j]);
      break;
    }
    if (a[i] + a[j] > b) j = j - 1;
    if (a[i] + a[j] < b) i = i + 1;
  }
}

//getSumEqual();

function getSumEqualNoSort() {
  let a = [1, 8, 6, 4, 5];
  let sum = 12;
  let set = new Set();
  for (let i = 0; i < a.length; i++) {
    if (set.has(sum - a[i])) {
      console.log(a[i], sum - a[i]);
    } else {
      set.add(a[i]);
    }
  }
}

getSumEqualNoSort();
