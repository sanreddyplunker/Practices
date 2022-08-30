let car1 = {
  color: "Red",
  company: "Ferrari",
  purchaseCar: function(currency, price) {
    console.log(
      `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
    );
  },
};

let car2 = {
  color: "Blue",
  company: "BMW",
};

let car3 = {
  color: "White",
  company: "Mercedes",
};

Function.prototype.myBind = function(currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  console.log(currentContext);
  console.log(this);
  return function() {
    return currentContext.fn(...arg);
  };
};

Function.prototype.myApply = function(currentContext = {}, arg = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  if (!Array.isArray(arg)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

Function.prototype.myCall = function(currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

const initPurchaseBmw = car1.purchaseCar.myBind(car2, "₹", "1,00,00,000");
initPurchaseBmw();
// purchaseCar.myApply(car2, ["₹", "50,00,000"]);
// purchaseCar.myCall(car3, "₹", "60,00,000");
