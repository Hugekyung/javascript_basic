// 피보나치 수열

let n = 8;
let fibo = [];
  for (let i=0; i<n; i++) {
    console.log("i >>", i)
    if (i === 0 || i === 1) {
        fibo.push(i);
    } else {
        let vari = fibo[i-1] + fibo[i-2]
        if (vari < n) {
            fibo.push(vari);
        } else {
            break;
    }
    }
    
  }
console.log(fibo);