//callback
//1. is a function
//2. passed by argument

function myFunction(param) {
    param('study');
}
function myCallback(value) {
    console.log('value: ', value);
}
// myFunction(myCallback);

myFunction(myCallback);

//build map
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    for(var i=0; i < arrayLength ;i++) {
        callback(this[i], i);
    }
}
var course = [
    'javascript',
    'php',
    'ruby',
];
course.map(function(course) {
    console.log(course);
})
course.map2(function(course, index) {
    console.log(index, course)
})


console.log('*************')
//build forEach
//Object prototype
Array.prototype.forEach2 = function(callback) {
    for(var index in this) {// for in => browse the entire protocol (*)
        if(this.hasOwnProperty(index)) {// because (*) -> use this to  print withou protocol method
         callback(this[index], index, this );
         /* 
            javascript 0 [ 'javascript', 'php', 'ruby', <997 empty items> ]
            php 1 [ 'javascript', 'php', 'ruby', <997 empty items> ]
            ruby 2 [ 'javascript', 'php', 'ruby', <997 empty items> ]
         */
        }
    }
}
var courses =  [
    'javascript',
    'php',
    'ruby',

];
courses.length = 1000;
courses.forEach(function(course, index, array) {
    console.log(course, index, array)
})
// Output: 
/*
javascript 0 [ 'javascript', 'php', 'ruby', <997 empty items> ]
php 1 [ 'javascript', 'php', 'ruby', <997 empty items> ]
ruby 2 [ 'javascript', 'php', 'ruby', <997 empty items> ]
*/
// note: +forEach do not return
//      + do note care lengt

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})
/* OUTpuT: if use ' console.log('index' index)' on line 41
index: 0
index: 1
index: 2
index: map2
index: forEach2
*/


console.log('*************')
//build filter
Array.prototype.filter2 = function(callback) {
    var output =[]
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            var res = callback(this[index], index, this);
            if(res) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
    {
        name: 'js',
        coin: 680,
    },
     {
        name: 'php', 
        coin: 850,
    },
    {
        name: 'ruby',
        coin: 980,
    }
]

var filterCourse = courses.filter(function(course, index, array){
    return course.coin > 700;
})
console.log(filterCourse);// [ { name: 'php', coin: 850 }, { name: 'ruby', coin: 980 } ]
//* note it will not loop empty arr
var filterCourse2 = courses.filter2(function(course, index, array){
    return course.coin > 700;
})
console.log(filterCourse2); //undefine because filte doesn'  return
//but add line 86 -89
/* OUPUT:
[ { name: 'php', coin: 850 }, { name: 'ruby', coin: 980 } ]
*/


console.log('*************')
// build some

// return true/false;
// check that if one element satisfy the condition

Array.prototype.some2 = function(callback) {
    for( var index in this) {
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            };
        }
    }
    return false;
}
var courses = [
    {
        name: 'js',
        coin: 680,
        isFinish: true,
    },
     {
        name: 'php', 
        coin: 850,
        isFinish: false,

    },
    {
        name: 'ruby',
        coin: 980,
        isFinish: false,

    }
]

var res = courses.some(function( course, index, arr) {
    return course.isFinish;
});
console.log( res); // true; because at least true => all true;

var res2 = courses.some2(function( course, index, arr) {
    return course.isFinish;
});
console.log(res2);// true; add 133- 139


console.log('*************')
//build every
// like some but if there at least wrong = >all wrong
