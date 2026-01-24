// 이벤트를 추가한다
/* 
EVENT: 
    - UI
    - KeyboardEvent
    - MouseEvent
    - 
*/
document.querySelector(".btn1").addEventListener("click", (ev) => {
    // 너 부모가 first니?
    // first 안에 들어가있니?
    if (ev.target.closest(".first")) {
        document.body.appendChild(ev.target);
        document.querySelector(".first").removeChild(ev.target);
    } else {
        document.querySelector(".first").appendChild(ev.target);
    }

    document.querySelector(".first").append(ev.target);
    console.log(ev.target);
    console.log("버튼 클릭");
});

document.querySelector(".btn2").addEventListener("dblclick", () => {
    console.log("버튼 더블클릭");
});

/* 이벤트를 추가하는 방법
    - 특정 요소에 이벤트를 추가하겠다.
    - addEventListener를 통해서 특정 요소에 추가를 한다.
    - addEventListener의 첫번쨰 인자: 이벤트 유형(타입)
    - addEventListener의 두번쨰 인자: 이벤트가 발생했을 때 호출할 함수

마우스: 
    - click
    - dblclick
    - mousedown
    - mouseUp
    - wheel

키보드: 
    - keydown
    - keyup
    - input

UI: 
    - load
*/
