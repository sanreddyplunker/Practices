function Animal() {}

Animal.prototype.eat = function () {
  console.log("Animal eat");
};

function Cat() {}

let animal = new Animal();

Cat.prototype = animal; //-- has to be initialized

Cat.prototype.eat = function () {
  console.log("cat eat");
};

let cat = new Cat();
cat.eat();
