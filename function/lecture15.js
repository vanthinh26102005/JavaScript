// Function is a "first-class" citizen in Javascript

// Assign a function to a variable
const myFunc = () => {
    console.log('running statements in myFunc!')
  }
  myFunc() // running statements in myFunc!

  // Pass a function as an Argument
  const func1 = () => console.log('running func1')
  const func2 = (func1) => {
    func1()
    console.log('running func2')
  }
  func2(func1)
  // running func1
  // running func2
  
  // Return a function
  const func3 = () => console.log('running func3')
  const func4 = () => {
    console.log('running func4')
    return func3
  }
  const a = func4() // running func4
  a() // running func3



  // Object function used to create object blueprint
function MySpecialDataStucture() {
    console.log('running blueprint')
    this.property1 = '123'
    this.method1 = function() {
      console.log('running method 1')
    }
  }
  const specialDs = new MySpecialDataStucture() // running blueprint
  console.log(specialDs) // MySpecialDataStucture { property1: '123', method1: [Function] }
  console.log(specialDs.property1) // 123
  specialDs.method1() // running method 1


  // this keyword called within an object function refers itself
function MySpecialDataStucture() {
    console.log(this) // MySpecialDataStucture {}
    this.property1 = '123'
    console.log(this.property1) // 123
    this.method1 = function() {
      console.log('running method 1')
    }
    console.log(this) // MySpecialDataStucture { property1: '123', method1: [Function] }
  }
  const specialVariable1 = new MySpecialDataStucture()
  
  // specialVariable1 is created based on a "MySpecialDataStucture" blueprint
  // so it has everything defined in the blueprint
  console.log(specialVariable1) // MySpecialDataStucture { property1: '123', method1: [Function] }
  
  
  // we can create as many new object based on this blue print as wanted
  const specialVariable2 = new MySpecialDataStucture()
  console.log(specialVariable2) // MySpecialDataStucture { property1: '123', method1: [Function] }
  
  
  
  
  // DO NOT USE IN PRODUCTION - FOR LEARNING PURPOSE ONLY
  // this way of usage exposes a high security threat
  // we can call "this" keyword here. it will represent this file
  console.log(this) // {}, this file currently has no property nor method
  
  // we can always add property and method for this file
  this.property = 456
  this.method = () => {
    console.log(`running a method from this_keyword.js`)
  }
  // and call them right here
  console.log(this.property) // 456
  this.method() // running a method from this_keyword.js


  // define an object blueprint "MyCustomDataStructure"
function MyCustomDataStructure() {
    this.property1 = 123
    this.property2 = 'abc'
    this.method1 = () => {
      console.log('running method1')
    }
    this.method2 = () => {
      console.log('running method2')
    }
  }
  
  // you can create as many object based on blueprint as wanted
  const customDs1 = new MyCustomDataStructure()
  const customDs2 = new MyCustomDataStructure()
  
  // they have the same property(ies) and method(s)
  console.log(customDs1)
  // MyCustomDataStructure {
  //   property1: 123,
  //   property2: 'abc',
  //   method1: [Function],
  //   method2: [Function]
  // }
  console.log(customDs2)
  // MyCustomDataStructure {
  //   property1: 123,
  //   property2: 'abc',
  //   method1: [Function],
  //   method2: [Function]
  // }


  // Arrow => in arrow function

// no statement block {} means return the value after arrow
const func10 = () => 'b'
console.log(func10()) // b

// Self invoking function, declare and run function right away

// we can replace this
function myFunc1 () {
    console.log('running myFunc1...')
  }
  myFunc1() // running myFunc1...
  
  
  // with this self invoking "object" function
  // notice the semi-colon ";", because we are not using it at every line end,
  // we need to put it in front of any self-invoking function
  ;(function myFunc2() {
    console.log('running myFunc2...')
  })() // running myFunc2...
  
  
  // with this self invoking "arrow" function
    ;(() => console.log('running myFunc3...'))() // running myFunc3...
  /* ^                                       ^^^
     |                                       |||
     |                                       | - pair of open-close
     |                                       |   parenthesis means "invoke"
     |                                       |
     -----------------------------------------
                       |
              wrap declaration in parenthesises ()
*/


// Two variable scopes: global scope and function scope

// global scope variable example
const str = 'Hello' // "str" can be used anywhere hence "global scope"

function greet(name) {
  console.log(str + ' ' + name) // note that "str" is used here
}
greet('Mr. Stark') // "Hello Mr. Stark"



// function scope variable example

const greet2 = (name) => {
  const str2 = 'hello' // "str2" only available to use in "greet2" function
  console.log(str2 + ' ' + name)
}
greet2('Captain America') // "hello Captain America"


// print out global scope "str" ok
console.log(str) // Hello

// un-comment to see error
// str2 only known to function greet2
// so it will give an error if we try to access it here

// console.log(str2) // ReferenceError: str2 is not defined


// Bind given variable to function's "this", method bind()

const obj = { // we will pass this "obj" to "this"
    prop1: 'hello',
    method1: () => console.log('running method 1'),
  }
  
  function myFunc() {
    console.log('running myFunc')
    console.log(this) // "this" will be "obj" after bind()
  }
  
  const myFunc2 = myFunc.bind(obj) // myFunc2's "this" is now "obj"
  
  myFunc2()
  // running myFunc


  //bind()

  //function.bind(variable);