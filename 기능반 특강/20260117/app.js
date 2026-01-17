// 자바스크립트 변수 선언
// var, let, const 

/*python : a = 1;
java : int a = 1;*/
/* var a = 10;

let b = 10; */

/*print()*/
//console.log(a);
//console.log(b);

/* var로 선언한 변수들은 window에 등록된다. 즉 오염 시킨다. (전역 오염) */


//alert("테스트")
//var alert = 10;

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

/* 
var: 
    - 변수가 최상단으로 끌어올려진다 (호이스팅)
    - 변수 선언 전에 호출할 수 있다.
    - 이 때 호출된 변수는 undefined다. (값이 할당되지 않고 선언만 된 상태)

var a = 10;
    - var a가 선언 된다.
    - a가 undefined로 초기화 된다.
    - a를 console.log로 출력한다.
    - a에 값이 10이 할당된다.

let: 
    - 변수가 최상단으로 끌어올려진다 (호이스팅)
    - 변수에 선언 전에 접근이 불가능한 상태.
    - let은 중복 선언 불가 

let a = 10;
    - let a가 선언 된다.
    - a가 undefined로 초기화 된다.
    - a를 console.log로 출력하려고 해서 오류가 난다.
    - a에 값이 10이 할당된다.
*/
