// Regex built-in matching method: test
const regex3 = /always/
const regex4 = /never/
// str1 = `It's always sunny in Sunnyvale.`
console.log(regex3.test(str1)) // true
console.log(regex4.test(str1)) // false