// 자료형
// 자바스크립트에는 8개의 자료형이 존재한다. 자바스크립트는 자료형 지정이 필요없는 동적타입 언어다.

// 1.숫자형: 정수, 부동소수점 숫자, +-무한대, NaN(에러)
// 자바스크립트는 잘못된 연산을 실행하더라도 에러를 뿜으며 뻗지 않고, NaN을 반환하고 종료한다.
let n = 123;
n = 12.345;

// 2.BigInt: 아주 큰 숫자
const bigInt = 123445567234234634543n; // 끝에 n을 붙여주면 BigInt 형을 만들 수 있다.

// 3.문자형
/* 따옴표의 3가지 종류
1.큰따옴표
2.작은따옴표
3.역따옴표: ${변수나 표현식}
 */
let str = "Hello";
let str2 = 'single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "haechan";
console.log(`Hello, ${this}`);
console.log(`the result is ${1 + 2}`);

// 4.Boolean
let isChecked = true;
let isReal = false;

let isGreater = 4 > 1;
console.log(isGreater); // true

// 5.Null: 존재하지 않는 값, 비어있는 값, 알수 없는 값
let age = null;

// 6.Undefined: 값이 할당되지 않은 상태. 즉, 변수가 선언만 되고 값이 할당되지 않은 경우 Undefined형이다.
let notDefined;
console.log(notDefined);

// 7-8.객체와 심볼: object & symbol

// **typeof 연산자: 해당 인수의 자료형을 나타낸다.
let isType = 'str';
console.log(typeof(isType));