let a = [1, 1, 2, 2, 3, 3];

let b = [];

const unq = function () {
  a.filter((v) => {
    if (b.indexOf(v) === -1) {
      b.push(v);
    }
  });
  return b;
};

Array.prototype.uniq = unq;
console.log(a.uniq());
