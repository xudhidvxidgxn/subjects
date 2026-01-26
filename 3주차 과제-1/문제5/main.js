const display = document.getElementById("timeContainer");
window.addEventListener("load", displayCurrentTime);

function displayCurrentTime() {
    // 코드 작성
    const d = new Date();
    display.textContent = `지금은 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초 ${d.getMilliseconds()}`;
}

const reload = setInterval(() => {
    const d = new Date();
    display.textContent = `지금은 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초 ${d.getMilliseconds()}`;
}, 1000);

clearInterval(reload);
