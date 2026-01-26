document.getElementById("container").addEventListener(
    "click",
    (ev) => {
        console.log(`event capturing: container`);
    },
    true,
);
document.getElementById("list").addEventListener(
    "click",
    (ev) => {
        console.log(`event capturing: list`);
    },
    true,
);
document.getElementById("item").addEventListener(
    "click",
    (ev) => {
        console.log(`event capturing: item`);
    },
    true,
);
document.getElementById("container").addEventListener("click", (ev) => {
    console.log(`event bubbling: container`);
});
document.getElementById("list").addEventListener("click", (ev) => {
    console.log(`event bubbling: list`);
});
document.getElementById("item").addEventListener("click", (ev) => {
    console.log(`event bubbling: item`);
});
// ????
