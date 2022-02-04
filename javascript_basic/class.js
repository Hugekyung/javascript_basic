// 자바스크립트 클래스

// 클래스 기본 형식
/*
class MyClass {
    // 여러 메서드를 정의할 수 있음
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
*/

class User {

constructor(name) {
    this.name = name;
}

sayHi() {
    alert(this.name);
}

}

// 사용법:
let user = new User("John");
user.sayHi();