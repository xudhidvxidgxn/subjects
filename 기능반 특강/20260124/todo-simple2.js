const button = document.querySelector("button");

button.addEventListener("click", () => {
    const input = document.querySelector(".todo-input");
    if (!(input.value === "")) {
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
        //  document.querySelector(".todo-input").value = "";
    }
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    document.querySelector(".todo-input").value = "";
});

/* 
이벤트 위임(event delegation): 
    부모한테 이벤트를 등록하고, class명이나 뭐 식별가능한 값으로 구분하자.
*/

document.querySelector("#todo-list").addEventListener("click", (ev) => {
    const elem = ev.target;
    // 너 삭제 버튼이니
    const isRemoveBtn = elem.classList.contains("todo-remove");

    if (isRemoveBtn) {
        document.querySelector("#todo-list").removeChild(elem.parentNode);
    }

    const isTodo = elem.classList.contains("todo");
    if (isTodo) {
        elem.style.backgroundColor = "red";
    }
});
