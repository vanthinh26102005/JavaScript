/*
MATH Object
- Math. PI
- Math.round ()
- Math.abs ()
- Math.ceil()
- Math.floor()
- Math.random (
- Math.min()
- Math.max ( )
*/

// new Math => error because Math is not a constructor

console.log(Math.PI);
console.log(Math.round(4.25)); // lam tron tren hay duoi tuy vao gan diem tren hay duoi hon
console.log(Math.abs(-3)); // lay gia tri tuyet doi
console.log(Math.ceil(4.25)); // lam tron tren
console.log(Math.floor(4.25)); // lam tron duoi
console.log(Math.random()); // tao so random
console.log(Math.floor(Math.random() * 100)) // random 0-> 99

//example for random
var random = Math.floor(Math.random() * 5) // random 0->4
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
console.log(bonus[random]); // ti le deu nhau
// in coding game we use 0->100 and use if else

console.log(Math.min(-100, 1, 50, 90, 4));
console.log(Math.max(-100, 1, 50, 90, 4));




