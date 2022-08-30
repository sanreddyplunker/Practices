function PromiseCustom(fn) {
  this.thenFn;
  this.catchFn;
  const res = (data) => {
    this.thenFn(data);
  };
  const rej = (data) => {
    this.catchFn(data);
  };
  this.then = (cb) => {
    this.thenFn = cb;
  };
  this.catch = (cb) => {
    this.catchFn = cb;
  };
  fn(res, rej);
}

const prom = new PromiseCustom((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});
prom.then((data) => console.log(data));

const prom2 = new PromiseCustom((res, rej) => {
  setTimeout(() => {
    rej(2);
  }, 1000);
});
prom2.catch((data) => console.log(data));

function promiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          result.push(data);
          if (i == promises.length - 1) {
            resolve(result);
          }
        })
        .catch((data) => reject(data));
    }
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo1");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo2");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo3");
});

promiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
