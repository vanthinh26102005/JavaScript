// 3 ways to declare string
let str1 = 'hello world';
let str2 = "hello world 2";
let str3 = `hello world 3`;

let name1 = 'John' // put text between single quote
let name2 = "Linda" // double quotes ok

const greet = (name) => console.log(`hello, ${name}`)

greet(name1);
greet(name2);

let myStr = 'hello Thinh';
console.log('myStr length is:', myStr.length);

//Get to a character in string with index

console.log('character at index 6 is', myStr[6]);
console.log('character at index 6 is', myStr.charAt(6));

// by using built-in 'charCodeAt' method
const indexNum = 0
console.log(`character at index '${indexNum}' is: '${myStr.charAt(0)}', UTF16 code number is: ${myStr.charCodeAt(0)}`)
// character at index '0' is: 'h', UTF16 code number is: 104

//split string

const longStr = 'hello world, from SSEV';
console.log(longStr.split(','));
console.log(longStr.split(' '));
console.log(longStr);


//Get a substring with 2 indices
// Get a substring with 2 indices
// in this example, we will get 'world' in 'hello world, from SESV!'
// start index = 6 (included)
// end index = 11 (excluded)
console.log(longStr.substring(6,11)); // world
console.log(longStr.slice(6,11));   // world

// lower and upper case
// Note the origin string is not modified
let sentence = 'Ngo Van Thinh';
console.log(sentence.toLowerCase());
console.log(sentence);
console.log(sentence.toUpperCase());
console.log(sentence);


//