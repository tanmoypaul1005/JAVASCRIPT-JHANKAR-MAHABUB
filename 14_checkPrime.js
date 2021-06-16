function isPrime(n){
    for(let i=2;i<n-1;i++){
     if(n%i==0){
      return 'Not a Prime Number';
     }
    }
 return 'Your Numer is Prime Number'
}

const result=isPrime(10);
console.log(result);