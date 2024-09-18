var courses = [
    {
       id: 1,
       name: 'javascript',
       coin: 100, 
    },
    {
        id: 2,
        name: 'html, css',
        coin: 200, 
     },
     {
        id: 3,
        name: 'ruby',
        coin: 220, 
     },
     {
        id: 4,
        name: 'php',
        coin: 200, 
     },
     {
        id: 5,
        name: 'reactJS',
        coin: 480, 
     }
  
]

// example
var totalCoin = 0; // storage variable
for( var course of courses) {// loop through elements
    totalCoin += course.coin;// perform storage
}
console.log(totalCoin);
//reduce is similar to this form but simpler

var i =0;
function coinHandler(accumalator, currentValue, curentIndex, originArray) { //acc is the storage variable
    i++;

    console.table({
        'Lượt chạy: ' : i,
        'Biến tích trữ: ' :accumalator,
    });
    /* 1 2 3 4 5 output 5 times => reduce function runs 5 times*/
    return accumalator + currentValue.coin;
   
}
var totalCoin = courses.reduce(coinHandler, 0); // 2 arguments required 1 is function, 2 is initial Value (initialization gtri)
// storage variable in this case initialvalue =0 because the role now is like "var totalCoin = 0; // storage variable"
// if there is no initval then it will return the first element of the array

var totalCoin2 = courses.reduce((a,b) => a+b.coin, 0);
console.log(totalCoin);
console.log(totalCoin2);

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(arr) {
    var res = arr.reduce((a,b) => a+b.gold, 0);
    return res;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23


// FLAT - làm phẳng mảng từ depth array - mảng sâu
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []) // initialValue ở đây là một mảng trốn
console.log(flatArray);


// lấy ra các languages đưa vào mảng mới
var topics = [
    {
        topic: "Front-end",
        course: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JAVASCRIPT",
            }
        ]
    },
    {
        topic: "Back-end",
        course: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "Nodejs",
            }
        ]
    }
]

var newCourses = topics.reduce(function(course, topic) {
    console.log(course);
    console.log(topic);
    return course.concat(topic.course);
}, [])
console.log(newCourses);

