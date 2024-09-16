/*
Vòng lặp - Loop t

1. for - Lặp với điều kiện đúng

2. for/in - Lặp qua key của đối tượng

3. for/of - Lặp qua value của đối tượng

4. while - Lặp khi điều kiện đúng

5. do/while - Lặp ít nhất 1 lần, sau đó

lặp khi điều kiện đúng
*/

//for loop
for (var i=1; i<10; i++) {
    //code
    console.log(i);
}

// for/in loop

var myInfo = {
    name :'van thinh',
    age : 18,
    adress: 'VN',
}
for( var key in myInfo) {
    console.log(key);
}
for( var key in myInfo) {
    console.log(myInfo[key]);
}


// for/of loop 
// CAN NOT use for object
var myInfo = [
    'van thinh',
    18,
    'VN',
]
for( var key of myInfo) {
    console.log(key);
}

// hot to use loop "for" for object
var myInfo = {
    name :'van thinh',
    age : 18,
    adress: 'VN',
}
console.log(Object.values(myInfo));
for( var key of Object.keys(myInfo)) {
    console.log(myInfo[key]);
}

//while