function addDays(date, days) {
    let day = date.getDate() + days;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let daylim = 31;
    // 변화
    if (month === 2) {
        daylim = 28;
    } else if ([4, 6, 9, 11].includes(month)) {
        daylim = 30;
    }
    if (day > daylim) {
        day = 1;
        month++;
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    month = String(month).padStart(2, "0");
    day = String(day).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const res = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    //return new Date(res);
    return res;
}
// 1 3 5 7 8 10 12
// 4 6 9 11
// 2
const d = new Date("2022-09-24 00:00:00");
console.log(addDays(d, 1)); // 2022-09-25 00:00:00
