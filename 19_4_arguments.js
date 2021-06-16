function addNumber(num){
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum=sum+element; 
    }
    return sum;
}
let result=addNumber(3,10,14,1,5);
console.log(result);