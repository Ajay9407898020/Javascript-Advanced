const obj = { 
    name: 'Ajay',
    sayMyName: function () {
        console.log('My name is ', this.name);
    }
}
obj.sayMyName();

// Benefits of "this" keyword
// 1. Gives method access to their object
const obj1 = {
    name: 'Wanjari',
    sayMyName: function () {
        return 'My name is ' + this.name;
    },
    printMyName: function () {
        console.log('My name is ' + this.name + ' printed'); //repetative code

        // Hence we can access of methods inside object
        console.log(this.sayMyName() + ' Printed');
    }
}
obj1.printMyName();

// 2. Execute same code for multiple objects

var myName = 'Sunny';
function importantPerson(){
    console.log(this.myName + '!');
}
const obj2 = {
    myName: 'Bunny',
    importantPerson: importantPerson
}
const obj3 = {
    myName: 'Sundar',
    importantPerson: importantPerson
}
importantPerson();  //You should paste in developer tool, Here it is undefined but in developer tool it Sunder
obj2.importantPerson();  //Bunny
obj3.importantPerson(); //Sundar