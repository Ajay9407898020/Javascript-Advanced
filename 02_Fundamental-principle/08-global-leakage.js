// Js is weird beacuse of some reasons

'use strict'

function weird() {
    height = 50;
    return height;
}

weird();

/*
height variable did not called with let const or var type means it is not store in variable enviornment
so It goes to global object and raise the issue of global leakage variables to resolve that we 
should use

"use strict" to avoid these type of leakage and gives error in console
*/

// Next weird thing
var heyhey = function doodle() {
    // doodle();  we can call it here
    console.log('hey hey');
}
heyhey();
// doodle(); // give an error because doodle is in its own execution scope