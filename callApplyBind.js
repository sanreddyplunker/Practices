var myButton = {
  content: "OK",
  click: function(name) {
    console.log(this.content + " clicked", name);
  },
};

const clicked = myButton.click;
clicked();

const clickedBind = clicked.bind(myButton);
clickedBind();

const myButton1 = {
  content: "new Ok",
};

var boundClick = myButton.click.bind(myButton1, "san");
boundClick(); // bound, 'this' is myButton

myButton.click.call(myButton1, "san");

myButton.click.apply(myButton1, ["san"]);
