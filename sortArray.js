let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice",
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob",
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice",
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice",
  },
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 5231": 232142.5,
  "AAA - 9921": 0,
  "AAA - 8191": 4344,
};

console.log(
  acctData.sort((acc1, acc2) => {
    if (balance[acc2.acctNum] < balance[acc1.acctNum]) return 1; //return should always less or greater than 0 not between themselves
    if (balance[acc2.acctNum] > balance[acc1.acctNum]) return -1; //return should always less or greater than 0 not between themselves
  })
);
