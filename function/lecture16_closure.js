// What is closure?

function createCounter() { // outer function
    let count = 0 // closure data, is "remember" and "can be used" by inner function
    return { // an object with 3 methods is returned
      increase: () => count = count + 1, // inner function
      decrease: () => count = count - 1, // inner function
      print: () => console.log(count), // inner function
    }
  }
  
  const counter = createCounter()
  
  counter.print() // 0
  counter.increase()
  counter.print() // 1
  counter.decrease()
  counter.decrease()
  counter.print() // -1

  // setTimeout()to run a function after specified time

const printAfter500ms = () => {
    console.log('this message is printed after 500 ms')
  }
  
  setTimeout(printAfter500ms, 500)
  setTimeout(() => console.log('this message is printed after 100 ms'), 100)
  
  // this message is printed after 100 ms
  // this message is printed after 500 ms


// Javascript closure example: delay calling a function

const TOP_BOTTOM = 'TOP_BOTTOM'
const LABEL = 'FIRST_CALL'

console.time(TOP_BOTTOM) // timer TOP_BOTTOM start
console.time(LABEL) // timer FIRST_CALL start 

const createGetSuggestion = () => { // outer function
  let ok = false // closure data, true for go fetch suggestion data
  let pending = false // closure data
  let keyword = '' // closure data

  const get = (word) => { // inner function
    keyword = word
    if(ok) {
      console.log(`now get suggestions with keyword '${keyword}`) // make call to server and get suggestion
      console.timeEnd(LABEL); // timer FIRST_CALL end
      pending = false
      ok = false
    } else {
      console.log('please wait')
      if(!pending) {
        pending = true
        setTimeout(() => {
          ok = true
          get(keyword)
        }, 1000); // timeout in 1 second
      }
    }
  }

  return get // inner function returned
}

const getSuggestion = createGetSuggestion()

// each keystroke will call "getSuggestion()" once
getSuggestion('i') // please wait (1st keystroke)
getSuggestion('ir') // please wait (2nd keystroke)
getSuggestion('iro') // please wait (3rd keystroke)
getSuggestion('iron') // please wait (4th keystroke)
getSuggestion('iron ') // please wait (5th keystroke)
getSuggestion('iron m') // please wait (6th keystroke)
console.timeEnd(TOP_BOTTOM); // TOP_BOTTOM: 6.192ms
// now get suggestions with keyword 'iron m'
// FIRST_CALL: 1008.117ms


// Javascript closure example: memoization

const createGetCodeAndCache = () => { // outer function
  const cache = {} // closure data

  const get = (input) => { // inner function
    console.log(cache) // print cache before each run
    if(cache[input]) { // use cache if available
      console.log('cached output')
      return cache[input]
    } else { // compute if no cache available
      console.log('new input')
      const result = input.charCodeAt(0)
      cache[input] = result // put data to cache
      return result
    }
  }

  return get
}

const getCodeAndCache = createGetCodeAndCache()

console.log(getCodeAndCache('a'))
// {}, empty cache
// new input
// 97

console.log(getCodeAndCache('b'))
// { a: 97 }, cached 'a'
// new input
// 98

console.log(getCodeAndCache('a')) // "seen" input
// { a: 97, b: 98 }, cached 'a' and 'b'
// cached output
// 97