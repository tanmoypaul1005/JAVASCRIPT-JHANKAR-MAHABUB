let marks=[45,81,63,98,56,35,23];
let max=[0];
for(let i=0;i<marks.length; i++){
    let element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest Value is :",max)