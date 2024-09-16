/*
array in Js
1. create array
    - how
    - use what? why
    - check data type
2. access array
    - length
    - get element by index
*/
//1
var languages = [
    'javascript',
    'php',
    'rust',
    null,
    undefined,
    function() {

    },
    {}
];

var languages2 = new Array( //khong khuyen cao dung vi tao ra insistent
    'javascript', 
    'php',
    'rust',
    null,
    undefined,
    function() {

    },
    {}
);


console.log(languages);
console.log(languages2);

console.log(typeof languages);
console.log(Array.isArray(languages));
console.log(Array.isArray({}));
console.log(Array.isArray(new Array(1,2)));

//2
console.log(languages.length);
console.log(languages[2]);




