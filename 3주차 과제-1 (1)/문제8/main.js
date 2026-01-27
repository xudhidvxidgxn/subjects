const display = document.getElementById(`display`);
const btnList = document.getElementById(`btn-list`);
const labs = document.getElementById(`labs`);

let countAll = 0;
let count = 0;
let labCount = 0;

let countUp = null;
let countAllUp = null;

const btn1 = document.querySelector(`#btn-list > :first-child`);
const btn2 = document.querySelector(`#btn-list > :last-child`);
function toggleBtn(ev) {
    const elem = ev.target;
    //console.log(elem);
    //console.log(`${btn1}\n${btn2}`);
    if (elem.classList.contains(`start`)) {
        btn1.classList.replace(`reset`, `lab`);
        btn2.classList.replace(`start`, `pause`);
    } else if (elem.classList.contains(`pause`)) {
        btn1.classList.replace(`lab`, `reset`);
        btn2.classList.replace(`pause`, `start`);
    }
    setBtnText();
}
function setBtnText() {
    const btns = document.querySelectorAll(`button`);
    btns.forEach((element) => {
        if (element.classList.contains(`reset`)) {
            element.textContent = `재설정`;
        }
        if (element.classList.contains(`start`)) {
            element.textContent = `시작`;
        }
        if (element.classList.contains(`lab`)) {
            element.textContent = `랩`;
        }
        if (element.classList.contains(`pause`)) {
            element.textContent = `중지`;
        }
    });
}

function render() {
    const milisec = String((countAll % 1000) / 10).padStart(2, "0");
    const sec = String(Math.floor(countAll / 1000) % 60).padStart(2, "0");
    const min = String(Math.floor((countAll / 1000 / 60) % 60)).padStart(2, "0");
    const res = `${min}:${sec}.${milisec}`;
    display.textContent = res;
    return res;
}

function tick() {
    countAllUp = setInterval(() => {
        countAll += 10;
        render();
    }, 10);
    countUp = setInterval(() => {
        count += 10;
    }, 10);
}

function btnControl(ev) {
    const elem = ev.target;
    if (elem.classList.contains(`start`)) {
        tick();
    } else if (elem.classList.contains(`pause`)) {
        clearInterval(countAllUp);
        clearInterval(countUp);
    } else if (elem.classList.contains(`reset`)) {
        countAll = 0;
        count = 0;
        labCount = 0;
        labs.style.setProperty("display", "none", "important");
        document.querySelectorAll(".lab").forEach((div) => div.remove());
        render();
    } else if (elem.classList.contains(`lab`)) {
        labs.style.setProperty("display", "grid", "important");

        labCount++;
        labs.insertAdjacentHTML(
            "afterbegin",
            `<div class="lab">${labCount}</div>
            <div class="lab">${String(Math.floor((count / 1000 / 60) % 60)).padStart(2, "0")}:${String(Math.floor(count / 1000) % 60).padStart(2, "0")}.${String((count % 1000) / 10).padStart(2, "0")}
</div>
            <div class="lab">${render()}</div>
            `,
        );
        Array.from(document.querySelectorAll(".lab-title"))
            .toReversed()
            .forEach((div) => labs.prepend(div));
        count = 0;
        //document.querySelector("HTML").scrollTop = document.querySelector("HTML").scrollHeight;
        //document.querySelector("HTML").scrollTo({
        //    top: document.querySelector("HTML").scrollHeight,
        //    behavior: "smooth",
        //});
    }
}
window.addEventListener("load", () => {
    labs.style.setProperty("display", "none", "important");
});
btnList.addEventListener(`click`, btnControl);
btnList.addEventListener(`click`, toggleBtn);
