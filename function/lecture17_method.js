//promise
/*
    - sync : dong bo
    - async: bat dong bo
    - pain 
    - ly thuyet, cach hoat dong
    - thuc hanh, vi du
*/

// SYNC / ASYNC

/* (ASYNC) : setTimeout, setInterval, fetch, 
XML HttpRequest, read file, request animation frame
*/

// Callback => xử lại tất cả các bất đồng bộ
//sleep
setTimeout(function()  {
    console.log(1);
},1000);

console.log(2);


// qs1 : số nào đc in ra trước 
// qs2: ? vấn đề: theo tư duy đồng bộ thì số nào in ra trước/ ra sau mới đúng

// theo tư duy đồng bộ thì (1) in ra trước còn (2) in ra sau cho dù (1) nằm trong set time out 
//nhưng th này nó là ASYNC bất động bộ khi (2) đc in ra trc (1)

// PAIN
// Callback hell
// Pyramid of doom
// example:

setTimeout(function(){
    console.log(1) // viec 1
    setTimeout(function(){
        console.log(2);  // viec 2
        setTimeout(function(){
            console.log(3) // viec 3
            setTimeout(function(){
                console.log(4);  // viec 4
            }, 1000)
        }, 1000)
    }, 1000)
    
}, 1000)

//CONCEPT

//B1: khoi tao Promise
//B2: Excutor
/*
    trong excuter phai goi 1 trong 2 thang resolve/ reject
    neu k => bi memory leak
*/

// 3 trang thai:
/*
    1. pending
    2. fulfilled
    3.  
*/

var promise = new Promise( 
    // Excutor
    function(resolve, reject) {  // tham so trong fuction  luon co 2 cai "resolve" & "reject"
        //logic
        // if logic success -> resolve
        // if logic fail -> reject
        //resolve();
        //reject();

        //fake call API
        resolve([
            {
                id: 1,
                name: 'javascript',
            }
        ])
    }
);

promise
    .then(function(courses) { // tinh tu khi promise(resolve) dc thuc thi thi "sau do"(then) no lot vao day
        console.log(courses);
    })
    .catch(function() {// tinh tu khi promise(reject) bi tu choi thif "bat loi"(catch) no lot vao day
        console.log('Fail!');
    })
    .finally(function() { // 1 trong 2 thang resolve/reject dc goi thi thang finaly cung dc goi
        console.log('Done!');
    })


    /* Khái niệm:
     - promise là 1 cái khái niệm sinh ra để mà xử lý
    các thao tác ASYNC(thao tác bất đồng bộ) trước khi có promise
    ta dùng CALLBACK nhưng callback có 1 vấn đề là callback HELL
    nó bị xâu vào rất là khó nhìn code như rác => promise được đẻ ra ở ES6
    chúng ta dùng nó dể code dễ đọc hơn
    -  Để tạo ra promise:
        + sử dung key new với promise : var promise = new Promise( 
        + ở trong constructor của nó phải có Excutor function
        + trong Excutor Function phải có 2 tham số( Resolve/ Reject)
            gọi resolve khi thao tác thành công / thất bị gọi reject
        + Khi sử dụng promise: sử dụng qua các method:
         .then() - > r
         .catch()
         .finally()


    */

// chain: chuỗi

var promise1 = new Promise( 
    function(resolve, reject) {
        resolve();
    }
);

promise1
    .then(function() { 
       // console.log(1);
       // return 1; // nếu return 1 ở đây thì 1 này sẽ đc đẩy sang cái then tiếp theo dưới dạng tham số data
        // nếu ở đây k return gì cả thì thứ đc đẩy sang là "undefined"

        // th nếu return 1 promise

        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve ([1,2,3]);
            }, 3000); // suy ra nếu m nghĩ theo hướng thông thường thì nó sẽ chờ 3 s mới in ra
            // và trong lúc đó các then sau sẽ in ra giá trị trước NHƯNG KHÔNG
            // nếu return về 1 promise thì promise này phải chạy xong đã thì các then sau mới chạy 
            //(này gọi là tính chất chuỗi ( chain )
        })
    })
    .then(function(data) { 
        console.log(data);//1
        return 2;
    })
    .then(function(data) { 
        console.log(data);//2
        return 3;
    })
    .then(function(data) { 
        console.log(data);//3
    })
    .catch(function() {
        console.log('Fail!');
    })
    .finally(function() { 
        console.log('Done!');
    })

  

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
    
}
sleep(1000)
    .then(function() {
        console.log('sau 1s:');
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('co loi'); // sau khi  in cái này thì gặp lỗi  ngay lỗi (in prmoise)
            // => nhận xét : nếu giữa đường mà gặp lỗi thì k in ra các promise còn lại
            // xem lại lý thuyết => khi gặp reject nó sẽ nhảy vào catch()
        });
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    });


//promise.resovle / promise.reject / promise.all
// example 1 cai promise thong thuong
var promise = new Promise(function(resolve, reject) {
    //resolve('Succes!');
    reject('Error!');
});

promise
    .then(function(result) {
        console.log('result', result)
    })
    .catch(function(err) {
        console.log('error:', err)
    })

    // => có đc cách tạo nhanh resolve

var promise = Promise.resolve('Success!'); //luon luon tra ve o trang thai thanh con

promise
    .then(function(result) {
        console.log('result', result)
    })
    .catch(function(err) { // suy ra ở đây sẽ không bao giờ nhảy vào catch
        // trừ khi ở then mình return về một promise mà nó reject
        console.log('error:', err)
    })

    //tương tự ta cũng có "var promise = Promise.reject('Error!')";


//Promise.all() chạy các promise song song

var promise1 = new Promise (
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
)
var promise2 = new Promise (
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
)
var promise3 = Promise.reject('Co loi');
  

// nx: nếu để chạy tuần tự thì nó sẽ nối đuôi nhau mất 7s cuộc đời
// mình thấy rằng 2 thằng này không phụ thuộc nhau thì mình có k nên chạy nối đuôi nhau

// -> giải pháp : .all()
Promise.all([promise1, promise2])
    .then(function(result) { // sau khi tất cả promise1 2 done thì mới chạy then (th này là 5s)
        console.log(result); // sau 5s trả về mảng " [ [ 1 ], [ 2, 3 ] ] "
        var res1 = result[0];
        var res2 =result[1];
        // ở đây mình cũng có thể trích xuất từng phần tử ra đc
       console.log(res1.concat(res2)); // nối 2 mảng lại " [ 1, 2, 3 ] "
    })


// th nếu trong .all () một cái Resolve một cái Reject()

Promise.all([promise1, promise3])
    .then(function([result1, result3]) {
        console.log(result1.concat(result3));
    })
    