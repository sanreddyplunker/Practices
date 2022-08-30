function Node1(data) {
  this.data = data;
  this.next = null;
}

let one = new Node1(10);
let two = new Node1(20);
let three = new Node1(30);
one.next = two;
two.next = three;

let current = one;
let next = null;
let prev = null;

while (current != null) {
  next = current.next;
  prev = current;
  current.next = prev;
  current = next;
}

console.log(one);
console.log(prev);
