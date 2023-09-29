var array = [1,2,3,'Ajay'];

//  Internally it behaves as array

array = {
    0: 1,
    1: 2,
    2: 3,
    3: 'Ajay'
}

// To check wether given variable assigned value is array or not
console.log(Array.isArray([]));