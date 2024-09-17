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
var i = 0;
while ( i < 10) {
    i++;
    console.log(i);
}
var myArr  = [ 
    'JavaScript',
    'php',
    'van thinh',
];

var i=0;
while ( i < myArr.length){
    console.log(myArr[i]);
    i++;
}

//do_while  loop
var i = 0;
do {
    i++;
    console.log(i);

}while (i < 10);

var i = 0;
do {
    i++;
    console.log(i);

}while (i < 0); // sẽ chạy tối thiểu một lần


//break/ continue in loop
for( var i= 0; i< 10; i++) {
    console.log(i);
    if(i >=5 ) break; // gặp 5 thì thoát vòng lặp
}

for( var i= 0; i< 10; i++) {
    if( i%2 != 0) {
        continue; // nếu gặp số lẻ thì vòng lặp tiếp tục ngay taị đây
        // bỏ qua các lệnh ở dưới.
    }
    console.log(i);
    
}

//nested loop : vòng lặp lòng nhau

var myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
]
for( var i=0;  i<myArr.length; i++) {
    console.log(myArr[i]);
}
for( var i=0;  i<myArr.length; i++) {
    for(var j=0; j<myArr.length; j++) {
        console.log(myArr[i][j]);
    }
    console.log(myArr[i]);
}

//more exaple
for( var i= 5; i > 0 ; i--) {
    console.log(i);
}
for( var i= 5; i < 20 ; i+=5) {
    console.log(i);
}


