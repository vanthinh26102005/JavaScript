function cong(a, b) {
    return a+b;
    console.log('hello'); // after return no run code
}

var res = cong(2, 8);
console.log(res);

//
function cong1(a, b) {
    /*return*/ a+b;
    console.log('hello');
}

var res = cong1(2, 8);
console.log(res);

//
function cong3(a, b) {
    return [a, b];
}
var res = cong3(2, 8);
console.log(res);
//
function cong4(a, b) {
    return a.toString() + b.toString();
}
var res = cong4(2, 8);
console.log(res);