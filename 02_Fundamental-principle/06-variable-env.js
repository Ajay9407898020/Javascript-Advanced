// Variable Env: In every Execution context there is a variable env where variable placed

function two() {
    var isValid; //undefined
}

function one() {
    var isValid = true;
    console.log(isValid); //true
    two();
}

var isValid = false;
one();