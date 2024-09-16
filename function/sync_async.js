// synchronous function
// next line of code executed after previous one finished
console.log('1st line')
let name = 'Tony Stark'
function greet(name) {
  console.log('Hello ' + name + '!')
}
greet(name)
console.log('last line')

// 1st line
// Hello Tony Stark!
// last line

// asynchronous function

console.log('1st line') // 1st line
const username = 'username'
const password = 'password'

function login(username, password) {
  setTimeout(() => {
    console.log('login success with credentials:', username, password)
  }, 1500) // we emulate login result returns after 1.5 second
}

login(username, password)
console.log('last line')

// 1st line
// last line (does not wait for function login() to finish)
// login success with credentials: username password

