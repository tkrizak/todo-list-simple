const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

renderTodoList();

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  localStorage.setItem('todo-list', JSON.stringify(todoList));

  inputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;

    const html = `
    <p>${name}</p>
    <p>${dueDate}</p>
    <button class="delete-todo-button" onclick="
    todoList.splice(${index}, 1);
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    renderTodoList();

    ">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
