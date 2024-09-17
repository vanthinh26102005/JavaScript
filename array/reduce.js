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
var totalCoin = 0; // biến lưu trữ
for( var course of courses) {// lặp qua các phần tử
    totalCoin += course.coin;// thực hiện việc lưu trữ
}
console.log(totalCoin);
//reduce cũng tương tự form này nhưng simple hơn

var i =0;
function coinHandler(accumalator, currentValue, curentIndex, originArray) { //acc là biến lưu trữ
    i++;

    console.table({
        'Lượt chạy: ' : i,
        'Biến tích trữ: ' :accumalator,
    });
    /* 1 2 3 4 5 output 5 lần => thằng reduce cho hàm chạy 5 lần*/
    return accumalator + currentValue.coin;
   
}
var totalCoin = courses.reduce(coinHandler, 0); // bắt buộc 2 đối số 1 là function, 2 là initial Value (gtri khởi tạo)
 // biến lưu trữ trường hợp này initialvalue =0 vì vai trò bây h như "var totalCoin = 0; // biến lưu trữ"
 // nếuk không có initval thì nó sẽ trả về phần tử đầu tiên của mảng

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
    return course.concat(topic.course);
}, [])
console.log(newCourses);

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(arr) {
      var list = arr.filter(function(movie){
        return movie.Director === "Christopher Nolan";
      })
      var total = list.reduce((a,b) => a +b.imdbRating,0);
      console.log(list.length);
      console.log(total);
      var avg = total/(list.length);

      return avg;
  }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
  
  
  
  
  
  