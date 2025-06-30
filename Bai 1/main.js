// 1. Khai báo biến
const myName = `Tuan Anh`;
let age = 27;

// 2. Kiểu dữ liệu
// - String: Chuỗi
// - Number: Số
// - Object: Array và Object
// - Array (Mảng): Chứa nhiều kiểu dữ liệu trong 1 biến
let myClass = [`SD21201`, `WD20301`, `SD19301`];
// - Object (Đối tượng): Mô tả về 1 sự vật, sự việc
let myCar = {
  name: `Vinfast`,
  type: `4 chỗ`,
  color: `đen`,
};

// VD: khai báo 1 object mô tả về 1 con vật:

// 3. Hàm (function): tái sử dụng 1
// đoạn code nhiều lần
// CÚ PHÁP: function + <tên_hàm> () { .. logic của hàm}
// VD:
// Khai báo hàm
// name gọi là đối số của hàm
function xinChao(name) {
  console.log(`Hello World ...`);
  console.log(`Xin chào ${name}`);
  //alert(`Xin chào ...`);
}

// Chạy hàm
xinChao(`Tuan Anh`); // Hàm có tham số

// 4. Cấu trúc điều kiện
if (age >= 18) {
  console.log(`Đi quân sự`);
} else {
  console.log(`Chưa đủ tuổi`);
}

// VD: Khai báo 1 biến có kiểu dữ liệu là số
// Khi sử dụng với switch case thì hiển thị ra
// Thứ trong tuần
// VD: key = 1 => Thứ 2
// key = 2 => Thứ 3
let key = 2;
switch (key) {
  case 2:
    console.log(`Thứ 2`);
    break;
  case 3:
    console.log(`Thứ 3`);
    break;
  case 4:
    console.log(`Thứ 4`);
    break;
  default:
    console.log(`Bạn nhập sai..`);
    break;
}

// 5. Vòng lặp
for (let index = 1; index <= 100; index++) {
  console.log(index);
}

// 6. DOM và Event
// DOM: dùng để truy xuất vào các thẻ HTML
// VD: truy xuất thẻ h1 có class: tieu-de
// <h1 class="tieu-de">Tiêu đề 1</h1>
//let theH1 = document.querySelector(`.tieu-de`);
// Event: sự kiện ấn chuột: onclick, onchange
// Event: Nhắc tới sự kiện thì nhắc tới hàm

function doiMau() {
  // Chọn tới thẻ h1
  let theH1 = document.querySelector(`.tieu-de`);
  // Đổi màu thẻ h1 từ đen sang đỏ
  theH1.style.color = `red`;
}

// CÁC PHƯƠNG THỨC CỦA MẢNG
// THÊM PHẦN TỬ VÀO MẢNG
let myNumber = [1, 2, 3, 4];
console.log(myNumber);
// Phương thức .push dùng để thêm phần tử vào mảng
myNumber.push(5);
console.log(myNumber);
