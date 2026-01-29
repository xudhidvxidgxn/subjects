async function checkId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            if (id === "admin") {
                resolve(id);
            } else {
                reject(id);
            }
        }, 1000);
    });
}

// 코드 작성
function callCheckId(id) {
    // checkId 호출
    checkId(id)
        .then((id) => {
            console.log(`'${id}' => 성공`);
        })
        .catch((id) => {
            console.log(`'${id}' => 실패`);
        });
}

callCheckId("admin");
callCheckId("엄");
