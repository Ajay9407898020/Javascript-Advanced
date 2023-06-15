const a = function() {
    console.log('a', this);

    const b = function() {
        console.log('b', this);

        const c = {
            hi: function() {
                console.log('c', this);
            }
        }
        c.hi(); // C object because it hi() called with c object
        }
    b();   //window obj -> no object metioned on left side of function call
}
a(); //window obj -> no object metioned on left side of function call


// Biggest issue
const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function() {
            console.log('b', this);
        }
        anotherFunc();  // window object even if it is inside the object because there is no object calling this function
    }
}

// To solve this we can use arrow function which is locally bbound insted of dynamically bound