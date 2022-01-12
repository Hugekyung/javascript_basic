// 호이스팅은 끌어올리기라는 사전전 의미 
// 자바스크립트에서 모든 변수 선언은 호이스트 되고 함수의 경우 선언형식은 호이스팅 되며 변수에 할당된 형태는 호이스팅 되지 않음
// 값의 할당 없이 변수만 선언된 경우, undifined 자료형이 디폴트다.

/*
자료형 종류
- Boolean: true, false
- null: 빈 값을 표현
- undefined: 값을 할당하지 않은 변수가 가지는 값
- Number: 숫자형으로 정수와 부동 소수점, 무한대 및 NaN(숫자가 아님)등.
- String: 문자열
*/

if (true) {
    console.log(foo); // 일반적인 언어의 경우, 변수 선언 전 호출되었기 때문에 에러가 발생해야 하지만 자바스크립트는 아래에서 끌어올린다
    var foo = 'foo1'; // var foo가 위로 끌어올려진다
    console.log(foo);
}

var myVar;
console.log(myVar); // 아래에 선언된 함수를 끌어올린다

function myVar() {
}

console.log(typeof myVar);