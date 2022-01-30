// 삼항연산자
// 조건문 ? 참일때 값 : 거짓일 때 값
// 주로 한줄용, 일회용 조건을 주기 위한 용도

const test = () => {
    return n > 0 ? console.log('True') : console.log('False');
}

/*
(삼항연산자 예제)
getMiddle 함수는 input String s의 중간에 있는 문자열을 반환합니다.
이 때 s의 길이가 짝수라면 가운데 두글자를 반환하고 홀수라면 문자 1개만 반환합니다.
return 문 한 줄로 작정하세요.
intput: eliceacademy
output: ac
intput: christmas
output: s
*/
function getMiddle(s)
{
    return s.length % 2 == 0 ? s.substr(parseInt(s.length / 2), 2) : s.substr(parseInt(s.length / 2), 1);
}

console.log(getMiddle("christmas"));


// CLASS
// "new 클래스명" 방식으로 생성

class Champion {
    constructor(name) {
        this.name = name;
    }
}

champ1 = new Champion("리븐") // name = 리븐