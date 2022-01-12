// var를 이용한 변수 선언
// var는 지역변수 개념으로 함수 범위에서 유효함
// var를 선언하지 않으면 자동으로 전역변수가 됨

var x = 10;
console.log(x);

var foo = 'foo1';
console.log(foo);

if (true) {
    var foo = 'foo2';
    console.log(foo);
}

console.log(foo);