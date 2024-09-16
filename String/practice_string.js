// decalere string
var fullName1 = 'Van Thinh';
var fullName2 = new String('Van Thinh');

console.log(fullName1);
console.log(fullName2);

console.log(typeof fullName1);
console.log(typeof fullName2);
// how to print '...' - backslash in JS
var fullName3 = 'Van Thinh \'gioi\'';
console.log(fullName3);

//length of string
console.log(fullName1.length);

//string is long
var str = 'asdfasdfasdasdgasdgasdg'
+ '2. 12312asdfasdfasdfas'
+ '1. sdfasdfasdfasdfasdf'
;
console.log(str);

// template string

var firstName = "Van";
var lastName ="Thinh";

console.log('Toi la: ' + firstName + ' ' + lastName);
// template string ES6
console.log(`Toi la: ${firstName} ${lastName}`);

