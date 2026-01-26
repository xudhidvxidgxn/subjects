document.getElementById("addTodoBtn").addEventListener("click", addTodo);
document.getElementById("todoList").addEventListener("click", deleteTodo);

const todoList = document.getElementById("todoList");

function addTodo() {
    const inputValue = document.getElementById("todoInput").value;
    todoList.insertAdjacentHTML(
        "beforeend",
        `<li>
        <span>${inputValue}</span>
        <button>삭제</button>
        </li>`,
    );
}
function deleteTodo(event) {
    const elem = event.target;
    if (elem.matches("button")) {
        todoList.removeChild(elem.parentNode);
    }
}
