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
  //  return objectArray.filter((value) => Object.keys(value) === key).map((key) => [key, value[key]]);
}

const objectArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Cathy" },
];

console.log(selectValuesByKey(objectArray, "name"));
// ["Alice", "Bob", "Cathy"] 출력

console.log(Object.prototype);
