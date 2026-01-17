//concat
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

console.log(a1.concat(a2))
console.log(a1, a2);

//every : 모두
//some
const a3 = [1, 2, 3, 4, 5];

//const r1 = a3.every((value) => {
//    console.log(`${value} < 10`);
//    if (value < 10) {
//        return true;
//    }
//    else {
//        return false;
//    }
//})

// 배열에 있는 값들이 전부 3보다 작니?
const r1 = a3.every((value) => value < 3)
console.log(r1);

// 배열에 있는 값들이 하나라도 3보다 작니?
const r2 = a3.some((value => value < 3));
console.log(r2);

// push: 추가 (뒤에)
// pop: 제거 (뒤에)
// 배열에 직접적으로 영향을 줌
// FILO: First In Last Out
const a4 = [];

a4.push(1);
a4.push(2);

console.log(a4);

a4.pop();

console.log(a4)

//filter: 조건에 충족한 값만 필터하겠다.
//forEach: 그냥 for문 (반환 값 X)
//map : 값을 반환 (내가 원하는 형태로 변환)
const a5 = [1, 2, 3, 4, 5];

const r5 = a5.filter((value) => value % 2 === 0);

console.log(r5);

const r6 = a5.forEach((value) => {
    console.log(value);
})

const a6 = a5.map((value) => value * 2);

console.log(r6);
console.log(a6);

//includes: 포함하는가?
//join: split의 반대 (합치기)
console.log(a5.includes(1));
console.log(a5.join(","))

//find : 값을 찾는다. (반환: 값)
//findIndex : 값을 찾는다. (반환: 인덱스)
const a7 = ["민재", "상민", "창민", "은성", "우진", "현우"];

console.log(a7.find((value) => value === "민재"));
console.log(a7.findIndex((value) => value === "상민"));

//reverse: 배열을 뒤집는다. (원본 변경 O)
//toReversed: 배열을 뒤집는다. (원본 변경 X)
const a8 = [1, 2, 3, 4, 5];
const a9 = [1, 2, 3, 4, 5];

console.log(a8.reverse());
console.log(a8);
console.log(a9.toReversed());
console.log(a9);

//sort : 오름차순 정렬 (원본 변경 O)
//toSorted : 오름차순 정렬 (원본 변경 X)
const a10 = [2, 4, 1, 5, 3];
const a11 = [2, 4, 1, 5, 3];

console.log(a10.sort());
console.log(a10);
console.log(a11.toSorted());
console.log(a11);

//slice : 자른다. (원본 변경 X)
//splice : 자른다. (원본 변경 O)
const a12 = [1, 2, 3, 4, 5];

console.log(a12.slice(0, 2));
console.log(a12);
console.log(a12.splice(0, 2));
console.log(a12);

//reduce
const a13 = [1, 2, 3, 4, 5];

const r13 = a13.reduce((acc, cur) => {
    console.log(`acc: ${acc}, cur: ${cur}`)
    return acc + cur;
}, 0);

console.log(r13)