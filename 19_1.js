function evenify(num){
 for (let i = 0; i < num.length; i++) {
     const element = num[i];
     if (element%2==0){
         console.log(element,':is a even number' )
     }
     else{
        console.log(element*2,':is a odd number' )
     }
 }
}
num=[1,2,3,4,5,6,7];
evenify(num);