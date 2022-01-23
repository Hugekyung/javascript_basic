// 깊은 복사 vs 얕은 복사
// 배열과 객체만 적용됨
// 문자열, 숫자 등은 적용되지 않고 일반적인 방법으로 깊은복사 가능

// 얕은 복사 --> 주소만 복사, 그래서 해당 주소에 있는 같은 값을 가리킨다.
let a = [1,2,3,4,5];
let b = a;

b[0] = 10;

console.log(b); // a의 주소값이 복사되어 같은 값을 가리키게 된다.
console.log(a);

// 깊은 복사 --> 주소는 다시 할당하고, 값을 복사해온다. 즉, 별개의 주소를 가진 값을 생성한다.
// a.slice() 메소드를 통해 깊은 복사를 할 수 있다.
let c = [...a];
c[0] = 11;

console.log(c); // [ 11, 2, 3, 4, 5 ] 깊은 복사가 되어 10은 추가되지 않고 11만 추가됐다.
console.log(a); // [ 10, 2, 3, 4, 5 ]

let d = c.slice();
d[0] = 15;

console.log(d);
console.log(a);

// 이중 리스트인 경우
// lodash 라는 라이브러리에서 cloneDeep 메소드를 통해 깊은 복사를 할 수 있다.
let tmp = [['a', 'b'], ['c', 'd']];
let tmp2 = [...tmp];

console.log(tmp2);
console.log(tmp);

let tmp3 = cloneDeep(tmp);
console.log(tmp)
