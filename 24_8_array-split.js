const nums=[1,2,3,4,5,6,7,8];
const part=nums.slice(2,5);
console.log('Slice=',part)


const removed=nums.splice(2,5,77)
console.log('Splice=',removed)


const together=nums.join("ami");
console.log(together)