// Three Ways we can define and invoke function

// 1. _________________________________
function one() {
    return 1;
}

one();

// 2. _________________________________
const obj = {
    two() {
        return 2;
    }
}

obj.two();

// 3. _________________________________
function three() {
    return 3;
}

three.call();


// 4.There is another way we can call the function but it rarely use which is Function Contructor
const four = new Function('return 4');
console.log(four());


// Question: Function are Object

function wooohooo() {
    return 'wooohoo';
}

wooohooo.yell = 'yeeeeelllllll';



// MOTIVATION


'What internally Happenss creates a special Type of callable object'
/*
const specialObject = {
    yell : 'yeeeeelllllll',
    name: 'wooohooo',
    (): 'woohoo
}
*/

'What is the use of this callable object : We can store it move it around'