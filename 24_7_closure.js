function stopWatch(){
    const count=0;
    return function(){    //kon 1 ta function ar vitor jodi ono 1 ta function return kori bha declaration kori sata 1 ta closing environment toiri kora
    count++;
    return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2=stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());