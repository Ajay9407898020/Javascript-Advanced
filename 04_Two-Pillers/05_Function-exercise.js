"make a generic function for multiply"


function multiplyBy(num1) {
    return function(num2) {
        return num1 * num2
    }
}

const multipyBy3 = multiplyBy(3);

console.log(multipyBy3(2));


"Straight forword way to do it "

const multiply = (num1) => (num2) => num1 * num2;
console.log(multiply(2)(10));



