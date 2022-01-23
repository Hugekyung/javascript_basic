// arrow function, 함수 선언법
// a, b를 인자로 받아 a - b를 반환한다.
const func = (a,b) => {
    console.log(a,b); 
    return a - b;
}

console.log(func(5,3));

// setInterval: 함수를 시간마다 실행(1000ms)
setInterval(function(){
    console.log("hi");
}, 1000);

// arrow function version
setInterval(() => {console.log("hi")}, 1000);