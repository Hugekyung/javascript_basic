
let value = '12qwe34asf45';
num = [0,1,2,3,4,5,6,7,8,9];
let result = ''
for (let i=0; i<value.length; i++) {
    console.log(i, value[i].charCodeAt(i));
    if (num.includes(parseInt(value[i]))){
        result += value[i];
    }
}
console.log(result);

let result2 = ''
value.split('').forEach((v,i) => {
    console.log(value.charCodeAt(v));
    if (48 <= value.charCodeAt(v) <= 57) {
        console.log(v)
        result2 += value[i]
    }
})

console.log(result2);