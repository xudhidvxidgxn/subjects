const display = document.getElementById("display");
function renderCurrentTime() {
    const today = new Date();

    // yyyy-mm-dd
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const hour = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");
    const sec = String(today.getSeconds()).padStart(2, "0");

    const dateStr = `${year}-${month}-${day} ${hour}-${min}-${sec}`;

    // 삽입
    display.textContent = `현재 시간: \n${dateStr}`;
}
window.addEventListener("load", () => {
    renderCurrentTime();
    const time = setInterval(renderCurrentTime, 1000);
});
