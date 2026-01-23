function concatArray(arr1, arr2) {
  // 코드 작성
  const res = [];
  arr1.forEach((value) => {
    res.push(value);
  });
  arr2.forEach((value) => {
    res.push(value);
  });
  return res;
}

const array1 = ["A", "B", "C"];
const array2 = ["D", "E", "F"];
console.log(...array1);
console.log(...array2);

console.log(concatArray(array1, array2)); // ['A', 'B', 'C', 'D', 'E', 'F'] 출력

function insertElement(arr, index, value) {
  // 코드 작성
  if (index >= arr.length) {
    return console.error(`현재 배열의 길이는 ${arr.length}로 ${index}은 입력 불가능합니다.`);
  } else {
    const res = arr.slice(0, index);
    res.push(value);
    const res1 = arr.slice(index, arr.length);

    return res.concat(res1);
  }
}

let nums = [1, 2, 3, 4, 5];

console.log(insertElement(nums, 2, 6)); // [1, 2, 6, 3, 4, 5] 출력
console.log(insertElement(nums, 10, 6)); // console.error("현재 배열의 길이는 5로 10은 입력 불가능합니다.")

function removeElement(arr, index) {
  // 코드 작성
  const res = [];
  arr.forEach((value, idx) => {
    if (idx !== index) {
      res.push(value);
    }
  });
  return res;
}

let chars = ["A", "B", "C", "D", "E"];

console.log(removeElement(chars, 3)); // ['A', 'B', 'C', 'E'] 출력

function removeElement1(arr, character) {
  // 코드 작성
  if (!arr.includes(character)) {
    return console.error(`배열에 ${character}가 없습니다.`);
  }
  return arr.filter((value) => value !== character);
}

chars = ["A", "B", "B", "C", "D", "E"];

console.log(removeElement1(chars, "B")); // ['A', 'C', 'D', 'E'] 출력
console.log(removeElement1(chars, "D")); // ['A', 'B', 'B', 'C', 'E'] 출력
console.log(removeElement1(chars, "Z")); // console.error("배열에 Z가 없습니다.");

function excludeElements(arr, start, end) {
  // 코드 작성
  return arr.filter((_, index) => start > index || index > end);
}

nums = [1, 2, 3, 4, 5, 6, 7];

console.log(excludeElements(nums, 2, 5)); // [1, 2, 7] 출력

function reverseArray(arr) {
  // 코드 작성
  const res = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    res.push(element);
  }
  return res;
}

nums = [1, 2, 3, 4, 5];

console.log(reverseArray(nums)); // [5, 4, 3, 2, 1] 출력

function joinStrings(arr) {
  // 코드 작성
  let res = "";
  arr.forEach((value) => {
    res = res + value;
  });
  return res;
}

const words = ["Hello", "World", "!"];

console.log(joinStrings(words)); // 'HelloWorld!' 출력

function removeDuplicates(arr) {
  // 코드 작성
  let res = [];
  arr.forEach((value) => {
    if (!res.includes(value)) {
      res.push(value);
    }
  });
  return res;
}

nums = [1, 2, 3, 1, 4, 2, 5];

console.log(removeDuplicates(nums)); // [1, 2, 3, 4, 5] 출력

function average(arr) {
  // 코드 작성
  let res = 0;
  let i = 0;
  arr.forEach((value) =>
    value.forEach((v) => {
      i += 1;
      res += v;
    }),
  );
  res1 = res / i;
  return res1;
}

nums = [
  [1, 2, 3, 4, 5],
  [9, 10, 11, 12, 13],
];

console.log(average(nums)); // 7 출력

function getLongestString(arr) {
  // 코드 작성
  let res = "";
  let high = arr[0].length;
  arr.forEach((value) => {
    if (value.length > high) {
      high = value.length;
      res = value;
    }
  });
  return res;
}

const strings = ["apple", "banana", "orange", "kiwi", "grape"];

console.log(getLongestString(strings)); // 'banana' 출력

console.log(Array.prototype);
