console.log(one) // undefined
var one = 1;
var one = 2;
console.log(one) // 2



a(); //Bye

function a() {
    console.log('hi');
}

a(); //Bye 

function a() {
    console.log('Bye');
}

a(); //Bye




// Exercise 2
var favouriteFood = "grapes";

var foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood); //undefined

    var favouriteFood = "sushi"; 

    console.log("New favourite food: " + favouriteFood); //sushi
}

foodThoughts();