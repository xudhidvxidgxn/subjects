const display = document.getElementById("display");
const btnList = document.getElementById("btn-list");

let timer = null;
let timersec = 0;
function toggleBtn(ev) {
    const elem = ev.target;
    if (elem.id === "start/pause" && !(timersec === 0)) {
        elem.classList.toggle(`start`);
        elem.classList.toggle(`pause`);
    }
    setBtnText();
}
function setBtnText() {
    const btn = document.getElementById("start/pause");
    if (btn.classList.contains(`pause`)) {
        btn.textContent = `중지`;
    } else {
        btn.textContent = `시작`;
    }
    render();
}
function render() {
    display.textContent = `${Math.floor(timersec / 60) > 24 ? `${Math.floor(timersec / 60 / 60)}:` : ``}${String(Math.floor(timersec / 60) % 60).padStart(2, "0")}:${String(timersec % 60).padStart(2, "0")}`;
}

function setupTimer(ev) {
    const elem = ev.target;
    if (elem.id === "reset") {
        const timerMin = document.getElementById(`input`).value ? document.getElementById(`input`).value : 1;
        timersec = timerMin * 60;
        render();
    }
}

function resetTimer() {}

function startTimer(ev) {
    const elem = ev.target;
    if (elem.id === `start/pause` && elem.classList.contains(`start`) && !(timersec === 0)) {
        timer = setInterval(() => {
            timersec--;
            render();
            if (timersec === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

function pauseTimer(ev) {
    const elem = ev.target;
    if (elem.id === `start/pause` && elem.classList.contains(`pause`)) {
        clearInterval(timer);
    }
}
btnList.addEventListener("click", startTimer);
btnList.addEventListener("click", setupTimer);
btnList.addEventListener("click", pauseTimer);
btnList.addEventListener("click", toggleBtn);
window.addEventListener("load", setBtnText);
