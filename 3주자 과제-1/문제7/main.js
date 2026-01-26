const display = document.getElementById("displayArea");

document.getElementById("tableContainer").addEventListener("click", displayRowData);

function displayRowData(e) {
    // 코드 작성
    const elem = e.target;
    if (elem.matches("td")) {
        const row = elem.closest("tr");
        display.textContent = elem.textContent; //.. 이게 맞나요?
    }
}
