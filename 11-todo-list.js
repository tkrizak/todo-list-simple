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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const html = `
    <p>${name}</p>
    <p>${dueDate}</p>
    <button class="delete-todo-button" onclick="
    todoList.splice(${i}, 1);
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    renderTodoList();

    ">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
