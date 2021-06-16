class Parent{
    constructor(){
        this.fatherName='joy';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;

    }
getFullName(){
   return this.name+" "+this.fatherName;
    }
}
const baby=new Child('Amit');
console.log(baby)

console.log(baby.getFullName())