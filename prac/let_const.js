// let, const를 사용한 변수 선언
/*
- let과 const는 ES6 에서 등장한 block-scoped 변수 선언.
- let은 값의 재할당이 가능하고 const는 불가능(immutable).
- const로 선언된 배열이나 객체의 경우 새로운 객체로 재할당하는 것은 안되고, 배열값의 변경/추가, 객체의 필드 변경등은 가능.
*/

let foo = 'foo1';
const bar = 'bar1'; // 변수 재할당이 필요 없는 경우에 사용
console.log(foo);

if (true) {
    let foo = 'foo2';  // let으로 선언된 변수는 새로운 값으로 재할당 가능
    console.log(foo);
    console.log(bar);
}

console.log(foo);
bar = 'bar2'; // const로 선언된 bar는 새로운 값의 재할당이 불가능 --> 에러 발생