var fullName = 'Ngo Van Thinh';
var age = 26;
// alert(fullName);
// alert(age);

/* built-in function
    1. alert
    2. console
    3. confirm
    4. promt
    5. set timeout
    6. set interval
*/
console.log(123);
console.log(fullName);
confirm("You are 18?");
prompt("you are 18");
setTimeout(function() {
    alert('Thong bao');
}, 1000)

setInterval(function() {
    // alert('Thong bao');
}, 1000)

setInterval(function() {
    console.log('day la setInterval example' + Math.random())
}, 1000)