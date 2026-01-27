function isWeekend(date) {
    console.log(date.getDay());
    if ([0, 6].includes(date.getDay())) {
        return true;
    } else {
        return false;
    }
}

const d1 = new Date("2022-09-25 00:00:00");
console.log(isWeekend(d1)); // false

const d2 = new Date("2022-09-26 00:00:00");
console.log(isWeekend(d2)); // true
