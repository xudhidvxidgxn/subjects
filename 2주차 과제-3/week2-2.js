function concatArray(arr1, arr2) {
    // 코드 작성
    const res = [];
    arr1.forEach(value => { res.push(value); });
    arr2.forEach(value => { res.push(value); });
    return res;
}

const array1 = ['A', 'B', 'C'];
const array2 = ['D', 'E', 'F'];

console.log(concatArray(array1, array2)); // ['A', 'B', 'C', 'D', 'E', 'F'] 출력

function insertElement(arr, index, value) {
    // 코드 작성
    if (index >= arr.length) {
        return console.error(`현재 배열의 길이는 ${arr.length}로 ${index}은 입력 불가능합니다.`);
    }
    else {
        const res = arr.slice(0, index);
        res.push(value);
        const res1 = arr.slice(index, arr.length);

        return res.concat(res1);
    }
}

const nums = [1, 2, 3, 4, 5];

console.log(insertElement(nums, 2, 6)); // [1, 2, 6, 3, 4, 5] 출력
console.log(insertElement(nums, 10, 6)); // console.error("현재 배열의 길이는 5로 10은 입력 불가능합니다.")

function removeElement(arr, index) {
    // 코드 작성
    const res = arr.filter((value) => value !== arr[index]);
    return res;
}

const chars = ['A', 'B', 'C', 'D', 'E'];

console.log(removeElement(chars, 3)); // ['A', 'B', 'C', 'E'] 출력