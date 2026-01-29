function fetchData(id) {
    // 코드 작성
    return new Promise((resolve, reject) => {
        const ran = Math.random();
        if (ran < 1 / 2) {
            resolve({ result: "success", id: 1 });
        } else {
            reject({ error: "fail", message: "Something went wrong." });
        }
    });
}

fetchData(1)
    .then((data) => {
        console.log(data); // {result: 'success', id: 1}
    })
    .catch((error) => {
        console.log(error); // {error: 'fail', message: 'Something went wrong.'}
    });
