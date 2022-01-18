var fruit = 'apple';
var box = 'banana';

document.write(fruit); // document.write(); --> 데이터를 웹 화면에 출력
document.write(box);

box = "tomato";
document.write(box);

// 함수 선언 방식(아래 두가지 방식)
var func1 = function() {
    console.log("함수!!");
}

function func2() {
    console.log("함수2!!");
}

// 객체
var exObject = {
    property : "data",
    sum : function func2() {
        console.log("함수2!!");
    }
}

console.log(exObject.property);