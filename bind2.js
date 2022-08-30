const obj1 = {
  firstName: "Sai Pavan",
  lastName: "Manda",
  getFullName: function() {
    console.log(this.firstName + " " + this.lastName);
  },
};
const obj2 = {
  firstName: "Helo",
  lastName: "Sai Pavan",
};
const getFullNameOuter = obj1.getFullName.bind(obj2);
getFullNameOuter();
