const img = document.querySelector('img');
const name = document.querySelector('h3');
const workingAt = document.querySelector('p');
const following = document.querySelector('.following');
const followers = document.querySelector('.followers');
const input = document.querySelector('input');

function displayUI(data) {
  img.src = data.avatar_url;
  name.innerText = data.name;
  workingAt.innerText = data.company;
  following.innerText = `Following: ${data.following}`;
  followers.innerText = `Followers: ${data.followers}`;
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };

    xhr.onerror = function () {
      console.log('Something went wrong');
    };
    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener('keyup', handleChange);

// sg7icTdlGEC9Lrs5SNj4rUj9P_tC80jzo9QTrpD4ilY
// https://api.unsplash.com/photos/random

// Random Cat Image
// const img = document.querySelector('.cat-image');
// const reload = document.querySelector('.reload');
// reload.addEventListener('click', () => {
//   let xhr = new XMLHttpRequest();
//   xhr.open(
//     'GET',
//     `https://api.thecatapi.com/v1/images/search/?api_key=967d0502-0314-45b9-b3dc-5fd40d1c3e6`
//   );

//   xhr.onload = function () {
//     let imageData = JSON.parse(xhr.response);
//     img.src = imageData.url;
//   };

//   xhr.onerror = function () {
//     console.log('Something went wrong');
//   };

//   xhr.send();
// });
