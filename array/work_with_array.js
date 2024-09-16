/*
work with array
JS array method
1. to string
2. join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
10. reverse
11. length
12. sort
13. filter
14. include
15. indexOf
15. forEach loop
16. map
17. reduce
18. some
*/

var languages = [
    'javascript',
    'php',
    'ruby',
];
//to stringstrigth
//length
console.log(languages.length);
console.log(languages.toString());
console.log(typeof languages.toString());

//join
console.log(languages.join());
console.log(languages.join('-'));
console.log(languages.join(' - '));

//pop
console.log(languages.pop()); // delete that last element of array and return it
console.log(languages);  // array after deleting

console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());// when delete all array return undefined

var languages = [
    'javascript',
    'php',
    'ruby',
];

//push
console.log(languages.push('dart', 'java')); // add 'dart' to array and return to array.length
console.log(languages);

//shift
console.log(languages.shift()); // delete the first element and return it
console.log(languages.shift());
console.log(languages.shift());
console.log(languages.shift());
console.log(languages.shift());
console.log(languages.shift());


var languages = [
    'javascript',
    'php',
    'ruby',
];
//unshift
console.log(languages.unshift('dart'));// add an element on the first index of array and return array's length
console.log(languages);
console.log(languages.unshift('dart', 'java'));
console.log(languages);

var languages = [
    'javascript',
    'php',
    'ruby',
];
//splice
languages.splice(1, 2); // the first parameter stand for the index of the first element
//and pointer will stand at the next element
// the second parameter stand for the amount of element will be deleted after the pointer

languages.splice(1, 0, 'Dart'); // it the same as "insert" function
// push the pointer between "js" and "php" and add dart into it;
console.log(languages);

var languages = [
    'javascript',
    'php',
    'ruby',
];

var languages2 = [
    'dart',
    'ruby',
];
//concat
console.log(languages.concat(languages2)); //match 2 arrays

//slicing
console.log(languages.slice(1, 2)); // sao chep mang
console.log(languages.slice(1));
console.log(languages.slice(0));
console.log(languages.slice(-2, -1));

//reverse
var languages = [
    'javascript',
    'php',
    'ruby',
];
console.log(languages.reverse());
console.log(languages);


var arr14 = [4,3,7,9];
console.log(arr14.sort());
console.log(arr14);

// filter
const arr19 = ['a', 'd', 'c', ['k', 6], ['g', 0], ['h', 1]]
console.log(arr19.filter((el) => typeof el === 'string')) // only return element that is string
// [ 'a', 'd', 'c' ]
console.log(arr19.filter((el) => Array.isArray(el))) // only return element that is array
// [ [ 'k', 6 ], [ 'g', 0 ], [ 'h', 1 ] ]
console.log(arr19.filter((el) => el[1] > 0)) // only return array element has second element greater than 0

// with additional bar variable
const bar = 2;
const filtered =  arr19.filter((el) => {
    return Array.isArray(el) && el[1] >= bar
}, bar)
console.log(filtered) // [ [ 'k', 6 ] ]

// Include
// Determines if the array contains a value, method includes
const arr20 = [1,2,3, 'a', 'b', 'c']
console.log(arr20.includes(1)); //true
console.log(arr20.includes('a')); //true
console.log(arr20.includes('a', 4)) // false, start comparing from index 4
console.log(arr20.includes('d')) //false
console.log(arr20)// [ 1, 2, 3, 'a', 'b', 'c' ], original array NOT modified


var arr21 = [1,2,3, 'a', 'b', 1, 'b']
console.log(arr20.indexOf(1)); //0
console.log(arr20.indexOf('b')) //4
console.log(arr20.indexOf('b', 6)) // 6, start search from index 5
console.log(arr20.indexOf('d')) // -1
console.log(arr20) // [ 1, 2, 3, 'a', 'b', 1, 'b' ], original array NOT modified



//forEach loop

const arr24 = [1,2,3]
const extra = 1
const squared = arr24.forEach((el) => {
    console.log(el * el + extra)
}, extra)
// 2
// 5
// 10
console.log(squared) // undefined
console.log(arr24) // [ 1, 2, 3 ], original array NOT modified


//map()

// Mapping array to a new array, method map
const arr25 = [['a', 1], ['b', 2], ['c',3]];
const year = 2020;
// this mapping creates a sentence for each element with name age information
const p = arr25.map((el) => `The year is ${year} and '${el[0]}' is ${el[1]} year(s)old.`, year)
console.log(p);

// reduce

// Loop through all element and reduce, method reduce

const arr26 = [1,2,3]
const init = 4;
// this mapping creates a sentence for each element with name age information
const r = arr26.reduce((acc, cur)        => {
    return acc + cur
}, 4)
console.log(r) //10

//some
// Check if at least one element satisifies given condition, method some

const arr27 = [1,2,3]
console.log(arr28.some((el) => el >2 )); // true
console.log(arr27.some((el) => el <0 )); //false;