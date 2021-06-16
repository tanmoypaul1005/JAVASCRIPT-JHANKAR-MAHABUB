const person={name:'joy Bonik',age:21,job:'facebooker',gfName:'Anila',phone:34567890};
const {name,age,job,gfName,phone}=person;
console.log(name,age,job,gfName,phone);



const friends=['Amit','joy','saif','sabid','Rakib','Hashan','Tamim'];
const [chotofrien,nextfriend,...olderf]=friends;
console.log(chotofrien,nextfriend,)
console.log(...olderf)