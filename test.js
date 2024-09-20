function print({ a: val1 = 1, b: val2 = {}, c: val3 = false } = {}) {
    console.log(val1)
    console.log(val2)
    console.log(val3)
  }

//Call with undefined:
  print(undefined)
  // Output:
  // 1
  // {}
  // false

//Call with no arguments:
  print()
// Output:
// 1
// {}
// false

//Call with a valid object:
print({ a: 3, b: { d: 'f'}, c: true })
// Output:
// 3
// { d: 'f' }
// true