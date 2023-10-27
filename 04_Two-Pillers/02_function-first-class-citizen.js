'Function are the first class citizens Follows Three Properties'


// ----------------------------------------------------
'1. Can assign to variable or property of variable'

const a = function() { return 'a' };
a();



// ----------------------------------------------------
'2. Can pass as parameter'
 
function b(fn) {
    fn();
}

b(function() {console.log('b')});



// ----------------------------------------------------
'3. can return function'

function d() {
    return function() {
        console.log('d');
    }
}
d()();