function daysBetween(date1, date2) {
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    //console.log(d1, d2);
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = Math.abs(d1 - d2);
    return `D ${date2 >= date1 ? "-" : "+"} ${diff / oneDay < 1 && date1 <= date2 ? "Day" : Math.floor(diff / oneDay)}`;
}

const d1 = new Date("2022-09-24 12:30:00");
const d2 = new Date("2022-09-25 17:30:00");
console.log(daysBetween(d1, d2)); // 1
