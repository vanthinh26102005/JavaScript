
// object in JS

var emailKey = 'email'
var myInfo = {
    name: 'Van Thinh',
    age: 18,
    address: 'Quang Tri, VN',
    //full-name: 'abc' wrong because '-'
    'full-name': 'abc', //right 
    [emailKey]: 'vanthinhngu@gmail.com',
    getName: function() {
        return this.name; //this = myInfo con tro this
    }
}
console.log(myInfo);

myInfo.email = 'vanthinh261005@gmail.com';
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['address'])
console.log(myInfo['abcx']);

var myKey = 'address';
console.log(myInfo[myKey]);
console.log(myInfo.getName); // surely function
console.log(myInfo.getName()); // use '()'  to call  function


//function --> phuong thuc(method)
//others --> thuoc tinh (properties)
