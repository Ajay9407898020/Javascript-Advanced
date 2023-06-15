// Arguments: It looks like an argument as array but it isn't

function marry(person1, person2) {
    console.log('arguments', typeof arguments); //object
    // To make it an array
    console.log(Array.from(arguments));
}
marry('Tim', 'Tina');


// Easy way to make it an array is use rest operators
function marry2(...args) {
    console.log('args', args);
}
marry2('Tim', 'Tina');