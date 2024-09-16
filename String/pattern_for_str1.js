// Pattern matching for string
// in this example
// the string to to look for the pattern is: `It's always sunny in Sunnyvale`
// the pattern is `sunny*.+`
// `sunny*.+` means `sunny` and whatever comes after it
// `replace` method will replace the found part with given replacement
// '***': is the replacement
let sentence = `It's always sunny in Sunnyvale`
console.log(sentence.replace(/sunny*.+/, '***')) // It's always ***
console.log(sentence.replace('always', '_never_')) // It's _never_ sunny in Sunnyvale


// Creating a pattern (a regular expression object)
// two ways of creation, identical results
// 'pattern' is `sunny*.+`
// 'modifiers', is 'g'
// regex1 and regex2 are Regular Expression in Javascript
let regex1 = /sunny*.+/g
let regex2 = new RegExp('sunny*.+', 'g') // we will talk more about this syntax later
console.log('regex1:', regex1) // regex1: /sunny*.+/g
console.log('regex2:', regex2) // regex2: /sunny*.+/g

// Modifiers in Regular Expression
// 'pattern' is `sunny`
// 'modifiers' are 'gi', both `global` and `case-insensitive` are applied
console.log(sentence.replace(/sunny/gi, '***')) // It's always *** in ***vale
console.log(sentence.replace(/sunny/gi, '***'))


const regexLiteral = /sunny*.+/g;
const text = "abc It's sunny in VietNam, A but not always so sunny.";
const matches = text.match(regexLiteral);


console.log(matches); // Output: ["sunny in VietNam, but not always so sunny"]

// Modifiers in Regular Expression
// 'pattern' is `sunny`
// 'modifiers' are 'gi', both `global` and `case-insensitive` are applied
console.log(sentence.replace(/sunny/gi, '***')) // It's always *** in ***vale

// Create pattern with character classes
// `.` can match any character, we can use it as many times as needed
console.log(sentence.replace(/sunny./, '***')) // It's always ***in Sunnyvale
console.log(sentence.replace(/sunny.../, '***')) // It's always *** Sunnyvale

// `\d` can match one any digit
console.log('1917 is a movie about war'.replace(/\d/, '***')) // ***917 is a movie about war

// `\D` can match one any non-digit
console.log('1917 is a movie about war'.replace(/\D/, '***')) // 1917***is a movie about war

// Create pattern with position specifiers
let str = 'hello, look at you!'

// '\b' match at word starts
console.log(str.replace(/\blo/, '**')) // hello, **ok at you!

// '\b' match at the end of word
console.log(str.replace(/lo\b/, '**')) // hel**, look at you!

// `\B` NOT match at the beginning of the word
console.log(str.replace(/\Blo/, '**')) // hel**, look at you!

// `\B` NOT match at the end of the word
console.log(str.replace(/lo\B/, '**')) // hello, **ok at you!

// `^` beginning of the string
console.log(str.replace(/^lo/, '**')) // hello, look at you!, replace nothing because string does not start with 'lo'
console.log(str.replace(/^he/, '**')) // **llo, look at you!, replaced with '**' because string starts with 'he'

// `$` end of the string
console.log(str.replace(/lo$/, '**')) // hello, look at you!, replace nothing because string does not end with 'lo'
console.log(str.replace(/u!$/, '**')) // hello, look at yo**, replaced with '**' because string starts with 'u!'

// `(?=ok)` match `lo`, following character must match `ok`
console.log(str.replace(/lo(?=ok)/, '**')) // hello, **ok at you!

// `(?!ok)` match `lo`, where `lo` must NOT be followed by `ok`
console.log(str.replace(/lo(?!ok)/, '**')) // hel**, look at you!