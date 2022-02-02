// 자바스크립트의 함수 선언 방식

// 1. 함수 선언 방식
// 스크립트 실행 준비 단계에서 함수가 생성되므로 함수 보다 먼저 호출될 수 있다.

// 일반적으로 함수 선언 방식의 사용을 먼저 고려하는 것이 좋다.
// 함수가 선언되기 전에 호출할 수 있으므로 코드 구성이 더 자유롭다.
// 또한 function을 코드상으로 먼저 작성하기 때문에 가독성이 좋다.
function func() {
    console.log('hello');
}

// 2. 함수 표현식
// 함수가 선언된 후에야 접근이 가능하므로 미리 호출될 수 없다.
const func = function() {
    console.log('hello');
};

// 3. 익명함수
function() {
    console.log('hello');
}

// 4. 화살표 함수 방식
// 한줄 방식
const func = (a, b) => a + b;

// 여러 줄 방식
const sum = (a, b) => {
    let result = a + b;
    return result;
}