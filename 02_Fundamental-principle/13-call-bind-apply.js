// call, apply, bind

const wizard = {
    name: 'Marline',
    health : 100,
    heal() {
        this.health = 100;
    },
    heal1(num1, num2) {
        this.health += num1 + num2;
    }
}

const archer = {
    name: 'Mavline',
    health: 30,
    // We want heal method from wizard here but not want to repeate
}

console.log('1', archer.health);
wizard.heal.call(archer);  //firs this(wizard).heal ------call------> call(this(arsher))
console.log('2', archer.health);

console.log('3', archer.health);
wizard.heal1.call(archer, 300, 500);  
console.log('4', archer.health);

// apply: takes array as argument
console.log('5', archer.health);
wizard.heal1.apply(archer, [300, 500]);  
console.log('6', archer.health);


// bind: return function for future use
function multiply(num1, num2) {
    return num1 * num2
}

const multiplyBy = multiply.bind(this, 2);  //returns new function for future use
console.log(multiplyBy(3));