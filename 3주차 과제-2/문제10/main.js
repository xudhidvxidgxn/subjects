const usersBudget = [100, 200, 500];
const productPrices = [50, 250, 400];

function canPurchase(price, budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const res = [];
            for (let i = 0; i < budget.length; i++) {
                if (price[i] < budget[i]) {
                    res.push({ user: i, canPurchase: false });
                } else {
                    res.push({ user: i, canPurchase: true });
                }
            }
            resolve(res);
        }, 100);
    });
}
async function canPurchase1(price, budget) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const res = [];
            for (let i = 0; i < budget.length; i++) {
                if (price[i] < budget[i]) {
                    res.push({ user: i, canPurchase: false });
                } else {
                    res.push({ user: i, canPurchase: true });
                }
            }
            resolve(res);
        }, 100);
    });
}

// 코드 작성
function callCanPurchase() {
    // canPurchase 호출
    canPurchase(productPrices, usersBudget).then((res) => res.forEach((user) => console.log(`${user["user"] + 1}번째 사람 : ${user["canPurchase"] ? "살수있음" : "살수없음"}`)));
    canPurchase1(productPrices, usersBudget).then((res) => res.forEach((user) => console.log(`${user["user"] + 1}번째 사람 : ${user["canPurchase"] ? "살수있음" : "살수없음"}`)));
}
callCanPurchase();
