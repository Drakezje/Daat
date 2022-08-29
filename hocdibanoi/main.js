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

// Thử thách khó, dùng If/else
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

// Khi a chia hết cho 3 thì return về 1
// Khi a chia hết cho 5 thì return về 2
// Khi a chia hết cho 15 thì return về 3

// function run(a) {
    
//     if ((a % 3 == 0 ) && (a % 5 !== 0))  {
//         return 1;
//     } else if ((a % 5 == 0 ) && (a % 3 !== 0)) {
//         return 2;
//     } else if (a % 15 == 0) {
//         return 3;
//     }

// }

// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3