function A(B) {
  B = { ...B, color: "red" };
  return B;
}

function B() {
  this.color;
  this.name;
}

B = A(B);

console.log(B);
