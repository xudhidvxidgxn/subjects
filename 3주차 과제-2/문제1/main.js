function print() {
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() => {
                console.log("Hello, World!");
            }, 1000),
        );
        //reject();
    });
}
print()
    .then()
    .catch(() => {
        console.log("실패");
    });
