<script setup>
import { ref } from "vue";

// ref: Dùng để quản lí trạng thái của biến
// Khi biến có sự thay đổi về giá trị
// thì giao diện sẽ cập nhật

let score = ref(1);

function updateScore() {
  // Khi sử dụng ref muốn cập nhật lại giá trị cho biến thì
  // phải sự dụng .value
  return score.value++;
}

// Biến userName dùng để quản lấy thông tin từ input Username
let userName = ref("");

// Biến fullName dùng để quản lấy thông tin từ input Fullname
let fullName = ref("");

// v-model: binding 2 chiều, tức là khi có sự thay đổi ở input thì sẽ cập nhật
// lại giá trị cho biến

function getInfo() {
  alert(`Họ tên: ${fullName.value} và tên đăng nhập ${userName.value}`);
}

// Cho người dùng nhập vào chiều dài & chiều rộng ở input. Tinh chu vi HCN
// và hiển thị ra kết quả ra thẻ h2
let chieuDai = ref(0);
let chieuRong = ref(0);
let ketQua = ref(0);

function tinhCV() {
  ketQua.value = (chieuDai.value + chieuRong.value) * 2;
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Điểm: {{ score }}</h3>
      <button class="btn btn-primary" @click="updateScore">Tăng điểm</button>
    </div>
    <div class="col-md-12 mt-5">
      <div class="input-group mb-3">
        <input
          v-model="userName"
          type="text"
          class="form-control"
          placeholder="Username"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="fullName"
          type="text"
          class="form-control"
          placeholder="Fullname"
        />
      </div>
      <button class="btn btn-primary" @click="getInfo">Lấy thông tin</button>
    </div>
    <div class="col-md-12 mt-5">
      <h3>Chiều dài: {{ chieuDai }}</h3>
      <div class="input-group mb-3">
        <!-- 
        v-model => string (chuỗi) 
        v-model.number => number (số)
        VD: "5" => 5     
        v-model.trim => loại bỏ khoảng trắng
        VD: "admin " => "admin"
        v-model.lazy => bỏ focus khỏi input thì mới cập nhật 
        giá trị
        -->
        <input
          v-model.number="chieuDai"
          type="text"
          class="form-control"
          placeholder="Chiều dài..."
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model.number="chieuRong"
          type="text"
          class="form-control"
          placeholder="Chiều rộng..."
        />
      </div>
      <button class="btn btn-primary" @click="tinhCV">Tính</button>
      <h2>Kết quả chu vi là: {{ ketQua }}</h2>
    </div>
  </div>
</template>

<style scoped></style>
