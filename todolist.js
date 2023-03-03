const todoForm = document.getElementById("todoform");
const todoInput = document.querySelector("#todoform input");
const todoList = document.getElementById("todolist");

let todos = [];
const TODOLISTKEY = "todolist";
function todoHandler(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const todovalue = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: todovalue,
    id: Date.now(),
  };
  todos.push(todoObj);
  paintTodo(todoObj);
  saveToDo();
}
function saveToDo(event) {
  localStorage.setItem(TODOLISTKEY, JSON.stringify(todos));
}
function deletetodo(event) {
  console.dir(event.target);
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
}

function paintTodo(todoInput) {
  const li = document.createElement("li");
  li.id = todoInput.id;
  const span = document.createElement("span");
  span.innerText = `${todoInput.text} `;
  const button = document.createElement("button");
  button.innerText = ` 📮`;

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
  button.addEventListener("click", deletetodo);
}
todoForm.addEventListener("submit", todoHandler);

const savedToDolist = localStorage.getItem(TODOLISTKEY);
if (savedToDolist !== null) {
  const parsetodolist = JSON.parse(savedToDolist);
  todos = parsetodolist;
  todos.forEach(paintTodo);
}
