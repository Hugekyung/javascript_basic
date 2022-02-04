// 자바스크립트 set 자료형
// 파이썬에서의 set과 비슷하게 중복을 허용하지 않는 자료형이다.

/* 메소드 종류
new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
set.clear() – 셋을 비웁니다.
set.size – 셋에 몇 개의 값이 있는지 세줍니다.

set.keys() – 셋 내의 모든 값을 포함하는 이터러블 객체를 반환합니다.
set.values() – set.keys와 동일한 작업을 합니다. 맵과의 호환성을 위해 만들어진 메서드입니다.
set.entries() – 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들어졌습니다.
 */

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}