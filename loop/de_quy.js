//example
var array =['a', 'b', 'c', 'a', 'b', 'c'];
console.log(new Set(array));

console.log([...new Set(array)]); // ES6 gỉai từ set sang array

// nếu k dùng hàm thì sao => sử dụng đệ quy
// xác định điểm dừng
// logic handle  => tạo ra điểm dừng

//ex:
function countDown(num) {
    if(num >= 0) {
        console.log(num);
        return countDown(num-1);
    } 
    return num;
}
countDown(5);
//ex2: arr
function loop(start, end, cb) {
    if(start < end) {
        cb(start); 
        return loop(start +1, end, cb);
    }


}

var arr = ['js', 'php', 'rust'];
loop(0, arr.length - 1, function(index){
    console.log('index:', index);
    console.log(arr[index]);
})

//giai thua

function giaithua(num) {
    var output = 1;
    for(var i= num; i>0; i--){
        output = output*i;
    }
    return output
}
console.log(giaithua(5));

// => bieen thanh de quy

function giaithua_dequy(number) {
    if( number >= 0) {
        return number * giaithua(number -1);
    }
    return 1;
}

console.log(giaithua_dequy(5));
