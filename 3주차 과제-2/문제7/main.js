function findPublisherByBookName(bookName) {
    const books = [
        { id: 1, name: "Book1", publisher: "Publisher1" },
        { id: 2, name: "Book2", publisher: "Publisher2" },
        { id: 3, name: "Book3", publisher: "Publisher3" },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const filteredBooks = books.filter((book) => {
                if (book.name === bookName) {
                    return book.publisher;
                }
            });
            if (filteredBooks.length === 0) {
                reject({ error: "fail", message: "Something went wrong." });
            } else {
                resolve(filteredBooks.length === 1 ? filteredBooks[0] : filteredBooks);
            }
        }, 1000);
    });
}
findPublisherByBookName("Book1")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => [console.log(error)]);
findPublisherByBookName("Book4")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => [console.log(error)]);
