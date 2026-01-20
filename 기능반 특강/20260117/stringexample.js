// 자바스크립트 변수 선언
// var, let, const

/*
python : a = 1;
java : int a = 1;
*/

/* var a = 10;

let b = 10; */

/*print()*/
//console.log(a);
//console.log(b);

/* var로 선언한 변수들은 window에 등록된다. 즉 오염 시킨다. (전역 오염) */


// alert("테스트")
// var alert = 10;

// let alert = 10;

// window.alert("d")

// 호이스팅 (끌어올려지기)

/* 

console.log(a);
var = 10; 

=

var a;
console.log(a);
var = 10;

*/


// var: 
//    - 변수가 최상단으로 끌어올려진다 (호이스팅)
//    - 변수 선언 전에 호출할 수 있다.
//    - 이 때 호출된 변수는 undefined다. (값이 할당되지 않고 선언만 된 상태)
//    - 덮어씌워진다.

//    var a = 10;
//        - var a가 선언 된다.
//        - a가 undefined로 초기화 된다.
//        - a를 console.log로 출력한다.
//        - a에 값이 10이 할당된다.

// let: const도 마찬가지
//    - 변수가 최상단으로 끌어올려진다 (호이스팅)
//    - 변수에 선언 전에 접근이 불가능한 상태.
//    - 변수가 중복 선언되기 불가 

//    let a = 10;
//        - let a가 선언 된다.
//        - a가 undefined로 초기화 된다.
//        - a를 console.log로 출력하려고 해서 오류가 난다.
//        - a에 값이 10이 할당된다.

/*
javascript의 데이터 타입: 
    - number
    - string
    - array
    - object
    - boolean
    - undefined
    - null 

    - big int
    - symbol

undefined, null

undefined: 할당이 안 됨
null: 할당 함

.prototype : 
기본 객체 보기

.prototype 에 있는 함수에서 상속
object는 항상 상속

number, string, boolean과 undefined, null의 차이
*/

/* 
함수 선언 방법 :

console.log(sum1)

일반 function
function sum1() {
    return 'a';
}

변수 function
let sum2 = function() {

}

arrow function
const sum3 = () => {}
*/

// backtick (`) : 역음부호
// singlequote (')
// doublequote (")
// colon (:)
// semicolon (;)

function hello() {
    return `안녕하세요`;
}

function hello1(name) {
    return `안녕하세요 ${name} 님!`;
}

function add(a, b) {
    return a + b;
}

function isEven(num) {
    if (num % 2 == 0) { return true; }
    else { return false; }
}

//console.log(hello());
//console.log(hello1(`홍길동`));

//console.log(add(3, 4));

//console.log(isEven(2));
//console.log(isEven(3));

/*
== (적당히 비슷하면)
    Truth
    Falsy

=== (완전히 비슷하면)
    strict equality

!=

!==
    strict inequality
*/

// for (let i = 0; i < 10; i++) {}

// if () {}
// else if () {}
// else {}

// switch () {}

//const arr = []; 배열 : 대괄호
//const obj = {}; 객체 : 중괄호

//const arr = [];
//const obj = {};

//arr.push(1);

//console.log(arr)

//const arr = [1,2,3,4,5];

//arr = "1";

//arr.forEach(x => {
//    console.log(x)
//})

// number
//toFixed : 소수점 절삭
const num1 = 3.141592;
console.log(num1.toFixed())

//string
//length : 길이를 알아내는 애
const a = "하나둘";
console.log(a.length)

//includes : 포합하고 있는지 확인하는 애 (boolean: true, false)
const a2 = "양영디지털고등학교";
console.log(a2.includes("양"))

//indexOf : 해당하는 문자가 몇 번째에 있는지 알아내는 애, 없으면 -1
const a3 = "양영디지털고등학교";
console.log(a3.indexOf("양영"))
console.log(a3.indexOf("디지털"))
console.log(a3.indexOf("양ㅁ"))

//repeat : 문자를 반복시킨다. (거의 쓸 일 없음)
const a4 = "양";
console.log(a4.repeat(3))

//replace : 문자를 바꾸다
const a5 = "양영디지털양영고등학교";
console.log(a5.replace("양영", ""))

//repalceAll : 모든 문자를 바꾸다
const a6 = "양영디지털양영고등학교양영디지털양영고등학교양영디지털양영고등학교양영디지털양영고등학교양영디지털양영고등학교";
console.log(a6.replaceAll("양영", ""))

//split : 문자를 기준으로 나눠서 배열로 만든다.
const a7 = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
console.log(a7.split(","));

//slice : start에서부터 end직전까지 절삭(인덱스 기준)
//substring도 마찬가지
//end번째 글자까지 뽑는다 봐도 됨
const a8 = "1,2,3,4,5,6,7";
console.log(a8.slice(0, -1))
console.log(a8.substring(0, -1))

//toUpperCase : 대문자로, toLowerCase: 소문자로
const a9 = "Test";
console.log(a9.toUpperCase())
console.log(a9.toLowerCase())

//trim : 공백 없애기
const a10 = " te st ";
console.log(a10.trim())
console.log(a10.replaceAll(" ", ""))



console.log(String.prototype)