function func() {
  var count = 0;
  return function innerFunc() {
    count++;
    console.log("out", count);
    if (count % 3 === 0) {
      console.log("hi", count);
    }
  };
}

let san = func();
san();
san();
san();
