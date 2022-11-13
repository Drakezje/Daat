/* JS xử lý đối tượng HTML trên trình duyệt, cán thiệp vào các hành động thêm xóa sửa, css phía client
 */
// alert("Hello word"); //hiện hộp thông báo

// var a = 10;
// var b = 20;//khai báo biến
// function ten_function (thamso1,thamso2,thamso3,){
//     //tập hợp các lệnh
//     //để hoàn thành nhiệm vụ nào đó
//     //return trả về một giá trị, hoặc không trả về giá trị gì

// }
//function expression 
// let tongHaiSo = function(a,b){
//     return a+b;
// };
// console.log(tongHaiSo(1,2));

//đối tượng
//mô hình hóa từ thế giới thực, chuyển vào ctr
//thuộc tính là những đặc điểm cần lưu trữ trong một đối tượng
/* vd
    tên sinh viên : name
    năm sinh: namSinh
    giới tính :giơiTinh
    mã số sv:mssv
*/
/* phương thức của đối tượng là những hành động của đối tượng
VD: hocBai(), xemphim(), tapTheDuc()
cách khai khởi tạo đối tượng
*/

//khởi tạo đối tượng lúc khai báo
// let TenDoiTuong = {
//     thuocTinh1: giaTri1,
//     thuocTinh2: giaTri2,
//     thuocTinh3: giaTri3,
//     thuocTinh4: giaTri4,
//     phuongThuc1: function() {
//         //Danh sách các câu lệnh của phương thức này
//     },

//     phuongThuc2: function() {
//         //Danh sách các câu lệnh của phương thức này
//     },

//     phuongThuc3: function() {
//         //Danh sách các câu lệnh của phương thức này
//     },

//     phuongThucN: function() {
//         //Danh sách các câu lệnh của phương thức này
//     },
// };

// let SinhVien = {
//     //Tạo các thuộc tính
//     hoTen:"Đỗ Thành Đạt",
//     gioiTinh:"Nam",
//     MSSV:"ph13485",
//     namSinh:"1999",
//     hocbai:function(){
//         console.log("Đang học bài");
//     },
//     diNgu:function(){
//         console.log("Đang ngủ...");
//     },
//     xemPhim:function(){
//         console.log("Đang xem phim...");
//     }
// }

// //Truy cập đến thuộc tính và phương thức
// console.log((SinhVien.hoTen));
// console.log(SinhVien['gioiTinh']);
// SinhVien.hocbai();

// //chỉnh sửa thuộc tính
// SinhVien.namSinh="19999";
// console.log(SinhVien.namSinh);

//chỉnh sửa phương thức
// SinhVien.diNgu = function(){
//     console.log("Đi ngủ với người yêu");
// };
// SinhVien.diNgu();


// //Đối tượng date

// let SinhVien2= ["A","B","C","D","F"];
// let SoPhanTuTrongMang = SinhVien2.length;
// console.log(SoPhanTuTrongMang);

//hàm join gộp các phần từ trong mảng thành chuỗi
// let chuoi1 = SinhVien2.join();
// console.log(chuoi1);
// Hàm pop(): Loại bỏ phần tử ở cuối mảng

// Hàm push(): Thêm phần tử vào cuối mảng

// let push = SinhVien2.push("ABCD")
// console.log(SinhVien2);

// //Hàm shift(): Xóa phần tử đầu mảng
// //Hàm splice(): Chèn phần tử vào vị trí chỉ định
// //tenMang.splice(viTriBatDau, soPhanTuMuonXoa, giaTri1, giaTri2, ...);

// SinhVien2.splice(1,0,"Spilce")
// console.log(SinhVien2);

// // Hàm concat(): Nối 2 mảng lại với nhau
// //tenMang1.concat(tenMang2)

// let PhuHuynh=["U","F","G","H"];
// concat= SinhVien2.concat(PhuHuynh);
// console.log(concat);


//Hàm sort(): Sắp xếp mảng theo chiều tăng dần ngược lại là reverse()

//Lặp với số lần biết trước ta sử dụng vòng lặp for hoặc vòng lặp for in.
//Lặp với số lần chưa biết trước thì ta có vòng lặp while, do while.

/* Vòng lặp for in trong JavaScript dùng để lặp qua các thuộc tính của một đối tượng. 
Khối lệnh bên trong vòng lặp sẽ được thực thi một lần cho mỗi thuộc tính.
*/
/* Vòng lặp for .. of cho phép bạn lặp qua các cấu trúc dữ liệu có thể lặp lại 
như Array, String, Map, NodeLists, v.v. */
/*  */







