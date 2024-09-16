// Get an element in array using index
const arr6 = [1,2, [3, 'a', ['b', 'c', 4]]] // mixed array
console.log(arr6[1]) // 2
console.log(arr6[2][1]) // a
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][1]` = [3, 'a', ['b', 'c', 4]][1] = 'a'
console.log(arr6[2][2][2]) // 4
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][2]` = ['b', 'c', 4]
//              `arr6[2][2][2]` = ['b', 'c', 4][2] = 4

// Modify an element in array
const arr7 = [1, 2, 'a', 'b']
arr7[1] = arr7[1] + 1
console.log(arr7) // [ 1, 3, 'a', 'b' ]
arr7[2] = arr7[2] + ' and c'
console.log(arr7) // [ 1, 3, 'a and c', 'b' 