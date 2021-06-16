function explain_callback(name,age,task){
console.log('Hellow ',name)
console.log('Your Age ',age)
task();
}

function washHand(){
    console.log('Wash Hand with soap')
}
function takeShower(){
    console.log('Take Shower')
}

explain_callback('Karim',50,washHand);
explain_callback('Amit',20,takeShower);