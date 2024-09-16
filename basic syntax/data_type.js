// Number
var a = 1;
var b = 1.5;

//String
var str = 'van thinh';
var str = 'van \'thinh';
console.log(str);

//boolean
var isSuccess = true;

//Undefined type
var age;
console.log(typeof age);

//null
var isNull = null; // NOTHING


//Symbol

var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique
console.log(id);

//Function
var myFunc = function() {
    console.log('xin chao');
}
// this code will not run if you dont call it
// call it to run
myFunc();

//Object
var myObj = {
    name: 'Van Thinh', // key : value
    age: 18,
    adress: 'quang tri',
    myFunc : function() {

    } 
};
console.log('myObject', myObj);

var myArray = [
    'JS',
    'c++',
    'ruby',
];
//key cua array khac object la no tu dong va tu tang 1->2>3
console.log('myARR', myArray);
