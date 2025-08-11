<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

// tạo biến API để lưu đường link API
let API = `http://localhost:3000/student`;

// Khai báo biến student để lưu lại dữ liệu lấy được từ API
let student = ref("");

let route = useRoute();
// Khai báo biển studentId để lấy id từ thanh địa chỉ
//  VD: http://localhost:5173/students/detail/2181 => 2181
let studentId = route.params.id;

// Gọi lên API cùng với studentId để lấy thông tin chi tiết của 1 bản ghi
fetch(`${API}/${studentId}`)
  .then((res) => res.json())
  .then((data) => {
    student.value = data;
  });
</script>

<template>
  <div class="col-md-12">
    <h3 class="mx-2">Trang chi tiết sinh viên</h3>
    <div class="card px-3">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="student.name"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          id="age"
          v-model="student.age"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="student.email"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <img :src="student.image" alt="" />
      </div>
      <RouterLink class="btn btn-primary my-2" to="/students"
        >Quay lại</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
