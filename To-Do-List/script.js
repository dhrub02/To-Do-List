const todoList = document.getElementById("todo-list");
const addTodoButton = document.getElementById("add-todo");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

let todos = [];

addTodoButton.addEventListener("click", () => {
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (title && description) {
        const todo = {
            id: Date.now(),
            title,
            description,
            completed: false
        };
        todos.push(todo);
        addTodoToList(todo);
        titleInput.value = "";
        descriptionInput.value = "";
    }
});

function addTodoToList(todo) {
    const todoListItem = document.createElement("li");
    todoListItem.textContent = `${todo.title} - ${todo.description}`;
    if (todo.completed) {
        todoListItem.classList.add("completed");
    }
    todoListItem.addEventListener("click", () => {
        todo.completed = !todo.completed;
        todoListItem.classList.toggle("completed");
    });
    todoList.appendChild(todoListItem);
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(addTodoToList);
}

renderTodos();