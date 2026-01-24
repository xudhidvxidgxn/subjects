const button = document.querySelector("button");

button.addEventListener("click", () => {
    const input = document.querySelector(".todo-input");

    //  const newTodo = document.createElement("div");
    //  newTodo.textContent = input.value;

    //  document.querySelector("#todo-list").appendChild(newTodo);

    // insertAdjacentHTML: 텍스트를 파싱해서 html로 추가한다.
    // beforeend: 맨 뒤에 추가한다.
    document.querySelector("#todo-list").insertAdjacentHTML(
        "beforeend",
        `<div class="todo">
        ${input.value}
        <button class="todo-remove">삭제<button>
    </div>
    `,
    );
    const removeBtn = document.querySelectorAll(".todo-remove");
    removeBtn.forEach((value, index) => {
        if (index === removeBtn.length - 1) {
            value.addEventListener("click", (ev) => {
                document.querySelector("#todo-list").removeChild(ev.target.closest("div"));
            });
        }
    });
    //  document.querySelector(".todo-input").value = "";
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    document.querySelector(".todo-input").value = "";
});

// 3번
// 배열로 추가 삭제한 요소들을 다룬다.
// event delegation을 적용해서 삭제를 한다.
