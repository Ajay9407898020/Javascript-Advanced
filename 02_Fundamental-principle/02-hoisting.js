
console.log(teddy);
var teddy = 'bear';
console.log(sing());

// Function Declarations
function sing() {
    console.log('ohh la la la la');
}


sing2();  //Error

// Function Expression
var sing2 = function() {
    console.log('uh la la la la');
}