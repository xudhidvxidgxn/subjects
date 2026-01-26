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
            <button class="todo-remove">삭제</button>
        </div>
        `,
    );
    const removeBtn = document.querySelectorAll(".todo-remove");
    removeBtn.forEach((value, index) => {
      if (index === removeBtn.length - 1) {
        value.addEventListener("click", (ev) => {
          //document.querySelector("#todo-list").removeChild(ev.target.closest("div"));
          document.querySelector("#todo-list").removeChild(ev.target.parentNode);
        });
      }
    });
    //  document.querySelector(".todo-input").value = "";
  }
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  document.querySelector(".todo-input").value = "";
});

// 3번
// 배열로 추가 삭제한 요소들을 다룬다.
// event delegation을 적용해서 삭제를 한다.

/* 주요 포인트
    1. 이벤트 등록은 현재(dom)에 추가된 요소에 등록이 가능하다.
        => 현재 추가되지 않은 요소에는 이벤트 등록이 불가능하다.

    2. 이벤트 등록은 여러 번 가능하다. (한 요소에 동일 이벤트로 여러 개 등록이 가능했다.)
        => 이 경우는 하면 안 되는 케이스

    3. 
*/
