function fibonacchi(n){
    if(n == 0){
    return 0;
    }

    else if(n == 1){
        return 1;
    }

    else{
    return fibonacchi(n-1)+fibonacchi(n-1);
    }
}
const result=fibonacchi(10);
console.log(result)