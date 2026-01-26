document.getElementById("container").addEventListener("click", (ev) => {
    const elem = ev.target;
    const elemId = elem.id;
    console.log(`event bubbling: ${elemId}`);
});
