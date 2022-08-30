//"use strict";

// class animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let ani = new animal("san");
// let cat = {};
// cat.prototype = ani;
// console.log(cat);

// console.log(ani);

//=======================================================

// function main() {
//   let a = 0;
//   return function child() {
//     a++;
//   };
// }

// let obj = new main();
// console.log(obj.child());

//=======================================================

// let obj1 = {
//   name: "san",
//   print: function() {
//     //Don't use arrow function and this together
//     console.log("hi", this.name);
//   },
// };

// let obj2 = { name: "sane" };
// obj1.print();
// obj1.print.call(obj2);

//=======================================================

// let obj1 = {
//   name: "san",
//   inner: {
//     class: "10th",
//   },
// };

// let obj2 = obj1;
// obj1.name = "san2";
// console.log(obj2);

// for (let i = 0; i < obj1.keys(); i++) {
//   obj2[i] = obj2[i];
// }
// console.log(obj2);

//=======================================================

// function Base() {
//   var x = 6;
//   return function addSix(y) {
//     return x + y;
//   };
// }

// var addSix = new Base();
// console.log(addSix(10));
// console.log(addSix(20));

//=======================================================

// function usesThis(name) {
//   var that = this;
//   this.myName = name;

//   function returnMe() {
//     return that;
//   }

//   return {
//     returnMe: returnMe,
//   };
// }
// var usesthis = new usesThis("John");

// console.log("UsesThis thinks it's called " + usesthis.returnMe().myName);

//=======================================================

// let str = "sanisgood";
// let arr = str.split("");
// for (let i = 0; i < str.length; i++) {
//   for (let j = 1; j < str.length; j++) {
//     console.log(str.slice(i, j + 1));
//   }
// }

//=======================================================

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.address = function(address) {
//   this.address = address;
// };

// let obj1 = new User("alice", 20);
// obj1.address("area");

// console.log(obj1);

//===================================================================

// let a = Object.create({ x: "y" });
// a.address = "new";
// console.log(a);
// console.log(JSON.stringify(a));

//=====================================================================

// let obj = {
//   name: "san2",
//   getName: function() {
//     console.log(this.name);
//   },
// };

// obj.getName();
// let obj2 = { name: "sandy" };
// let obj2Func = obj.getName; // Assigning function of one obj to another makes this to refer global
// obj2Func();

//==============================================================

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user.ref().name);

//===============================================
//Functional constructor
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

//===================================================

// let str = "san";
// str[0] = "D";
// console.log(str); -- Strings are immutable

//===================================================
//uppercase first letter
// let str = "san";
// let str2 = str[0].toUpperCase() + str.slice(1);
// console.log(str2);

//array triplet sum
//matrix traverse 4 directions backtracking
//matrix max 1s in row

//===================================================
//list of urls
// var promises = urls.map((url) => fetch(url).then((y) => y.text()));
// Promise.all(promises).then((results) => {
//   // do something with results.
// });
