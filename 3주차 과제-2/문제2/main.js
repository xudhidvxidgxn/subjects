function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id,
                name: "John Doe",
            });
        }, 1000);
    });
}
getUser().then((res) => {
    for (const [key, value] of Object.entries(res)) {
        console.log(`${key} : ${value}`);
    }
});
