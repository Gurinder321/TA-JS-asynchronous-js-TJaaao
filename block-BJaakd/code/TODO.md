1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
}).then(() => {
  console.log('Promise Resolved!');
});

// Answer

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved!');
  }, 1000);
});

promise.then((message) => {
  console.log(message);
});
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
new Promise((resolve, reject) => {
  setTimeout(reject, 1000);
}).catch(() => {
  console.log('Rejected Promise!');
});

// Answer

let promise = new Promise((resolve, reject) => {
  reject('Rejected Promise!');
});

promise.catch((message) => {
  console.log(message);
});
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
Promise.reject(new Error('Rejected Promise!'))
  .then(
    function () {},
    function (error) {
      console.error(error);
    }
  )
  .finally(() => {
    console.log('Promise Settled!');
  });

//   Answer
let promise = new Promise((resolve, reject) => {
  reject('Rejected Promise!');
});

promise
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log('Promise Settled!');
  });
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

// A, D, C, B
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time) {
  setTimeout(() => {}, time);
}

// Answer
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise Resolved!`);
    }, time);
  });
}

wait(1000).then(console.log);
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
const myPromise = new Promise((resolve, reject) => {
  resovle(21);

  if (num > 100) {
    resolve('Greater than 100');
  } else {
    reject('Less than 100');
  }
});

myPromise.then((message) => {
  console.log('message');
});

// Answer

let promise = new Promise((resolve, reject) => {
  resolve(21);
})
  .then((value) => {
    console.log(value);
    return value + 10;
  })
  .then((value) => {
    console.log(value);
    return value + 100;
  })
  .then((value) => {
    if (value > 100) {
      throw new Error('Something went wrong!');
    }
  })
  .catch(console.log);
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let promise = new Promise((resolve, reject) => {
  resolve(['A']);
})
  .then((value) => {
    console.log(value);
    return value.concat('B');
  })
  .then((value) => {
    console.log(value);

    return value.reduce((acc, cv, i) => {
      acc[i] = cv;
      return acc;
    }, {});
  })
  .then((value) => {
    console.log(value);
  });
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject) => {
  resolve(1);
});

first
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return 4;
  });
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject) => {
  resolve(1);
});

first.then((value) => {
  console.log(value);
  return 2;
});

first.then((value) => {
  console.log(value);
  return 3;
});
first.then((value) => {
  console.log(value);
  return 4;
});
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
let user = new Promise((resolve) => {
  resolve('John');
})
  .then(() => {
    return new Promise((resolve, reject) => {
      resolve('Arya');
    });
  })
  .then(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise Resolved!');
      }, 1000);
    });
  });

let user = new Promise((resolve) => {
  resolve('John');
})
  .then((value) => {
    return Promise.resolve(`Arya`);
  })
  .then((value) => {
    console.log(value);
    return new Promise((res) => {
      setTimeout(() => res('Brian'), 2000);
    });
  })
  .then(console.log);
```
