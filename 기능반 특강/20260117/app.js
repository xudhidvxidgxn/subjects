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

console.log(hello());
console.log(hello1(`홍길동`));

console.log(add(3, 4));

console.log(isEven(2));
console.log(isEven(3));