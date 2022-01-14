// 1. 변수 가지고 놀기
let admin;
let name;

name = "John";
admin = name;

console.log(admin);
console.log(name);

// 2. 올바른 이름 선택하기
let ourPlanetname = "earth";
let currentUserName = "John";

// 3. 대문자 상수 올바로 사용하기
const birthday = '18.04.1982';
const age = someCode(birthday);

// 아래와 같이 대문자 상수로 바꿔도 괜찮을까?
const BIRTHDAY = '18.04.1982'; // 바꿔도 됨. 생일은 바뀌지 않는 값이다.
const AGE = someCode(BIRTHDAY); // 바뀌면 안됨. someCode로 변경될 수 있는 값이기 때문이다.