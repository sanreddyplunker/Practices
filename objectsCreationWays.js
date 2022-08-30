const obj = {
  firstName: "san1",
};
//

const obj2 = new Object();
obj2.firstName = "san2";
//

const obj3 = function(firstName) {
  this.firstName = firstName;
};
const obj3Obj = new obj3("san3");
//

const objParent = { surname: "reddy" };
const obj4 = Object.create(objParent);
obj4.firstName = "san4";
//

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
//

class Person {
  constructor(fname) {
    this.firstName = fname;
  }
}
const person = new Person("testFirstName", "testLastName");

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4, obj4.surname);
console.log(returnedTarget, target);
console.log(person);
