function printName() {
    return 'Ajay';        //---------------------Execution Context
}

function findName() {
    return printName();   //---------------------Execution Context
}

function sayMyName() {
    return findName();    //---------------------Execution Context
}

console.log(sayMyName())