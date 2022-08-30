let mat = [
  [1, 2, 3],
  [8, 12, 6],
  [3, 6, 9],
];

let max = 0;
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    max = mat[i][j] < max ? max : mat[i][j];
  }
}

console.log(max);
