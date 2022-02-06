// 자바스크립트의 Promise-chaining을 활용한 비동기 작업

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
}).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
}).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
}).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
});