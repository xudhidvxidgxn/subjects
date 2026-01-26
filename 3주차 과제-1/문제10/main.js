const box = document.getElementById("custombox");
box.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
    console.log(`Custom right-click action`);
});
