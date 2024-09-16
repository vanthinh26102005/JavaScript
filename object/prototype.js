/*
Object prototype - Basic
1. Prototype là gì?
2. Sử dụng khi nào?
*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this. lastName}`;
    }
}

User.prototype.className = 'ECS'
User.prototype.getClassName = function() {
    return this.className;
}

var user = new User ('Sơn', 'Trần', 'Avatar 1'); 
var user2 = new User ('Thăng', 'Phan', 'Avatar 2');
console.log(user);
console.log(user2);
console.log(user.getName());

console.log(user.className);
console.log(user2.getClassName());