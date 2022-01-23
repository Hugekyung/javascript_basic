// javascript array

let a_list = [1,2,3,4,5];

// 리스트에 값 추가하는 방법
// 1. 푸시
a_list.push(6);

// 2. 스프레드 연산자
let b_list = [7,8,9,10];
let c = [...a_list,...b_list]; // 이런 방식으로 두 리스트를 합칠 수 있다.

console.log(c);

// 마찬가지로 객체도 합칠 수 있다
let a_obj = {
    name: "haechan"
};

let b_obj = {
    age: 30
};

let newObj = {
    ...a_obj,
    ...b_obj
}

console.log("newObj >>", newObj); // { name: 'haechan', age: 30 }

// concat: 리스트를 합치는 또 다른 방법
let d = a_list.concat(b_list);
console.log("d list >>", d); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 반복문 팁
// 파이썬의 for문과 같다고 보면 된다
const num = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(const n of num) {
    sum += n;
}

console.log(sum);

// map : 배열 순회 시 for문 대신 사용, 새로운 배열(값)을 반환
// 순차적으로 값에 하나씩 접근한다
// forEach : map과 비슷하지만 반복만 하고 리턴값은 없다.

// map vs forEach : map은 배열을 반환하고, forEach는 배열을 반환하지 않는다.
// 값을 반환 받아야 하는 반복은 map / 필요없는 경우는 forEach를 쓰자
// 따라서, 배열이 필요없는 경우에는 forEach로 구현하는 것이 더 효율적이다.
const r = num.map(v => {
    return v * 2
})

console.log(r);

let objOne = {
    name: "haechan",
    age: 20
};

console.log(Object.keys(objOne)); // Object.keys() : 객체의 키 값을 배열로 리턴
console.log(Object.entries(objOne)); // Object.entries() : 객체의 모든 값들을 배열로 리턴

let test = ['1', '2', '3', '4', '5', '6'];
console.log(test.map((v) => Number(v)));


// filter : test2.filter((value, index) => 조건);
let test2 = [1,2,3,4,5,6];
console.log(test2.filter(v => v % 2 == 0));

let test3 = test2.filter(v => v !== 6);
console.log(test3);

// reduce : 두 개씩 값을 가져와 지정 함수 실행
// 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 ...
console.log(test2.reduce((a,b) => a + b));

// 배열 만들기, fill()
let arr = Array(10).fill(1);
console.log(arr);