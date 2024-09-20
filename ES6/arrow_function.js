function logger(log) {  
    console.log(log);
}

logger('message...');

// arrow function

const logger1 = (log) => {
    console.log(log);
}

logger1('message...');

//ex:
const sum = (a,b) => {
    return a+b;
}
console.log(sum(2,2));//4
//short hand
const sum1 = (a,b) => a+b;
console.log(sum1(2,3)); //5;

// qs is  return object?

const sum2 = (a,b) => {
    return {
        a: a,
        b: b,
    }
}

console.log(sum2(2,2)); //{ a: 2, b: 2 }
// short hand

const sum3 = (a,b) => ({a: a, b: b}) 
// Note: if after "=>" is "{" it will be a block code not return
// so we add "(" befor "{" we can resolve it

console.log(sum3(2,3));

//ex2:
const course = {
    name : 'js basic',
    getname: function() {
        return this.name; // context
    }
}
/*
so the different here is arrow function doesn't have context
if we fix line 45 ->
() => {
    return this.name;
    }
it will return undefined
*/

console.log(course.getname()); // js basic


//qs is return contructor
const Course = function(name, price) {
    this.name = name;
    this.price =price;
}

const jsCourse = new Course('js', 400);
console.log(jsCourse);

/* if:
const Course = (name, price) => {
    this.name = name;
    this.price =price;
}

const jsCourse = new Course('js', 400);
console.log(jsCourse);
*/
// it will go error : course is not a constructor
