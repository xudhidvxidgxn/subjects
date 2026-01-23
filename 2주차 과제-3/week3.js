function mergeObjects(obj1, obj2) {
  // 코드 작성
  console.log(...Object.keys(obj1));
}

const object1 = { a: "A", b: "B", c: "C" };
const object2 = { b: "X", c: "Y", d: "Z" };

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력

console.log(Object.prototype);
