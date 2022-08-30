let a = {
  name: "san",
  address: {
    location: {
      city: "bangalore",
      state: "karnataka",
    },
    street: "1st cross",
  },
};

//let b = { ...a };
const deepCopy = (a) => {
  let b = {};
  for (let i in a) {
    if (typeof a[i] === "object") {
      b[i] = deepCopy(a[i]);
    } else {
      b[i] = a[i];
    }
  }
  return b;
};

b = deepCopy(a);
b.address.location.city = "CTA";
b.address.street = "2nd cross";
b.name = "ram";
console.log(a);
console.log(b);
