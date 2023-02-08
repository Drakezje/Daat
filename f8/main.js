// đây là cách anh giết java script
// anh phải học xong cái môn quỷ quái này anh đã để nó chờ hơi lâu rồi
// anh sẽ dùng cái tết này để cho nó biết nó vinh dự thế nào
// ai là con bitch của anh nào ??:D??

/* 
1. toán tử số học + - * /
    toán tử gắn = ; a=b; a = 1;
    toán tử so sánh ><  >= <= ==
    toán tử logic &&( 2 đúng true) || (1trong 2 đúng true)
2.tiền tố ++x tăng giá trị biến lên 1, trả về giá trị sau khi tăng
    hậu tố x++ tăng giá trị biến lên 1, trả về giá trị trước khi tăng
3. 6 giá trị khi convert sang boolean là false
    0
    false
    "-"
    undefined
    Nnot a number
    NULL
4.Kiểu dữ liệu trong js
    number
    string
    boolean
    uindefined
    null
    symbol
    phức tạp function, object
5. object types bao gồm object, array
6. typeof null thì kết quả là object
7. toán tử so sánh tuyệt đối
 == chỉ quan tâm value
 === quan tâm  value và kiểu dữ liệu (nếu mà kết quả phức tạp sẽ kt giá trị tham chiếu vùng nhớ)
 !== ko bằng
8. truthy bất cứ giá trị chuyển sang boolean là true (một mảng trống, array trống, hàm trống là true)
9.falsy bất cứ giá trị chuyển sang kiểu boolean là false
    các giá trị được xem là falsy
    false
    0
    "" or ''
    null
    undefined
    Nan
10.tips convert sang kiểu boolean là !!
11.ngoại lệ document.all là một đối tượng nhưng khi convert sang boolean là false
document.all khi là toán hạng của toán tử là so sánh == hoặc != sẽ là undefined
typeof document.all sẽ trả về "undefined"
12.toán tử logic

&& tìm phần tử false
nếu 1 dãy true hết thì trả về phần từ cuối cùng
nễu 1 dãy có nhiều false thì trả phần tử false đầu tiên rồi dừng
|| tìm phần tử true
nếu 1 dãy true hết thì phần tử trả true đầu tiền
nễu 1 dãy false hết thì phần tử cuối cùng
các phần từ được xem là false
0
false
'' or ""
null
undefined
Nan
tóm tắt: tìm từ trái qua phải
&& tìm false, || tìm true

13. hàm ko trả về mặc địch là undefined
14. khi function trùng tên, function mới nhất được gọi
15. các dạng function 
declaration function 
function showMessage{}
expression function dạng gắn function cho 1 biến, có thể có hoặc ko tên function
var showMessage = function autoShow{}
setTimeout(function(){})
var myobject = {
    myfunction:function(){

    }
}
16. có 2 cách tạo chuỗi
1. var fullname = "ThanhDat"
var fullname = new string("ThanhDat")
17. một số case dùng backslash(\)
gõ dấu văn bản chứa '' or ""
xuống dòng \n
gõ dấu \ trong văn bản
cách 1 khoảng tab \t

18. template es6 cộng chuỗi
console.log(`tổi là : ${frist name} + ${last name}`)

19.làm việc với chuỗi
length độ dài chuỗi
find index tìm chuỗi, nếu thấy trả về vị trí (vị trí bd từ 0),else trả về -1
.indexof ('chuỗi cần tìm','vị trí bđ tìm nếu ko có mặc định từ đầu')
.lastindexof tìm vị trí cuối ngược ra vị trí đầu
.sreach tìm kiếm theo biểu thức chính quy, ko hộ trợ nhập vị trí tìm kiếm như indexof

cut string
.slice(start,end)
trái qua phải str -> end
phải qua trái str -> end-

.replace("chữ cần thay ","chữ mong muốn")

convert to uppercase
.toUpperCase()
lowercase 
.lowercase

trim loại bỏ khoảng trắng thừ
.trim

.split("điểm chung để cắt hoặc chuỗi rỗng")
get a character by index
.charat(index)
hoặc tên biến[index]

20.làm việc với số
number.isfinite() xđ xem giá trí cho có phải số hữu hạn hay không, trả về boolean
number.inInteger() xđ xem giá trị có phải số nguyên hay không trả về boolean
number.parsefloat() chuyển đổi chuỗi đã cho thành số nguyên
number.prototype.toFixed() chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân, trả về kiểu string
number.prototype.toString() chuyển đổi và trả về số đã cho dưới dạng chuỗi

21. cách tạo số
tạo binh thường
dùng new number()

22.type of Nan = number

23.Mảng trong js có thể chứa nhiều loại dữ liệu cùng lúc
24. CÁCH tạo mảng
tạo như bthg 
var a = new Array('js','ruby','php')

25.type of mảng trả về object

26. kiểm tra 1 đối tượng có phải mảng hay không dùng array.isarray(value name)
27. các phương thức làm việc với mảng array
.tostring(value) chuyển array sang chuỗi, mặc định sẽ xuất hiện dấu , và ko thể sửa
.join(value) chuển arr sang chuỗi tham số truyền vào chính là ngăn cách giứa các phần tử .join('')
.pop() xóa phần tử cuối mảng và trả về phần tử đã xóa
ko có phần tử trả về undefined
.push(value) thêm 1 hoặc nhiều phần tử ở cuối mảng, trả về độ dài mới của mảng
.shift(value) xóa đi 1 phần tử đầu mảng trả về phần từ đã xóa
.unshift(value) thêm 1 nhiều phần tử ở đầu mảng, trả về độ dài mới của mảng
.spilce(value) có thể xóa,cắt,chèn phần tử vào mảng
xóa .spilce(indexbegin,deletcount)
chèn .spilce(indexbegin,0,'itemName) nếu để số #0 thì là vừa xóa vừa chèn
.concat() nối arr với nhau và trả về arr hợp nhất
arr_gốc.concat(arr cần hợp nhất)
trả về hợp nhất, nhưng arr gốc và arr cần hợp nhất vẫn giữ nguyên
.slice() cắt phần tử, cũng có thể điền số âm
.slice(bắt đầu,vị trí đc cắt)
.slice(1,0) cắt từ vị trí 1 đến hết mảng
.slice(0) copy mảng
.slice(-2,-1)

28. foreach duyệt qua từng phần tử của mảng
var_name.foreach(function(name){

})
VD:
courses.forEach(function(course, index, array) {
 console.log(index, course, array);
});
Kết quả:
0 {id: 1, name: 'Javascript', coin: 250}
1 {id: 2, name: 'HTML, CSS', coin: 0}
2 {id: 3, name: 'Ruby', coin: 0}
3 {id: 4, name: 'PHP', coin: 400}
4 {id: 5, name: 'ReactJS', coin: 500}

every() kiểm tra tất cả phần tử của mảng thỏa mãn 1 điều gì đó, chỉ cần 1 phần tử không thỏa mãn về false
var isFree = courses.every(function(course, index) {
 return course.coin === 0;
});
console.log(isFree);
Kết quả:
false

some(): tương tự every(), nhưng chỉ cần 1 phần tử thỏa mãn điều kiện thì
trả về true

find(): tìm kiếm phần tử đầu tiên tìm thấy trong mảng, nếu không có thì trả
về undefined
VD:
var isFree = courses.find(function(course, index) {
 return course.name === 'Ruby';
});
console.log(isFree);
Kết quả:
{id: 3, name: 'Ruby', coin: 0}

fillter(): tương tự find, nhưng trả về tất cả phần tử thỏa mãn

map(): Tạo ra 1 mảng mới giống mảng cũ, tuy nhiên chúng ta có thể thêm
các trường, xóa trường, cập nhật data, ...
Map() sẽ duyệt qua từng phần tử của mảng, khi gặp mỗi phần tử sẽ gọi lại
function được truyền trong map()
VD:
function courseHandler(course, index) {
 return {

 id: course.id,
 name: `Khóa học ${course.name}`,
 coin: course.coin,
 coinText: `Giá ${course.coin}`,
 originArray: courses
 }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);
Kết quả:
0: {id: 1, name: 'Khóa học Javascript', coin: 250, coinText: 'Giá 250', originArray:
Array(5)}
1: {id: 2, name: 'Khóa học HTML, CSS', coin: 0, coinText: 'Giá 0', originArray:
Array(5)}
2: {id: 3, name: 'Khóa học Ruby', coin: 0, coinText: 'Giá 0', originArray: Array(5)}
3: {id: 4, name: 'Khóa học Ruby', coin: 400, coinText: 'Giá 400', originArray:
Array(5)}
4: {id: 5, name: 'Khóa học ReactJS', coin: 500, coinText: 'Giá 500', originArray:
Array(5)}




*/