// 1. Event listener -> 0K
// 2. JSON I
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// 1. Json là 1 định dạng dữ liệu (chuỗi)
// 2. JavaScript  Object notation
// 3. JSON: number, string, boolean, object, null, array

// Ma hoa(encode) / Giai ma(decode) 
//=> Stringify / from js type -> json
//=> Parse    / from json -> js type


//=> Parse    / from json -> js type
var a = "1"; //number
console.log(JSON.parse(a));
var a = "true";//boolean
console.log(JSON.parse(a));
console.log(typeof JSON.parse(a));

var a = "null";//null
console.log(JSON.parse(a));
console.log(typeof JSON.parse(a));

var a = '"abc"';//string
console.log(JSON.parse(a));

var json ='["javascript", "php"]'; //array
console.log(JSON.parse(json));
console.log(typeof JSON.parse(json));


var json = '{"name":"Van Thinh", "age":18}';//object
console.log(JSON.parse(json));
console.log(typeof JSON.parse(json));

var object = JSON.parse(json);
console.log(object);

//=> Stringify / from js type -> json
console.log(JSON.stringify(true));
console.log(typeof JSON.stringify(true));

console.log(JSON.stringify(null));
console.log(typeof JSON.stringify(null));

console.log( JSON.stringify([
    'JavaScript',
    'php',

]))
//add (")
console.log( JSON.stringify([
    'Java"Script',
    'php',

]))

console.log(JSON.stringify({
    name: 'Van THinh',
    age: 18,
    test: function() {} // k the hien dc trong json

}))