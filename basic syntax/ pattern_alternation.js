// Create pattern with alternation, grouping, and references

// alternation
const look = 'I am looking at you.'
const see = 'I see you.'
const watch = 'Someone is watching.'
console.log(look.replace(/(look|see|watch)/, '***')) // I am ***ing at you.
console.log(see.replace(/(look|see|watch)/, '***')) // I *** you.
console.log(watch.replace(/(look|see|watch)/, '***')) // Someone is ***ing.

// grouping and references
const js = `javascript is funjavascriptfun, isn't it?`
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)/, '***')) // ***javascriptfun, isn't it?

// each '()' creates a group
// `\number` reference to that group, in left-to-right order
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)\1/, '***')) // ***fun, isn't it?
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)\1\3/, '***')) // ***, isn't it?