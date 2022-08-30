let arr = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

let res = [];
for (let i = 0; i < arr.length; i++) {
  let cols = [];
  for (let j = 0; j < arr[0].length; j++) {
    cols.push(0);
  }
  res.push(cols);
}

function mazeUtil(arr, x, y) {
  if (arr[x][y] == 1) {
    res[x][y] = 1;

    if (x == arr[0].length - 1 && y == arr.length - 1) return true;
    if (mazeUtil(arr, x, y + 1)) return true;
    if (mazeUtil(arr, x + 1, y)) return true;
    if (mazeUtil(arr, x, y - 1)) return true;
    if (mazeUtil(arr, x - 1, y)) return true;
    res[x][y] = 0;
    return false;
  } else {
    return false;
  }
}

mazeUtil(arr, 0, 0);

console.log(res);
