// 자바스크립트 프로미스
// 프로미스는 비동기 동작에 대한 처리 객체
// resolve, reject를 인자로 받아 resolve 시의 callback 함수, reject 시의 callback 함수를 처리

function timer(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(time);
        }, time);
    });
}

// 1초 이후 실행 함수 예약
timer(1000).then((time) => {
    console.log("time : ", time);
})