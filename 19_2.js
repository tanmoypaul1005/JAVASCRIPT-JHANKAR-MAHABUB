function evenify(num){
 let result;   
  if (num%2==0){
       result=num;
  }
  else{
     result=num*2;
  }  
  return result;
  
}
let result=evenify(13);
let square=result*result;
console.log( 'square : ',square);



function evenify_all(nums){
let even_array=[];
for (let i = 0; i <nums.length; i++) {
    const element = nums[i];
    let result=evenify(element);
    even_array.push(result);  
}
return even_array;
}
let nums=[5,12,89,45,18,8];
console.log(evenify_all(nums))


