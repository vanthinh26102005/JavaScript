//// String built-in matching method: match

// const str1 = `It's always sunny in SunnyValle`;
// const regex1 =/sunny/i
// const regex2 =/sunny/gi
// const regex3 =/hola/i
// console.log(str1.match(regex1));

// console.log(str1.match(regex2));
// console.log(str1.match(regex3));
// console.log(str1.match('sunny'));

const str1 = `It's always sunny in Sunnyvale.`;
const regex2 = /sunny/gi;

let arr = str1.matchAll(regex2); // arr is an iterator

for (let a of arr) { // a is each element of the iterator arr
  console.log(a); // print each matched result
}
