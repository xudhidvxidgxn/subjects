function print() {
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() => {
                console.log("Hello, World!");
            }, 1000),
        );
    });
}
print().then();
