// object constructor

// like defaut constructur on c++
//C1:declare funtion
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //add function to object
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//C2: expression function
var User = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //add function to object
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//khoi tao doi tuong
var author = new User('Van', 'Thinh', 'Avartar'); 
var user = new User('Huu', 'Tri', 'Avartar'); 

console.log(author);
console.log(author.constructor);
console.log(author.constructor === User );

console.log(user);

//add properties
author.title = 'Van Thinh dep trai';
user.comment = 'Van Thinh hoc khong ngu lam';
console.log(author);
console.log(user);

//call function
console.log(author.getName());
console.log(user.getName());
