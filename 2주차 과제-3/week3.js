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

console.log(Object.prototype);
