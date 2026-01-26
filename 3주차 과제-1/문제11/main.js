function clickEventHandler(ev, targetId) {
    if (ev.target.matches("#item")) {
        console.log(`Clicked: ${targetId}`);
    }
    if (ev.target.matches("#list")) {
        console.log(`Clicked: ${targetId}`);
        ev.stopPropagation();
    }
    //console.log(`Clicked: ${text}`);
    //ev.stopPropagation();
}
// ???
