function mergeObjects(obj1, obj2) {
  // 코드 작성
  return { ...obj1, ...obj2 }; // 이건 임시입니다
}

let object1 = { a: "A", b: "B", c: "C" };
let object2 = { b: "X", c: "Y", d: "Z" };

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력

function countLetters(string) {
  //  return new Map([...string].map((key) => [key, [...string].filter((value) => value === key).length]));
  return Object.fromEntries([...string].map((key) => [key, [...string].filter((value) => value === key).length]));
}

let str = "apple";

console.log(countLetters(str)); // {a: 1, p: 2, l: 1, e: 1} 출력

function getObjectKeysAndValues(object) {
  // 코드 작성
  return [[...Object.keys(object)], [...Object.values(object)]];
}

let obj = { a: "A", b: "B", c: "C" };

console.log(getObjectKeysAndValues(obj)); // [['a', 'b', 'c'], ['A', 'B', 'C']] 출력

function removeKeyFromObject(object, keys) {
  // 코드 작성
  return Object.fromEntries(
    Object.keys(object)
      .filter((value) => !keys.includes(value))
      .map((key) => [key, object[key]]),
  );
}

obj = { a: "hi", b: "there", c: "world" };

console.log(removeKeyFromObject(obj, ["b", "c"])); // {a: "hi"} 출력

function selectValuesByKey(objectArray, key) {
  // 코드 작성
  return Object.values(objectArray).map((value) => value[key]);
}

const objectArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Cathy" },
];

console.log(selectValuesByKey(objectArray, "name"));
// ["Alice", "Bob", "Cathy"] 출력

function filterByScore(students, score) {
  // 코드 작성
  return Object.values(students)
    .filter((value) => value["score"] >= score)
    .map((key) => key["name"]);
}

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Cathy", score: 90 },
  { name: "David", score: 65 },
];

console.log(filterByScore(students, 80)); // ["Alice", "Cathy"] 출력

function filterByAverageScore(students, score) {
  // 코드 작성
  return Object.values(students)
    .filter((value) => [...value["score"]].reduce((acc, cur) => acc + cur, 0) / value["score"].length >= score)
    .map((key) => key["name"]);
}

students = [
  { name: "Alice", score: [90, 60, 70, 100] },
  { name: "Bob", score: [75, 35, 40, 60] },
  { name: "Cathy", score: [90, 10, 20, 30] },
  { name: "David", score: [70, 75, 85, 95] },
];

console.log(filterByAverageScore(students, 80)); // ["Alice", "David"] 출력

function getBooksByCategory(books, category) {
  // 코드 작성
  return Object.values(books)
    .filter((value) => value["category"] === category)
    .map((key) => key["title"]);
}

let books = [
  { title: "The Hobbit", category: "novel" },
  { title: "Harry Potter", category: "novel" },
  { title: "JavaScript for Beginners", category: "programming" },
  { title: "Python Crash Course", category: "programming" },
];

console.log(getBooksByCategory(books, "programming"));
// ["JavaScript for Beginners", "Python Crash Course"] 출력

function getBooksStatsByCategory(books, category) {
  // 코드 작성
  return Object.fromEntries([
    [
      "titles",
      Object.values(books)
        .filter((value) => value["category"] === category)
        .map((key) => key["title"]),
    ],
    [
      "avgPages",
      (
        Object.values(books)
          .filter((value) => value["category"] === category)
          .map((key) => key["pages"])
          .reduce((acc, cur) => acc + cur) / Object.values(books).filter((value) => value["category"] === category).length
      ).toFixed(3),
    ],
  ]);
}

books = [
  { title: "The Hobbit", category: "novel", pages: 310 },
  { title: "Harry Potter", category: "novel", pages: 450 },
  { title: "JavaScript for Beginners", category: "programming", pages: 200 },
  { title: "Python Crash Course", category: "programming", pages: 250 },
  { title: "Eloquent JavaScript", category: "programming", pages: 280 },
  { title: "Crime and Punishment", category: "novel", pages: 480 },
];

console.log(getBooksStatsByCategory(books, "programming"));
// { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], avgPages: 243.333 } 출력
console.log(getBooksStatsByCategory(books, "novel"));
// { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment"], avgPages: 413.333 } 출력

const defaultFilterOptions = {
  minPages: 0,
  maxPages: Infinity,
  minPrice: 0,
  maxPrice: Infinity,
  category: undefined, // 선택 사항
};

function searchBooks(books, options = defaultFilterOptions) {
  // 코드 작성
  const cates = options.category ? new Set(Array.isArray(options.category) ? options.category : [options.category]) : new Set(Object.values(books).map((book) => book.category));
  const filteredBooks = Object.values(books).filter((book) => cates.has(book.category) && book.pages >= options.minPages && book.pages <= options.maxPages && book.price >= options.minPrice && book.price <= options.maxPrice);
  let res = [];
  for (const cate of cates) {
    res.push([
      cate,
      Object.fromEntries([
        ["titles", [filteredBooks.filter((book) => book.category === cate).map((b) => b.title)]],
        [
          "totalPages",
          filteredBooks
            .filter((book) => book.category === cate)
            .map((b) => b.pages)
            .reduce((acc, cur) => acc + cur),
        ],
        [
          "totalPrices",
          filteredBooks
            .filter((book) => book.category === cate)
            .map((b) => b.price)
            .reduce((acc, cur) => acc + cur),
        ],
      ]),
    ]);
  }
  return Object.fromEntries(res);
}

books = [
  { title: "The Hobbit", category: "novel", pages: 310, price: 13 },
  { title: "Harry Potter", category: "novel", pages: 450, price: 28 },
  { title: "JavaScript for Beginners", category: "programming", pages: 200, price: 15 },
  { title: "Python Crash Course", category: "programming", pages: 250, price: 18 },
  { title: "Eloquent JavaScript", category: "programming", pages: 280, price: 20 },
  { title: "Crime and Punishment", category: "novel", pages: 480, price: 27 },
  { title: "JavaScript: The Good Parts", category: "programming", pages: 170, price: 10 },
  { title: "To Kill a Mockingbird", category: "novel", pages: 320, price: 15 },
];

console.log(searchBooks(books));
/* 
{
  novel: {
    titles: ["The Hobbit", "Harry Potter", "Crime and Punishment", "To Kill a Mockingbird"], 
    totalPages: 1560, 
    totalPrices: 83
  },
  programming: { 
  titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript", "JavaScript: The Good Parts"], 
  totalPages: 900, 
  totalPrices: 63 
  }
}
출력
*/

console.log(searchBooks(books, { minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20 }));
/*
{
  novel: { titles: ["The Hobbit", "To Kill a Mockingbird"], totalPages: 630, totalPrices: 28 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], totalPages: 730, totalPrices: 53 }
}
출력
*/

console.log(Object.prototype);
