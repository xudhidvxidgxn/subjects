/* 
js로 DOM 다루기
html: 책 너무 불편해~ 뭔가 쉽게 쉽게 정보를 얻을 수 있는 걸 만들자.
    -> 뼈대
css: 이쁘게 보일려고
    -> 살
js: 
    -> 근육
    
js 파일은 맨 하단에
*/
const button = document.querySelector(".btn");
const buttonList = document.querySelectorAll(".btn");

console.log(button);
console.log(buttonList);

//스타일링
//왜 쓰는가 : 특정 시점에 스타일을 바꾸고 싶을 때;
//button.style.width = "100px";
//button.style.height = "50px";
buttonList.forEach((button) => {
  button.style.width = "100px";
  button.style.height = "50px";
});

//요소의 계층 위치 변경
const first = document.querySelector(".first");

//first.appendChild(button); //추가
//first.removeChild(button); //삭제

button.textContent = "바뀜";

const newButton = document.createElement("button");

newButton.textContent = "aaa"; // 택스트 채우기
newButton.classList.add("btn"); // 클래스 할당

first.appendChild(newButton);

//이벤트 추가
