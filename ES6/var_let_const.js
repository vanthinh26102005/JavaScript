// I.var/let, const : SCOPE & hosting
// II. const/var , let: assignment

//js has codeblock ex: if else, loop, {}, ...
//ex for codeblock:
if(true) {
    let course1 = 'js basic';
}
// or
{
     var course = 'js basic';
}

// điểm khác nhau 1st phạm  vi truy cập (scope): 
console.log(course);// js basic
// fix var (line 7) -> let or const
console.log(course); // error: course is not define

// => điểm giống nhau đều sử dụng để tạo ra những cái biến
//but setting in block
{
    const course_const ='js basic - const';
    {
        {
            const course_const ='j97'; // thử khởi tạo lại không sợ bị trùng vì nó ưu tiên cái nào ở trong trước
            console.log(course_const); //js basic - const
        } 
    }
}

// điểm khác nhau 2nd  (hosting): 
//hosting có nghĩa là đưa lên đầu
// ex: only var support hosting 
a = 1;
var a;

console.log(a);

// II. const/var , let: assignment
var a = 2;
a = 100;
console.log(a); //100

let b=2;
b = 101;
console.log(b); //101

const c=3;
//c =102; error because const can't assign one more time
console.log(c); // 102

//but here i have ex
const obj = {
     name : 'java-script'
};

 //a= 'php'; cannot assigna a again
 //but 
 obj.name = 'php'; //true because is semen
 console.log(obj.name); // php 

 // summary
// pure coding just through js => var
// use libra Babel => let, const


