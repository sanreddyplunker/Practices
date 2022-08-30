function func() {
  return (promi = new Promise((resolve, reject) => {
    resolve();
  }));
}

var promiseNew = new func();

const promise = new Promise((resolve, reject) => {
  reject();
});

promise.catch(() => console.log("normal"));

promiseNew
  .then(() => console.log("1"))
  .then(() => console.log("2"))
  .catch(() => console.log("E"))
  .finally(() => console.log("F"))
  .then(() => console.log("3"));

//list of urls
// var promises = urls.map((url) => fetch(url).then((y) => y.text()));
// Promise.all(promises).then((results) => {
//   // do something with results.
// });
