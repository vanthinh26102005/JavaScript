let num1 = 1;
let num2 = 2;
let floatNum = 3.4;
let expNum1 = 5.6e+4;
let expNum2 =5.e6-4;

let num3 = num1 + num2;

console.log('num1:', num1);
console.log('num2:', num2);
console.log('num3:', num3);
console.log('expnum1', expNum1, 'numTest:', num1+num3);
console.log('expnum2', expNum2);

// convert num1 to a string and assign that value to strNum1 variable
let strNum1 = num1.toString();
console.log("strNum1:", strNum1);
console.log("typeof num1:", typeof num1);
console.log("typeof strNum1:", typeof strNum1);

Number // global Number object, ready to use anywhere, anywhen

// The smallest interval between two representable numbers.
console.log(Number.EPSILON) // 2.220446049250313e-16

// Integer bigger than this value will result inaccuracy in calculation.
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Integer smaller than this value will result inaccuracy in calculation.
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Max number can be presented in Javascript
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// Min number can be presented in Javascript (without actually being zero)
console.log(Number.MIN_VALUE) // 5e-324

// "Not a Number" value. You will see this a lot actually.
// This usually tells that calculation can't be done with given inputs
console.log(Number.NaN) // NaN
console.log('a'/ 2) // NaN, a tring devide by 2 is not a number

// "-Infinity" represent the negative infinity number
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(-1 / 0) // -Infinity, -1 divide by 0 result -Infinity

// "Infinity" represent the positive infinity number
console.log(Number.POSITIVE_INFINITY) // -Infinity
console.log(1 / 0) // Infinity, 1 divide by 0 result Infinity


// convert string to integer number
// parseInt() and Number.parseInt() are the identical and global
let str = '3';
let num = parseInt(str);
let num4 = Number.parseFloat

console.log('str:', typeof str);
console.log('num:', typeof num);
console.log('num4:', typeof num4);

let str2 = '3.456';
let num5 = parseFloat(str2);
let num6 = Number.parseFloat(str2);
console.log('str2:', typeof str2);
console.log('num5:', typeof num5);
console.log('num6:', typeof num6);



console.log("III  PPPP  0000");
console.log(" I   P  P  0  0");
console.log(" I   PPPP  0  0");
console.log(" I   P     0  0");
console.log(" I   P     0  0");
console.log("III  P     0000");
