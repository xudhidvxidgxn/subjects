const display = document.getElementById("displayArea");

document.getElementById("tableContainer").addEventListener("click", displayRowData);

function displayRowData(e) {
    // 코드 작성
    const elem = e.target;
    if (elem.matches("td")) {
        const row = elem.closest("tr");
        const targets = row.children;
        const targetArray = Array.from(targets).map((td) => td.textContent);
        //display.textContent = elem.textContent; //.. 이게 맞나요?
        display.textContent = targetArray.reduce((acc, cur) => `${acc} ${cur}`);
    }
}
