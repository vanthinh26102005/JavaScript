
//1.parameter
//definition?
function writeLog(message) {
    console.log(message);
}
writeLog('Test message');
//data type
function writeLog1(message) {
    console.log(typeof message);
}

writeLog1('Test message');

//Private

// console.log(message); //error we can't call parameter out of function

//1 or more parameter
function writeLog3(message, message2) {
    console.log(message);
    console.log(message2);
}
writeLog3('test', 'test_2');


//Argument
function writeLog4() {
    console.log(arguments);
}
writeLog4('log1', 'log2', 'log3');

//vong lap for of
function writeLog5() {
    for (var param of arguments) {
        console.log(param);
    }
}
writeLog5('log 1', 'log 2', 'log 3');
 

function writeLog6() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog6('log 1', 'log 2', 'log 3');