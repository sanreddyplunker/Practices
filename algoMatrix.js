//Print Spirally
const spiralMatrix = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

let top = 0;
right = spiralMatrix[0].length - 1;
left = 0;
bottom = spiralMatrix.length - 1;

let result = [];

while (true) {
  if (left > right) {
    break;
  }
  for (let i = left; i <= right; i++) {
    result.push(spiralMatrix[top][i]);
  }
  top++;
  if (top > bottom) {
    break;
  }
  for (let i = top; i <= bottom; i++) {
    result.push(spiralMatrix[i][right]);
  }
  right--;
  if (left > right) {
    break;
  }
  for (let i = right; i >= left; i--) {
    result.push(spiralMatrix[bottom][i]);
  }
  bottom--;
  if (top > bottom) {
    break;
  }
  for (let i = bottom; i >= top; i--) {
    result.push(spiralMatrix[i][left]);
  }
  left++;
}
//console.log(result);

const diagonalMatrix = [
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
  [5, 6, 7, 8, 9],
];
let leftDiagonal = 0;
let topDiagonal = 0;
let rightDiagonal = diagonalMatrix[0].length;
let bottomDiagonal = diagonalMatrix.length;
let sumDiagonal=0;

while(topDiagonal<bottomDiagonal){
  for(let i=0;i<rightDiagonal;i++){
    sumDiagonal+=
  }
}