/* 
call back 
là hàm
được truyền qua đối số



*/


// function myFunction (param){
//     param("Học lập trình")
// }   


// function myCallback (value){
//     console.log("value:",value);
// }

// myFunction(myCallback());

// function sumCB (a,b){
//     return a+b;
// }
// function caculate (a,b,cb){
//     return cb(a,b)
// }

// console.log(caculate(1,2,sumCB));

/*  phần 2 
1.là hàm
2.truyền qua đối số
3. được gọi lại (trong cái hàm nhận đối số)
*/
var courses = [
    "Javascript",
    "Python",
    "Java",
    "C++",
    "C",
];

Array.prototype.map2 = function (cb) {
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        cb(this[i], i);
    }
}

courses.map2(function (course, index) {
    console.log(index, course);
});





// htmls = courses.map2(function(course){
//     return `<h2> ${course} </h2>`
// })
// console.log(htmls.join(""));












