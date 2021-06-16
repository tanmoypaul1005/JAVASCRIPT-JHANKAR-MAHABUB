// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4
// 5!=1*2*3*4*5
// 6!=1*2*3*4*5*6
// 7=1*2*3*4*5*6*7



function Tofactorial(n){
let i=1;
let factorial=1;
while(i<=n){
factorial=factorial*i;
i++;
}
return factorial;
}

const man1=Tofactorial(5);
console.log(man1);

const man2=Tofactorial(10);
console.log(man2);