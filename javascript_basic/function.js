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

// 3. 콜백함수 & 익명함수
// 콜백함수: 특정 이벤트가 발생하면 호출되는 함수
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert('agree!');
}

function showCancel() {
    alert('Cancel!');
}

ask("Are you agree?", showOk, showCancel); // ask 함수의 인자인 showOk & showCancel 함수는 콜백함수


// 위와 같은 코드이지만 익명함수를 사용하면 더 간결하게 코드를 작성할 수 있다.
// 익명함수는 주로 한번 사용되고 필요없는 경우에 사용
function ast(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Are you agree?",
    function() { alert("agree!"); },
    function() { alert("Cancel!"); }
)


// 4. 화살표 함수 방식
// 한줄 방식
const func = (a, b) => a + b;

// 여러 줄 방식
const sum = (a, b) => {
    let result = a + b;
    return result;
}