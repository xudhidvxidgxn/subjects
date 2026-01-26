const btn = document.getElementById("analyzeBtn");
const input = document.getElementById("numberInput");
const display = document.getElementById("resultContainer");

function analyzeNumber() {
    const data = input.value;
    // 코드 작성
    if (data % 2 === 0) {
        display.textContent = `${data}은(는) 짝수 입니다.`;
    } else if (data % 2 === 1) {
        display.textContent = `${data}은(는) 홀수 입니다`;
    } else {
        display.textContent = `${data}은(는) 무엇 인가요???`;
    }
}

btn.addEventListener("click", analyzeNumber);
