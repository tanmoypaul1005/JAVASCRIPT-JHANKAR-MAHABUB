function reverseString(str){
let reverse="";
for(let i=0;i<str.length;i++){
    reverse=str[i]+reverse;
}
return reverse;
}

let statement ="Hellow Aliean vai"
let forAlien=reverseString(statement);
console.log(forAlien)
