/* 
Math object đối tượng toán học đã đượng định nghĩa sẵn rồi
-Math.PI số pi
-Math.round() làm tròn 
-Math.abs() giá trị tuyệt đối -4 = 4
-Math.ceil() làm tròn trên 4.1 = 5
-Math.floor() làm tròn dưới 4.9 = 4
-Math.random() ngẫu nhiên số thập phân 0 tới 1
-Math.min() min
-Math.max() max
*/

// console.log(Math.PI);
// console.log(Math.floor(Math.random()*100));

// var random = Math.floor(Math.random()*5);


// var bonus = [
//     '10 coins',
//     '20 coins',
//     '30 coins',
//     '40 coins',
//     '50 coins',
// ]

// console.log(bonus[random]);
// if(random < 5){
//     console.log('Cường hóa thành công');
// }

/* câu lệnh rẽ nhánh if else */
// var date = 9;

// if(date === 2){
//     console.log('Hôm nay là thứ 2');
// }else if(date === 3 ){
//     console.log('Hôm nay là thứ 3');
// }else{ // nếu mà tất cả đk trên sai thì lọt vào thằng này
//     console.log('Không biết');
// }

// var date  = 9;
// if(date === 2 ){
//     console.log("Hôm nay là thứ 2");
// }else if(date === 3){
//     console.log("Hôm nay là thứ 3");
// }else {
//     console.log("Không biết");
// }

// Thử thách khó, dùng If/else
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

// Khi a chia hết cho 3 thì return về 1
// Khi a chia hết cho 5 thì return về 2
// Khi a chia hết cho 15 thì return về 3

// toán tử && and toán tử(tra ve true neu 2 dung) || toán tử or toán tử(true neu 1 trong 2 dung) ! là phủ định
// function run(a) {
//     if ((a % 3 == 0 ) && (a % 5 !== 0))  {
//         return 1;
//     } else if ((a % 5 == 0 ) && (a % 3 !== 0)) {
//         return 2;
//     } else if (a % 15 == 0) {
//         return 3;
//     }
// }

// function run(a){
//     if ((a % 3 == 0) && (a % 5 !== 0)){
//         return 1;
//     }else if ((a % 5 ==0 ) && (a % 3 !==0)){
//         return 2;
//     }else if (a % 15 ==0){
//         return 3;
//     }
// }

// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3

// switch cấu trúc rẽ nhánh

// var date=5;
// switch(date){
//     case 2:
//         console.log('Hôm nay là thứ 2');
//         break;
//     case 3: // ===
//         console.log('Hôm nay là thứ 3');
//         break;
//     case 4:
//         console.log('Hôm nay là thứ 4');
//         break;
//     default:
//         console.log('Không biết');
// }
//khi nào dùng if else khi nào switch
//so sánh a>b thì if else được cho trc giá trị date 2 đến 8 có thể dùng swtich vì biết trc giá trị,
//mà ít hơn 3 case thì lại if else
//if elsse < > !==
//case lớn hơn 3 mới dùng

// function run(fruits) {
//     var result;

//     switch(fruits) {
//         case "Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//     }
//     return result;
// }
// function run(fruits) {
//     var result;
//     switch(fruits) {
//         case "Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//         default:
//             result = "No fruits";
//     }

//     return result;
// }
// function run (fruits){
//     var result;
//     switch(fruits){
//         case "Banana":
//             result = "This is banana";
//             break;
//         case "Apple":
//             result = "This is apple";
//             break;
//         case "Orange":
//             result = "This is orange";
//             break;
//         default:
//             result = "No fruits";
//     }
//     return result;
// };
// console.log(run())


//toán tử 3 ngôi 3 vế

// var course = {
//     name : "JS",
//     coin: 250
// }
// // if (course.coin > 0 ){
// //     console.log(`${course.coin} Coins`);
// // }else{
// //     console.log('Miễn phí');
// // }
// var result = course.coin > 0  ? /* là dấu ngăn cách */ `${course.coin} Coins` : "Miễn phí";
// console.log(result);
// //điều kiện else if phức tạp không nên dùng

// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b; // a > 0 thì c = a ngược lại lấy giá trị của b
// var c = a > b ? "Lớn hơn" : "Không lớn hơn"
// a> b ? "" : ""
// console.log(c);

// var c = a > 0 ? a : b
// console.log(c);

//vòng lặp - loop
/* 
for lặp với điều kiện đúng
for/in lặp qua key của đối tượng
for/of lặp qua value của đối tượng
while lặp khi đk đúng
do/while lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

// for loop

// for(i = 1 ; i <= 1000 ; i ++){
//     //code 
//     console.log('Đây là for' , i );
// }
// for ( i = 1 ; i <= 100 ; i ++){
//     console.log("", i);
// }
/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */
// var a = ['dat','uyen','van'];
// for(var i = 0; i < a.length; i ++){
//     console.log(a[i]);
// }
// function getRandNumbers1(min, max, length) {
//     var array = new Array()
//     for (var i = 0; i < length; i++) {
//         array.push(Math.random() * (max - min) + min)
//     }
//     return array
// }
// console.log((getRandNumbers1(1,10,2)));

// function getRandNumbers(min,max) {
//     let number = min + Math.random() * (max - min);
//     console.log("So ngau nhien", number); 
// }
// getRandNumbers(1,10)


// for ( i = 1 ; i <= 1000; i++ ){
//     console.log(i);
// }

// function getTotal(arr) {
//     var results = 0;
//     for (var i = 0; i < arr.length;i++){
//         results += arr[i];       
//     }
//     return results;
// }
// function getTotal(arr) {
//     var results = 0;
//     for (var i = 0 ; i < arr.length ; i++){
//         results += arr[i];
//     }
//     return results;
// }
// // Expected results
// console.log(getTotal([1, 2, 3])) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17


// var myArr=[
//     'Js',
//     'PHP',
//     'Css',
//     'Html',
// ];

// for(var i=0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(){
//     var results = 0;
//     for(var i = 0 ; i < orders.length;i++){
//         results += orders[i].price;
//     }
//     return results;
// }

// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000


// for in loop
// dùng để lấy  key của đổi tượng 
// var myInfo={
//     name:'Thanh Dat',
//     age : 23,
//     address: 'HN'
// }
// var languages = 'JavaScript';
// for(var key in myInfo){
//     console.log(myInfo[key]);
// }
// for (var key in languages){
//     console.log(languages[key]);
// }

// function run(object){
//     var arr =[];
//     for(var key in object){
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }return arr;
// }

// // array push thêm phần từ vào mảng

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 , addres : "ha noi"}));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]


// function find_max_min(a, b, c ){
//     const maxNum = Math.max(a, b, c);
//     const minNum = Math.min(a, b, c);
    
//     return [maxNum,minNum]; 
//   }

// var [max,min]=find_max_min(2, 5, 3);
// console.log(max,min);

//for/of loop muốn lấy ra phần từ của 1 mảng, hoặc phần tử của một chuỗi
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Java',
// ];
// var myInfo = {
//     name:'Thanh Dat',
//     age: 18
// };
// for(var value of languages){
//     console.log(value);
// }
// console.log(Object.keys(myInfo));//lấy keys
// console.log(Object.values(myInfo));//lấy values

//while loop 
//in ra 1 chuỗi dãy số 1 -> 1000
// var myArr=[
//     'php',
//     'js',
//     'ruby'
// ];
// var i = 0 ;
// while(i < myArr.length){
//     console.log(myArr[i]);
//     i++;
// }

// var i = 0;
// while (i < 1000){
//     i++;
//     console.log(i);
// }


//do while loop

// var i = 0;

// do{
//     //code
//     i++;
//     console.log(i);
// }while(i<10) //luôn chạy ít nhât 1 lần ,để i<0 vẫn in ra 1, do trước rồi mới kiểm tra

//break & continue in loop
// for ( var i = 0; i < 10 ; i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }

// for(var i = 0; i <10; i++){
//     if(i % 2 !==0){
//         continue;// tiếp tục quay lại vòng for bỏ lại dưới
//     }
//     console.log(i);
// }

//nested loop vòng lặp lồng nhau
var myArr=[
    [1,2],
    [3,4],
    [5,6]
];

// for(var i = 0 ; i < myArr.length; i++){
//     for(var j = 0; j < myArr[i].length; j ++){
//         console.log(myArr[i][j])
//     }
// }//vòng cha lấy ra mảng con, vòng con lấy ra phần tử trong mảng con

// for(var i= 0 ; i < myArr.length; i++){
//     console.log(myArr[]);
// }

// ví dụ về vòng lặp // loop...
//100 về 1

// for(var i = 100; i > 0;i--){
//     console.log(i)
// }

// for( var i = 0 ; i<= 100; i+=5){
//     console.log(i);
// }// 5 10 15 20

// for(var i = 100; i > 0; i-=5){
//     console.log(i);
// }

//toán đệ quy là là một cái hàm gọi lại chính hàm
//a -> loop -> cpu
//a -> de quy - > ram 
//trành dùng đệ quy tràn ram

//1. xác định điểm dừng
//2. logic handle -> tạo ra điểm dừng

// function deQuy(num){
//     if(num < 0){
//         // dừng
//         //..
//         return;
//     }
//     deQuy()
// }
// deQuy(10);

// ứng dụng countdown

// function countdown(num){
//     if(num > 0){  //khi này num > 0 (3>0)
//         console.log(num); // ouput ra số 3
//         return countdown(num -1); //return thoát cái hàm này ko xuống dưới nữa, return chính nó rồi trừ đi 1 rồi vòng lại
//     }
//     return num; // lúc này là số 0, fasle dừng lại
// }
// countdown(3); // lần 1 truyền 3 vào function countdown


// làm việc với mảng phần 2

/* 
foreach // duyệt qua từng mảng
every // thỏa mãn 1 cái gì đó, trả về bolean, ví dụ coin===0, nếu 1 trong =! thì false
some // ngược lại every chỉ cần 1 thỏa mãn là true
find // để tìm kiếm 1 phần tử thỏa mãn
filter // tìm kiếm hết phần tử thỏa mãn
map // muỐn chỉnh sửa element của 1 array
reduce //muốn nhận về 1 giá trị duy nhất sau khi tính toán
push // đẩy vào mảng
đều có tham số truyền là 1 hàm
*/
var courses = [
    {
        id: 1,
        name:'Javascript',
        coin:250
    },
    {
        id: 2,
        name:'Html,css',
        coin:100
    },
    {
        id: 3,
        name:'Ruby',
        coin:300
    },
    {
        id: 4,
        name:'Php',
        coin:400
    },
    {
        id: 5,
        name:'Reactjs',
        coin:500
    },
    {
        id: 6,
        name:'Ruby',
        coin:600
    },
];

courses.forEach(function(course,index){
    console.log(course);
})
// every tìm tất cả thỏa mãn điều kiện, some một số thỏa mãn, find tìm phần tử đầu tiên, filter tìm tất cả phần tử có thỏa mãn

// var isFree=courses.every(function(course,index){
//     return course.coin === 0;
// });
// console.log(isFree);

// var isNotfree=courses.some(function(course,index){
//     return course.coin === 500;
// });
// console.log(isNotfree);

// var isFind=courses.find(function(course,index){
//     return course.name === 'Ruby';
// });
// console.log(isFind);

// var isFilter=courses.filter(function(course,index){
//     return course.name === 'Ruby';
// });
// console.log(isFilter);

//bài làm thực hành mảng

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport(sport){
//     var filter = sport.filter(function(){
//         return sport.like>5;
//     })
//     return filter;
// }
// var Favsports = sports.filter(function(sport,index){
//     return sport.like >= 5
// })

//array map() method, method là 1 function, muốn thay đổi chính sửa element của 1 array
//và nó là 1 function của 1 đối tượng, return về 1 mảng mới,
// số lượng phần từ ngang nhau
// bài toán thay đổi name khóa học thành 'Khóa học:'
//cách lấy name khóa học course.name

// function courseHandler(course,index){
//     return {
//         id: course.id,
//         name: `Khóa học:${course.name}`,
//         coin:course.coin,
//         coinText:`Giá ${course.coin}`,
//         index:index,
//     };
// }


// var newCourses = courses.map(courseHandler);
// console.log(newCourses);


//array reduce () method
//tổng số coin
//tổng số coin ko dùng reduce()

// var totalCoin = 0; // biến lưu trữ
// //lặp qua các phần tử
// for(var course of courses){ // for of là lặp qua giá trị
//     //thực hiện lưu trữ
//     totalCoin += course.coin;
// }
// console.log(totalCoin);


// var totalCoin = courses.reduce(function(accumulator,currentValue){

//     return accumulator + currentValue.coin;
//     //accumulator biến lưu trữ
//     //giá trị hiện tại currentValue,
//     // quan trOng không được quên số 0 là giá trị khởi tạo cho accumulator
//     //bắt buộc phải trả về

// },0)
// console.log(totalCoin);


// var totalCoin = courses.reduce(function(total,course){
//     return total + course.coin;
// },0) //initial value giá trị không bắt buộc, có hoặc ko có đều được,
// console.log(totalCoin);
// var totalCoin = courses.reduce(function(total,course){
//     return total + course.coin;
// },0)
// console.log(totalCoin);

//flat làm phẳng mảng từ depth array - mảng sâu

// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// var flatArray = depthArray.reduce(function(flatOutput,depthItem){
//     return   flatOutput.concat(depthItem); //concat nối mảng
// },[])
// console.log(flatArray);

// var topics = [
//     {
//         topic: "Front-End",
//         courses: [
//             {
//                 id:1,
//                 title: "HTML,CSS"
//             },
//             {
//                 id:2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-End",
//         courses: [
//             {
//                 id:1,
//                 title: "PHP"
//             },
//             {
//                 id:2,
//                 title: "NodeJS"
//             }
//         ]
//     },
// ];

// var newCourses = topics.reduce(function(course,topic){
//     return course.concat(topic.courses);
// },[])
// console.log(newCourses);
//concat nối hai hay nhiều array lại với nhau
//Number(type) trả về một number và định dạng nhị phân, thập,...
//parseFloat() chuyển sang một số float
// parseInt() chuyển sang một số integer
// toString() chuyển sang kiểu string
// toFixed(n) chuyển sang số có n số lẻ ở đằng sau
// toPrecision(n) chuyển sang số có chiều dài là n
// valueOf() lấy giá trị của biến hoặc một giá trị nào đó
// function calculateRating(watchList){
//     var listfilm = watchList.filter(function(film){
//     return film.Director === "Christopher Nolan"})
//     var totalImdb = listfilm.reduce(function(result,points){
//       return (result + Number(points.imdbRating));
//     },0)
//     return totalImdb /listfilm.length;
//   }

//reduce 2
// Array.prototype.reduce2 = function(cb,initialValue){

// }
// const numbers = [1,2,3,4,5];

// const result = numbers.reduce((total,number)=>{
//     return total + number;
// },);
// console.log(result);

// Thực hành tạo phương thức reduce()
      
// Tạo hàm reduce2() với hai tham số là callback và  gia_tri_ban_dau cho Object Constructor Array
// Array.prototype.reduce2 = function(callback, gia_tri_ban_dau) { 
// /*
//     Trường hợp người dùng ko nhập gia_tri_ban_dau:
//     +arguments.length: kiểm tra xem nếu đối số truyền vào nhỏ hơn 2 thì:
//     +gia_tri_ban_dau = this[0](gia_tri_ban_dau = numbers[0]): lấy phần tử đầu tiên trong mảng numbers
//     gán cho gia_tri_ban_dau
//     + gán biến i bằng 1 để đối số this[i](number[i]) sẽ bằng 1 => lấy phần tử thứ 2 trong mảng
// */
// var i = 0;
// if(arguments.length < 2) {
// gia_tri_ban_dau = this[0];
//     i = 1;
// }

/*
+ Sử dụng vòng lặp for để gọi hàm callback(hàm bạn tạo ra lúc bạn gọi hàm reduce2()) nhiều lần
+ this.length : chiều dài của mảng được truyền vào (mảng numbers)
+ Gọi lai hàm callback do bạn tạo ra khi gọi hàm reduce2() có 4 đối số được truyền vào:
    - Đối số gia_tri_ban_dau(trong hàm callback) = tham số gia_tri_ban_dau(trong hàm reduce2)
    - Đối số this[i] = tham số gia_tri_hien_tai (this[i]: là numbers[i])
    - Đối số i : là index của phần tử hiện tại trong mảng (mảng numbers)
    - Đối số this: là mảng hiện tại (mảng numbers)
+ Giải thích cách hoại động của hàm callback trong hàm reduce2()
    - lặp qua i = 0; thỏa điều kiện i < this.length => 0 < 5
    - gọi hàm gọi hàm callback bạn đã định nghĩa lúc bạn gọi hàm reduce2()
    - trả về : gia_tri_ban_dau + gia_tri_hien_tai => 0 + 1 = 1 (được tính toán phía dưới)
    - gán giá trị trả về của hàm callback vào tham số gia_tri_ban_dau
     - Tiếp tục vòng lặp cho đến khi i >= 5
*/
//   for(; i < this.length; i++) {
//       gia_tri_ban_dau = callback(gia_tri_ban_dau, this[i], i, this);
//   }
// // kết thúc vòng lặp và trả gia_tri_ban_dau
//     return gia_tri_ban_dau;// kết quả của hàm reduce2()
// }

// var numbers = [1,2,3,4,5]; // khai báo mảng numbers

/*
Gọi hàm reduce2() do bạn tạo ra bên trên
    - Nhập vào 2 đối số :
       + function do bạn tự định nghĩa
       + giá trị ban đầu : gia_tri_ban_dau
*/
// var result = numbers.reduce2( function(gia_tri_ban_dau, gia_tri_hien_tai, i, array){
//     return gia_tri_ban_dau + gia_tri_hien_tai;
// });

// console.log(result);

// array.prototype.reduce3=function(cb,giatribandau){
//     var i = 0;
//     if(auguments.length<2){
//         giatribandau = this[0];
//         i=1;
//     }
// }
// function arrToObj(arr){
//     return arr.reduce(function(acc,current){
//         acc[current[0]] = current[1];
//         return acc;
//     },{})
// }
 
// Expected results:
// var arr = [
//     ['name', 'Thanh Dat'],
//     ['age', 18],
//     ['addredd', "ha noi"],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
// khi b return thì nó trả cho b 1 cái object 
//và nó sẽ chuyền tiếp key của cái array vào cái object đấy
//acc là biến tích trữ, b là phần tử hiện tại của mảng reduce
/* yêu cầu của bài là reduce về một object nên mình khởi tạo nó là một obj rỗng. 
Sau đó reduce chạy qua các phần tử của mảng. Mà mảng này có phần tử là các mảng con có 2 phần tử. 
trong mảng con, mình gán phần tử đầu là key , 
phần tử thứ hai là value qua dong: result[cur[0]] = cur[1] */
/*  để thêm cặp key và value cho chuỗi đó em. Gán chuỗi sẽ có 2 cách là object.key = value 
hoặc object['key'] = 'value'
. Do đó khi vòng lặp chạy lượt 1: item[0] = 'name' và item[1] = 'Sơn Đặng' */


/* String/array includes() method */
// include method phương thức tồn tại trong Array và string prototype
// var title = "Responsive web design";
// console.log(title.includes("Responsive"));
//kiểm tra chuỗi có từ nào hay không
// var course = ["JS","PHP","Reacjs"];
// console.log(course.includes("PHP"));


// var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

// function checkCar(cars) {
//    return cars.includes('Mercedes', 2);
// }

// console.log(checkCar(cars)); // Output: ?
















