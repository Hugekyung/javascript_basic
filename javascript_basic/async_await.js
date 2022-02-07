// async & await
// async는 함수 앞에 붙여 사용하며, await은 모든 함수 안에서 동작하는 것이 아니라
// async가 붙은 함수 내에서만 동작한다.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  
    alert(result); // "완료!"
  }
  
  f();
  