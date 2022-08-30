let arr = [1, 2, 3, 4, 5, 5];
let arr2 = [10, 20, 30];

let resMap = arr.map((a) => a * 2);
console.log(resMap);

let resEach = arr.forEach((a) => a * 2); //Don't use foreach with promises
console.log(resEach);

console.log(Array.of(1, 2, 3));
//console.log(arr.at(1)); // Very new not all browsers supports
console.log(arr.concat(arr2));
console.log(arr2.copyWithin(0, 1));
for (entry of arr2.entries()) {
  console.log(entry);
}
console.log(arr2.every((a) => a < 30));
arr2.fill(4, 1, 3); // will not work for empty array
console.log(arr2);

let arrFilter = arr.filter((a) => a > 2);
console.log(arrFilter);

//console.log(arr.find(5));finds first satisfied element and exits

//console.log(arr.findIndex(5));

const arrFlat = [0, 1, 2, [[[3, 4]]]];
console.log(arrFlat.flat(2));

let arrFlatMap = ["it's Sunny in", "", "California"];
console.log(arrFlatMap.flatMap((x) => x.split(" ")));

console.log(arr.includes(5));
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.join(":"));
arr.pop();
console.log(arr);
console.log(arr.reduce((prev, curr) => prev + curr));
console.log(arr.reverse());
console.log(arr.shift());
console.log(arr.unshift(10, 100));

let arrSlice = [1, 2, 3, 4, 5];
console.log(arrSlice.slice(1, 4)); //Original array not modified
arrSlice.splice(4, 1, 10); //Original array modified - add/remove items into array
console.log(arrSlice);

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(items);

const fruits = ["Strawberry", "Mango"];
//Shallow Copy array
const fruitsCopy1 = [...fruits];
const fruitsCopy2 = Array.from(fruits);
const fruitsCopy3 = fruits.slice();

//Deep Copy array
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
