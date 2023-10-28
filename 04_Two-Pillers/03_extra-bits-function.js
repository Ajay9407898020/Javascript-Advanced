"Better to initialize function outside from the for loop"

function a() {

    }

for(let i = 0; i< 5; i++) {
    // function a() {}   //Insted of doing this
    a()
}


"Try to set default params for better edge cases"

function b(params = {}) {
    return params
}