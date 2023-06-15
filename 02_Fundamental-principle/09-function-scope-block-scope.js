function functionScope() {
    // Function Level scoping
    for(var i = 0; i < 5; i++) {
        console.log('i = ', i);
    }
    console.log(i);

    // Block level scoping
    for(let j = 0; j < 5; j++) {
        console.log('i = ', j);
    }
    console.log(j);
}
functionScope();
