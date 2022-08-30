let b = { name: "alice", age: 20, sal: 1000 };
let a = { sal: 2000, name: "bob", address: "Delhi", job: "SE" };

function objConcat(a, b) {
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  let c = {};
  aKeys.map((akey, index) => {
    if (bKeys.includes(akey)) {
      c[akey] = a[akey] + b[akey];
    }
  });
  let ckeys = Object.keys(c);
  aKeys.map((akey) => {
    if (!ckeys.includes(akey)) {
      c[akey] = a[akey];
    }
  });
  bKeys.map((bkey) => {
    if (!ckeys.includes(bkey)) {
      c[bkey] = b[bkey];
    }
  });

  return c;
}

console.log(objConcat(a, b));
