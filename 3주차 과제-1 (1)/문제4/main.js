function compareDates(date1, date2) {
    const d1 = new Date(date1).setHours(0, 0, 0, 0);
    const d2 = new Date(date2).setHours(0, 0, 0, 0);
    const diff = d1 - d2;

    if (diff < 0) return `date1 is earlier`;
    if (diff > 0) return `date2 is earlier`;
    return `dates are the same day`;
}
const day1 = new Date();
console.log(compareDates("2026-01-01 12:00:00", "2025-01-01 11:59:59"));
