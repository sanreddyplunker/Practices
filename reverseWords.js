let str = "hi hello bye";

let strSpl = "";
str.split(" ").map((currVal) => {
  let newVal = currVal.split("").reverse().join("");
  strSpl = strSpl + " " + newVal;
});

console.log(strSpl);
