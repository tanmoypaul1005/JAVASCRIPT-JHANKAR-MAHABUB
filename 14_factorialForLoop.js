// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4
// 5!=1*2*3*4*5
// 6!=1*2*3*4*5*6
// 7=1*2*3*4*5*6*7


function Tofactorial(n){
 let factorial=1; 
for(let i=1;i<=n;i++){
factorial=factorial*i;

}
return factorial;
}
const man1=Tofactorial(5);
console.log(man1);

const man2=tofactorial(10);
console.log(man2);