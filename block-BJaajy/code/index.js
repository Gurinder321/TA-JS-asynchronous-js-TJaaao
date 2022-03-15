// new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000);
// })
//   .then(() => {
//     setTimeout(() => {
//       console.log(`${Math.round(Math.random() * 100)}`);
//     }, 1000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log(`${Math.round(Math.random() * 100)}`);
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log(`${Math.round(Math.random() * 100)}`);
//     }, 3000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log(`${Math.round(Math.random() * 100)}`);
//     }, 4000);
//   });

// // Question 2
// const usernames = ['getify', 'gaearon', 'AArnott', 'subtleGradient', 'piranha', 'sophiebits'];

// const usernamePromises = Promise.all(
//   usernames.map((user) => fetch(`https://api.github.com/users/${user}`).then((res) => res.json()))
// ).then((user) => console.log(user));

// Question 3
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

// Question 4
// They all worked with Promise.allSettled()

// Received the following error: Uncaught (in promise) Error: Whoops!

// Question 5
// It will take the code snippet when executed, 1 second to execute

// Answers
// Question 1
let times = [1, 2, 3, 4];
let timesPromise = times.map(
  (seconds) =>
    new Promise((res) => {
      setTimeout(() => res(Math.random()), seconds * 1000);
    })
);

Promise.all(timesPromise).then(console.log);

// Question 2
// const users = ['getify', 'gaearon', 'AArnott', 'subtleGradient', 'piranha', 'sophiebits'];
// let userPromises = users.map(
//   (user) => {
//       new Promise((res) => {
//         return fetch(`https://api.github.com/users/${user}`).then((res) => res.json()
//         )})

// Promise.all(timesPromise).then(console.log)

// Race Question

let promise1 = fetch(`https://random.dog/woof.json`).then((res) => res.json());

let promise2 = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

Promise.race([promise1, promise2]).then(console.log);
