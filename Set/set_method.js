

// Ways to create a set

const set1 = new Set()// wihout initial value
console.log(set1)// Set {}, empty set
const set2 = new Set([1,2,3, 'a', []])// with some initial values
console.log(set2) // Set { 1, 2, 3, 'a', []}

// Get the count of values in Set, property size
console.log(set1.size) // 0, set is empty
console.log(set2.size) // 5

// Add value to Set, method add
const set3 = new Set()
console.log(set3.add(1)) // Set { 1 }
console.log(set3.add(2)) // Set { 1, 2 }

// Check if a value in Set, method has
const set4 = new Set([1,2,'a','b',[], [4]])
console.log(set4.has(1)) // true
console.log(set4.has('b')) // true
console.log(set4.has([])) // false, set does not recognize empty array []
console.log(set4.has([4])) // false, set does not recognize array [4]

// Delete a value in Set, method delete
const set5 = new Set([1,2,'a','b',[], [4]])
console.log(set5.delete(1)) // true
console.log(set5.delete(3)) // false
console.log(set5) // Set { 2, 'a', 'b', [], [ 4 ] }


// Remove all values in Set, method clear
const set6 = new Set([1,2,'a','b',[], [4]])
console.log(set6.clear()) // undefined
console.log(set6) // Set {}

// Loop through all values in Set, method forEach
const set8 = new Set([1,2,'a','b',[], [4]])
const additionalArg = 'hello' // an variable we want to include in loop logic
set8.forEach((value1, value2, originalSet) => {
  console.log(`value1: ${value1}, value2: ${value2}, additionalArg: ${additionalArg}`)
}, additionalArg)
// 6 output on console for set size 6
// value1: 1, value2: 1, additionalArg: hello
// value1: 2, value2: 2, additionalArg: hello
// value1: a, value2: a, additionalArg: hello
// value1: b, value2: b, additionalArg: hello
// value1: , value2: , additionalArg: hello
// value1: 4, value2: 4, additionalArg: hello
console.log(set8) // Set { 1, 2, 'a', 'b', [], [ 4 ] }, original set NOT modified


// both myVar1 and myVar2 has no value
let myVar1 = null
let myVar2
console.log(myVar1) // null, I intentionally put it as null
console.log(myVar2) // undefined, system default

const myFunction = () => { } // a empty function, returns nothing
console.log(myFunction()) // undefined, default returned value of function does not return anything

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('a')) // true
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

console.log(Boolean(![].length)) // true, empty array
console.log(Boolean([])) // true, empty array, but logic is wrong! DO NOT USE
console.log(Boolean([1,2])) // true, array not empty, DO NOT USE

console.log(Boolean(!Object.keys({}).length)) // true, empty object
console.log(Boolean({})) // true, empty object, but logic is wrong! DO NOT USE
console.log(Boolean({'a': 1})) // true, object not empty, DO NOT USE

// logical operator
console.log(1 > 2) // false
console.log(1 < 2) // true

const myBool1 = true // no "quote" needed
const myBool2 = false // no "quote" needed
console.log(myBool1) // true
console.log(myBool2) // false