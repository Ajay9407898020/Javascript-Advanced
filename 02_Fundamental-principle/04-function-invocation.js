// Function Expression: Define during Running phase
var canada = () => {
    console.log('cold');
}

// Function Declaration: Define during creation phase
function india() {
    console.log('worm');
}

// Function call/Invocation/Execution
india();
canada();

// In function Execution context We get "this", "arguments"

function marry(person1, person2) {
    console.log('arguments', arguments);
}
marry('Tim', 'Tina');