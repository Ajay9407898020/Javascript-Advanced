// Note: Each Contact has link to its outside world called as scope chain
var x = 'x';
function sayMyName() {
    console.log(x);
    var y = 'y';
    return function findName(){
        console.log(y);
        var z = 'z';
        return function printName() {
            console.log(z)
            return 'Ajay';     
        }
    } 
}

sayMyName()()();
