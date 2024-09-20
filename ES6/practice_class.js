// this is a blueprint
function Course(name, price) {
    this.name = name; // 
    this.price = price;

    this.getName = function() {
        return this.name;
    }
    
    const isSuccess = false;
}
const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);

console.log('***************************');
// => class

class Course1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        const isSuccess =true;
    }
   
}
const phpCourse1 = new Course1('PHP', 1000);
const jsCourse1 = new Course1('javascript', 1200);

console.log(phpCourse1);
console.log(jsCourse1);
