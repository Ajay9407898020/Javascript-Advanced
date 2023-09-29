//  There are 5 types in JS

// 1 string
let str = 'My name is Ajay';
console.log(typeof str);  //'string'

// 2 number
let age = 24;
console.log(typeof age);  //'number'


// Boolean
let AmIWorkingProfessional = true;
console.log(typeof AmIWorkingProfessional); //'boolean'

// undefined 
let undefinedVariable;
console.log(typeof undefinedVariable);  //'undefined'

// Symbol
let symbol = Symbol('New Symbol') //Introduced in ES6y
console.log(typeof symbol);  //'symbol'

// null : This is one of the type in JS like null type but it has object type which is the biggeste issue in JS
console.log(typeof null);  //object


// object
console.log(typeof {});  //object

console.log(typeof []);  //object

console.log(typeof function(){});  //function

/*  Function and array are object
            Object
           /      \   
          /        \ 
        Array      Function()
*/

// Lets demo

function a() {

}

a.hi = 'Ajay';

console.log(a.hi);

// There are type in JS 

// 1. Primitive: Represent single data in mrmory
// EX: string, boolean, number.....

// 2. Non Primitive: Represent the connection to the location in memory like a refrence
// Ex: object, Array