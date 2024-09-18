var title = 'Reponsive web design';
console.log(title.includes('dart'));
console.log(title.includes('web design', 1)); // 2th parameter is position to start search

var course = ['java', 'php', 'dart'];
console.log(course.includes('java', 0));
console.log(course.includes('java', -1)); // if parameter < 0 => -1 + 3 (lengthARR)