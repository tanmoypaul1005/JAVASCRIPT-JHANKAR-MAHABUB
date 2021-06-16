const numbers=[3,4,5,6,7,8];
 
// const result=numbers.map(function(element){
//  return element*element;   
// })

// console.log(result)


const result=numbers.map(element=>element*element);
console.log('Map =',result)


const bigger=numbers.filter(element=>element>5);
console.log('Filter=',bigger)

const isThare=numbers.find(element=>element>5);
console.log('Find=',isThare)