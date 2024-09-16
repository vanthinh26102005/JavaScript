/*
operator
1.  số học - arithmetic
2.  gán    - assignment
3.  so sánh- comparison
4.  logic  - logical
*/

//so hoc
var a = 1+2;
console.log(a);

// gan
var fullName  = 'Ngo Van Thinh';

// so sanh
var a = 3;
var b = 2;

if(a > b) {
    console.log('Dung');
}
else {
    console.log('Sai');
}

// logic
if(a > b && b >0) {
    console.log('a > b va b > 0');
}

var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3

var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3


var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3


var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
