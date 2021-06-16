function getArraySum(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
            sum=sum+number[i];
    
    }
    return sum;
}
let number=[45,65,78,12,3,54,65];
let result=getArraySum(number);
console.log(result)