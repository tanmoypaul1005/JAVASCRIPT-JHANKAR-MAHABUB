const students=[
{id=21,name:'Amit'},
{id=31,name:'joy'},
{id=41,name:'saif'},
{id=51,name:'sabit'}
]

const names=students.map(s=>s.name);
const id=students.map(s=>s.id);
console.log(names,id)

const Filter=students.filter(s=>s.id>20);
console.log(Filter)
