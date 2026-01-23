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
  const res = arr.filter((value) => value !== arr[index]);
  return res;
}

let chars = ["A", "B", "C", "D", "E"];

console.log(removeElement(chars, 3)); // ['A', 'B', 'C', 'E'] 출력

function removeElement(arr, character) {
  // 코드 작성
  if (!arr.includes(character)) {
    return console.error(`배열에 ${character}가 없습니다.`);
  }
  return arr.filter((value) => value !== character);
}

chars = ["A", "B", "B", "C", "D", "E"];

console.log(removeElement(chars, "B")); // ['A', 'C', 'D', 'E'] 출력
console.log(removeElement(chars, "D")); // ['A', 'B', 'B', 'C', 'E'] 출력
console.log(removeElement(chars, "Z")); // console.error("배열에 Z가 없습니다.");

function excludeElements(arr, start, end) {
  // 코드 작성
  return arr.filter((_, index) => start > index || index > end);
}

nums = [1, 2, 3, 4, 5, 6, 7];

console.log(excludeElements(nums, 2, 5)); // [1, 2, 7] 출력

console.log(Array.prototype);
