document.getElementById("buttonContainer").addEventListener("click", changeColor);

function changeColor(e) {
    // 코드 작성
    const target = e.target;
    const targetAttr = e.target.dataset.color; // data-abc-def = dataset.abcDef
    const colorBox = document.getElementById("coloredBox");

    if (targetAttr === "red") {
        colorBox.style.backgroundColor = "red";
    } else if (targetAttr === "green") {
        colorBox.style.backgroundColor = "green";
    } else if (targetAttr === "blue") {
        colorBox.style.backgroundColor = "blue";
    } else {
    }
}
