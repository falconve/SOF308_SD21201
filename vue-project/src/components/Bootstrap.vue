<!-- Chứa CODE JS -->
<script setup>
// Phép nội suy (interpolation)
// - Tự động cập nhật giao diện khi có dữ liệu thay đổi
// - Tách biệt giao diện và logic
// Cách sử dụng: {{ tên biến }}
let myName = `Tuan Anh`;

let courseName = `SOF308`;
let courseTime = `SU25`;
let isStatus = false;

let age = 27;

// Directive (Chỉ thị):
// - Chỉ thị viết trong thẻ HTML như một thuộc tính
// - Dùng để thực hiện một hành động / hành vi nào đó lên phần tử HTML trong DOM
// CÚ PHÁP: v-tên của directive
// VD: v-if, v-html, v-bind, ...

// v-html: Hiển thị nội dung HTML động
let htmlText = `<b style="color: yellow">ví dụ về v-html</b>`;
// v-bind: cầu nối giữa dữ liệu trong VUE và thuộc tính HTML (src, href, class, id, ...)
// CÚ PHÁP:
// - Cách 1: v-bind:tên-thuộc-tính
// - Cách 2: thêm dấu : vào trước tên thuộc tính HTML. VD: :src, :href, :class, ...
let srcImg = `https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp`;

let textColor = `purple`;
let fontSize = `40px`;
</script>

<!-- UI giao diện: thẻ html -->
<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="alert alert-success">Cài đặt thành công Bootstrap</h1>
    </div>
    <div class="col-md-12">
      <p>{{ myName }}</p>
    </div>
    <div class="col-md-12">
      <h3>Thông tin khoá học</h3>
      <ul class="list-group">
        <li class="list-group-item">Tên khoá học: {{ courseName }}</li>
        <li class="list-group-item">Thời gian: {{ courseTime }}</li>
        <li class="list-group-item">
          Trạng thái: {{ isStatus ? "Đang mở" : "Đã đóng" }}
        </li>
      </ul>
      <p>Tuổi: {{ age + 2 }}</p>
    </div>
    <div class="col-md-12">
      <p>Phép nội suy:</p>
      {{ htmlText }}
      <h3>Directive v-html</h3>
      <p v-html="htmlText"></p>
    </div>
    <div class="col-md-12">
      <h3>Directive v-bind</h3>
      <img :src="srcImg" alt="" />
      <p :style="{ fontSize: fontSize, color: textColor }">Nội dung 1</p>
      <p :style="{ fontSize: fontSize, color: textColor }">Nội dung 2</p>
      <p :style="{ fontSize: fontSize, color: textColor }">Nội dung 3</p>
    </div>
  </div>
</template>

<!-- Chứa CSS -->
<style scoped></style>
