let m = "YYY";
let n = ["YYY", "YN", "YYY", "YYY"];
let count = 0;
let maxCount = 0;

n.map((val) => {
  if (val === m) {
    count++;
    maxCount = maxCount > count ? maxCount : count;
  } else count = 0;
});

console.log(maxCount);
