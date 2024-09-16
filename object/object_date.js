//object_date

//object can use function
var date1 = new Date();
console.log(typeof date1);
console.log(date1);
var year =date1.getFullYear();
var month = date1.getMonth() +1; // note month return 0-11 => +1 in function to get true result
var day = date1.getDate();
var hour  = date1.getHours();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
//minutes//seconds
console.log(`${year}/${month}/${day}`);


//string can not  use function
var date2 = Date();
console.log(typeof date2);
console.log(date2);