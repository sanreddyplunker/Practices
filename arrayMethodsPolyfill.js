// Dont use arrow function

Array.prototype.customForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const arr = [1, 2, 3];
let arrEach = arr.customForEach((a) => console.log(a * 2));
//////////////////////

Array.prototype.customMap = function(callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
};

const arr2 = [1, 2, 3];
let arrMap = arr2.customMap((a) => a * 2);
console.log(arrMap);
//////////////////////////////

Array.prototype.customFilter = function(callback) {
  let resFilter = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resFilter.push(this[i]);
    }
  }
  return resFilter;
};

const arr3 = [1, 2, 3];
let arrFilter = arr3.customFilter((a) => a > 1);
console.log(arrFilter);
//////////////////////////////

Array.prototype.customReduce = function(callback, initialValue) {
  let temp = initialValue ? initialValue : this[0];
  for (let i = 0; i < this.length - 1; i++) {
    temp = callback(temp, this[i + 1]);
  }

  return temp;
};

const arr4 = [1, 2, 3];
let arrReduce = arr3.customReduce((a, b) => b - a);
console.log(arrReduce);
////////////////////////////////

Array.prototype.customSplice = function(start, deleteCount) {
  let returnArray = [];
  for (let i = 0; i <= start; i++) {
    returnArray.push(this[i]);
  }
};
