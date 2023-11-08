
function add(a,b){
    let sum = a+b;
    return sum;
}
function sub(a,b){
    let sum = a-b;
    return sum;
}
function mult(a,b){
    let sum = a*b;
    return sum;
}
function div(a,b){
    let sum = a/b;
    sum = sum.toFixed(3);
    return sum;
}
export {add,sub,mult,div};