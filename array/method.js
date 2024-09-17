/*
    Array method
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

var courses = [
    {
       id: 1,
       name: 'javascript',
       coin: 250, 
    },
    {
        id: 2,
        name: 'html, css',
        coin: 0, 
     },
     {
        id: 3,
        name: 'ruby',
        coin: 0, 
     },
     {
        id: 4,
        name: 'php',
        coin: 0, 
     },
     {
        id: 5,
        name: 'reactJS',
        coin: 500, 
     },
     {
        id: 6,
        name: 'ruby',
        coin: 0, 
     }

]

//forReach()
courses.forEach(function (course, index) { // forReach trả lại 2 tham số 
    // thứ I: các phần tử trong mảng
    // thứ II: chỉ số các phần tử đó
    console.log(index, course);
});

// every()
var isFree = courses.every(function (course, index) { // hữu ích để kiểm tra tất cả các
    // phần tử thuộc một mảng phải thoả mãn điều kiện gì đó
    //every trả về boolean
    console.log(index); //0 tức là mới duyệt qua phần tử đầu tiên nma k thoả mãn điều kiện nên đừng luôn
    return course.coin === 0; // điều kiện
   // console.log(index, courses)
})  
console.log(isFree); // false
// vì nếu có 1 khoá học k miễn phí thì sẽ return false lun;
// true <=> all đều miễn phí


//some()
var isFree = courses.some(function(course, index) {
    console.log(index); // 1 ->duyệt qua ptu thứ 2 ở index 1 thì nó true
    // dừn tại đây lun
    return course.coin ===0; // some khác every ở chỗ chỉ cần 1 phần tử
    // thoả mãn điều kiện thì return true luôn
})
console.log(isFree);

//find
var isFree = courses.find(function(course, index) {
    return course.name === 'ruby' // in ra { id: 3, name: 'ruby', coin: 0 }
    // nếu tìm thấy còn không thì in ra undefined
    // chỉ tìm 1 lần duy nhất tìm ra dừng luôn
    // nghĩa là nếu có thêm 1 'ruby' ở cuôi thì nó sẽ k tbt =>>> filter()
})

console.log(isFree);

// filter
var isFree = courses.filter(function(course, index) {
    return course.name === 'ruby'; // trả về tất cả các trường hợp thoã mãn
})
console.log(isFree);

// map()
function courseHandler(course, index) {
    console.log(course)
   // return course // (**); // nếu return như này thì in ra mảng courses luun
   return {
    id: course.id,
    name: `Khoá học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
    index: index,
   }
;}
var newCourses = courses.map(courseHandler
    //map nó sẽ return về mảng mới
//có số lượng ptu có giá trị của mảng cũ
//ở bên trong thằng map phải có đối sô truyền vào () nếu k sẽ gặp lỗi
// cơ chế : map sẽ duyệt qua tất cả các phần tử trong mảng
//nó sẽ gọi lại cái funtion mà ta đã truyền qua đối số của thằng map()
) 

 //console.log(newCourses); // kiểm tra => newCourse sẽ trả về đủ 7 phần tử có giá trị
 //[ undefined, undefined, undefined, undefined, undefined, undefined ] ** nhưng nó toàn undefined
 // lý do là thằng function mà mình truyền vào trong map nó đang trả về cái gì thì nó lấy cái đó làm cái element
 // th này nó k return về gì cả  thì nó sẽ ra undefine
 // giả sử mình sẽ cho nó return lại chính cái 'course' (**)
 console.log(newCourses);