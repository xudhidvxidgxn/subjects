function getText1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, ");
        }, 1000);
    });
}

function getText2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("World! ");
        }, 500);
    });
}

function getText3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is a test.");
        }, 1500);
    });
}

// 코드 작성
function mergeText1() {
    return new Promise((resolve, reject) => {
        let txt = ``;
        getText1().then((res) => {
            txt += res;
            getText2().then((res) => {
                txt += res;
                getText3().then((res) => {
                    txt += res;
                    resolve(txt);
                });
            });
        });
    });
}

function mergeText2() {
    let txt = ``;
    return Promise.all([getText1(), getText2(), getText3()]).then((res) =>
        res.reduce((resTxt, chunkTxt) => {
            return resTxt + chunkTxt;
        }),
    );
}

async function mergeText3() {
    let txt = ``;
    return await Promise.all([getText1(), getText2(), getText3()]).then((res) =>
        res.reduce((resTxt, chunkTxt) => {
            return resTxt + chunkTxt;
        }),
    );
}

mergeText1().then((res) => console.log(`mergeText1 :`, res));
mergeText2().then((res) => console.log(`mergeText2 :`, res));
mergeText2().then((res) => console.log(`mergeText3 :`, res));
