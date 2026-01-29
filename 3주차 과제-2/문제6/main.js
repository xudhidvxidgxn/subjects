function findUserByName(name) {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Charlie" },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const filteredUsers = users.filter((user) => user.name === name);
            if (filteredUsers.length === 0) {
                reject({ error: "fail", message: "Something went wrong." });
            } else {
                resolve(filteredUsers);
                //resolve(filteredUsers[0]);
            }
        }, 1000);
    });
}
findUserByName(`Alice`)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
findUserByName(`Charlie`)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
