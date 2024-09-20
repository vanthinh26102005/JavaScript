// 3 things that enhance object does:
//1. Define key: value for object
//2. Define: method for object
//3. Define key for object under variable

var name = 'javasccript';
var price = 1000;

var Course = {
    name: name, // if key and value are equal then enhance will help
    price: price,
}
console.log(Course);

//after use enhance object
var Course1 = {
    name,
    price,
    getName () {
        return name;
    }
};



var fieldName = name;
var fieldPrice = price;

const Course3 = {
    [fieldName]: 'javaScript',
    [fieldPrice]: 1000,
}
console.log(course);
