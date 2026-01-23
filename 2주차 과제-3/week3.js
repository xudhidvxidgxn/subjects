function mergeObjects(obj1, obj2) {
  // 코드 작성
  console.log(...Object.keys(obj1));
}

const object1 = { a: "A", b: "B", c: "C" };
const object2 = { b: "X", c: "Y", d: "Z" };

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력

const arr = [1, 2, 3, 4];
const a1 = arr.reduce((acc, cur, idx, arr) => {
  console.log(`acc:${acc}, cur:${cur}, idx:${idx}`);
  return acc + cur;
}, 0); // 초기값 0
console.log(a1);

console.log(arr.reduce((acc, cur) => acc + cur));

console.log(Object.prototype);
