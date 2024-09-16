// // work with string
var myStr  = 'van thinh hoc JS tai JS ECS JS';
// 1. length
console.log(myStr.length);

// 2. find_index
console.log(myStr.indexOf('JS'));
// can use this method to find "js" after index 15
console.log(myStr.indexOf('JS', 15)); 
console.log(myStr.lastIndexOf('JS'));
console.log(myStr.indexOf('abc'));
console.log(myStr.search('JS'));

// 3. cut_string
var myStr  = 'van thinh hoc JS tai ECS';
console.log(myStr.slice(14,16)); // cut from index 14 -> 16;
console.log(myStr.slice(0));
console.log(myStr.slice(-3, -1)); // cut from right to left  =>  .. -3 -2 -1 0)


// 4. replace
var myStr  = 'van thinh hoc JS tai ECS JS JS JS';

console.log(myStr.replace('JS', 'Javascript'));
console.log(myStr.replace(/JS/g, 'Javascript'));

// 5. convert_upper_case
var myStr  = 'van thinh hoc JS tai ECS';
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());


// 7. Trim/slpit
var myStr  = '     van thinh hoc JS tai ECS     '; 
console.log(myStr.length);
console.log(myStr.trim()); // delete backspace
console.log(myStr.trim().length); // length of str after delete backspace 

var language = 'Javascript, php, rust';
console.log(language.split(', '));
var language1 = 'Javascript';
console.log(language1.split(''));


// 8. get character_by_index
const myStr2 = 'Van Thinh';
console.log(myStr2.charAt(0));
console.log(myStr2.charAt(1));
console.log(myStr2.charAt(10));
console.log(typeof myStr2.charAt(10)); //alwasy return string

console.log(myStr2[1]);
console.log(myStr2[10]);






