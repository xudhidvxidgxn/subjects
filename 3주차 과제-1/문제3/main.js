const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const display = document.getElementById("displayArea");

function onClick1() {
  // 코드 작성
  display.textContent = btn1.textContent;
}

function onClick2() {
  // 코드 작성
  display.textContent = btn2.textContent;
}

function onClick3() {
  // 코드 작성
  display.textContent = btn3.textContent;
}

btn1.addEventListener("click", onClick1);
btn2.addEventListener("click", onClick2);
btn3.addEventListener("click", onClick3);
