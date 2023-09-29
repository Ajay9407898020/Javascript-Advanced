// Pass by value: copy the value and store it in memory in different place
let a = 5;
let b = a;

b++;

console.log(a);  // 5
console.log(b);  // 6

// Pass By reference: Refrencing the location No seperation memory created for obj2 and reference the obj1
let obj1 = { name: 'Ajay', pwd: '123' };
let obj2 = obj1;

obj2.pwd = 'easypeasy';

console.log('obj1', obj1);  // { name: 'Ajay', pwd: 'easypeasy' }  Changed
console.log('obj2', obj2);  // { name: 'Ajay', pwd: 'easypeasy' } 

// Array is also as object 
let arr = [1,2,3];
let newArr = arr;

newArr.push(99888677789900);
console.log('newArr', newArr);  // [ 1, 2, 3, 99888677789900 ]     //Changed
console.log('arr', arr);        // [ 1, 2, 3, 99888677789900 ]   

// What if we dont want that reference behavior in arrays and object 

// For Arrays
var array1 = [1,2,3,4,5];
var array2 = [].concat(array1);

array2.push(100);

console.log('array1', array1);  // [ 1, 2, 3, 4, 5 ]  //Not changed
console.log('array1', array2);  // [ 1, 2, 3, 4, 5, 100 ]  

// For Object

var object1 = { a: 'a', b: 'b' };
var object2 = Object.assign({}, object1);

// Another way is spread operator
var object3 = {  ...object1 };

object2.c = 'c';
object3.d = 'd';

console.log('object1', object1);  // { a: 'a', b: 'b' }  //Not changed
console.log('object2', object2);  // { a: 'a', b: 'b', c: 'c' }
console.log('object2', object3);  // { a: 'a', b: 'b', d: 'd' }


// In above code there is one issue like It can not deep clone also called shallow cloning
object1.e = {
    deep: 'Deep value'
}
object2 = Object.assign({}, object1);

object2.e.deep = 'Minor value changed';

console.log('object1', object1);  //{ a: 'a', b: 'b', e: { deep: 'Minor value changed' } }
console.log('object2', object2);  //{ a: 'a', b: 'b', e: { deep: 'Minor value changed' } }


// Deep clone possing using JSON
object1.f = {
    deepValue: 'Not changed'
}
object2 = JSON.parse(JSON.stringify(object1));
object2.f.deepValue = 'Trying to change';

console.log('object1', object1);  
/*
{
  a: 'a',
  b: 'b',
  e: { deep: 'Minor value changed' },
  f: { deepValue: 'Not changed' }
}
*/
console.log('object2', object2);
/*
{
  a: 'a',
  b: 'b',
  e: { deep: 'Minor value changed' },
  f: { deepValue: 'Trying to change' }
}
*/