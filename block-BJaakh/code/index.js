let ulRoot = document.querySelector('ul');
let todoInput = document.querySelector('input[type="text"]');
const baseURL = 'https://basic-todo-api.vercel.app/api/';

function handleDelete(id) {
  fetch(baseURL + `todo/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    displayTodos();
  });
}

function displayUI(data) {
  ulRoot.innerHTML = '';
  data.forEach((todo) => {
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerText = todo.title;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.isCompleted;
    input.setAttribute('data-id', todo._id);

    let span = document.createElement('span');
    span.innerText = '❌';
    span.addEventListener('click', () => handleDelete(todo._id));
    li.append(input, p, span);
    ulRoot.append(li);
  });
}

function displayTodos() {
  fetch(baseURL + 'todo')
    .then((response) => response.json())
    .then((allTodos) => {
      displayUI(allTodos.todos);
    });
}

function addTodo(event) {
  if (event.keyCode === 13) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    fetch(baseURL + 'todo', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(() => {
      displayTodos();
    });
  }
}

todoInput.addEventListener('keyup', () => addTodo);
displayTodos();
