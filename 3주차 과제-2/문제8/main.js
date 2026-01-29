function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data1");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data2");
        }, 500);
    });
}

function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data3");
        }, 1500);
    });
}

// 코드 작성
function fetchAll() {
    const res = [];
    return Promise.all([fetchData1().then((r) => res.push(r)), fetchData2().then((r) => res.push(r)), fetchData3().then((r) => res.push(r))]).then(() => {
        return res;
    });
}

async function fetchAll2() {
    const res = [];
    return await Promise.all([fetchData1().then((r) => res.push(r)), fetchData2().then((r) => res.push(r)), fetchData3().then((r) => res.push(r))]).then(() => {
        return res;
    });
}

fetchAll().then((res) => {
    console.log(res);
});
fetchAll2().then((res) => {
    console.log(res);
});
