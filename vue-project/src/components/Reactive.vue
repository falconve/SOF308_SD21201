<script setup>
import { reactive, ref } from "vue";

// Reactive: dùng để quản lý giá trị của biến
// và các giá trị như mảng & object nhiều tầng

// Khi sử dụng reactive muốn lấy giá trị thì không
// cần dùng .value

// SỬ DỤNG ref
// let hoTen = ref("");
// let tuoi = ref("");

// function hienThi() {
//   console.log(`Họ và tên: ${hoTen.value}, Tuổi: ${tuoi.value}`);
// }

// SỬ DỤNG reactive
let student = reactive({
  hoTen: "",
  tuoi: "",
});

function hienThi() {
  console.log(`Họ và tên: ${student.hoTen},Tuổi: ${student.tuoi}`);
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Form quản lý thông tin SV</h3>
      <div class="input-group mb-3">
        <input
          v-model="student.hoTen"
          type="text"
          class="form-control"
          placeholder="Nhập tên..."
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="student.tuoi"
          type="text"
          class="form-control"
          placeholder="Nhập tuổi..."
        />
      </div>
      <button class="btn btn-primary" @click="hienThi">
        Hiển thị thông tin
      </button>
    </div>
  </div>
</template>

<style scoped></style>
