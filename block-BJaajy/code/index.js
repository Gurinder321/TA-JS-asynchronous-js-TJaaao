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
