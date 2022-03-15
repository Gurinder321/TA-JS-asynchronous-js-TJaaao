let modalWindow = document.querySelector('.modal-window');
let modalClose = document.querySelector('.modal.close');
let openButton = document.querySelector('.btn');

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Books URL
const booksURL = 'https://www.anapioficeandfire.com/api/books';

let booksUL = document.querySelector('.book--list');

{
  /* <li>
  <h3>A Game of Thrones</h3>
  <p>Author: George R. R. Martin</p>
  <button class="btn">Show Characters (24)</button>
</li>; */
}

function displayCharacters(characters) {
  Promise.all(characters.map((character) => fetch(character).then((res) => res.json()))).then(
    (charactersData) => {
      console.log(charactersData);
    }
  );
}

function displayBooks(data) {
  booksUL.innerHTML = '';
  data.forEach((book) => {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    h3.innerText = book.name;
    let p = document.createElement('p');
    p.innerText = book.authors.join(' ');
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = `Show Characters (${book.characters.length})`;

    button.addEventListener('click', () => {
      modalWindow.style.display = 'block';
      displayCharacters(book.characters);
      modalWindow.querySelector('.modal-close').addEventListener('click', () => {
        modalWindow.style.display = 'none';
      });
    });

    li.append(h3, p, button);
    booksUL.append(li);
  });
}

// Get Books Function
function fetchBooks() {
  fetch(booksURL)
    .then((res) => res.json())
    .then((booksData) => {
      displayBooks(booksData);
    });
}

fetchBooks();

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
