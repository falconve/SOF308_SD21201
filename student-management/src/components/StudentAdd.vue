<script setup>
import router from "@/router";
import { ref } from "vue";

// tạo biến API để lưu đường link API
let API = `http://localhost:3000/student`;

let name = ref("");
let age = ref("");
let email = ref("");
let image = ref("");

function addStudent() {
  // Tạo object student để lưu lại dữ liệu người dùng đã nhập
  let student = {
    // Dùng Math.floor kết hợp với Math.random để tạo ra id ngẫu nhiên
    // thêm .toString để ép kiểu từ số sang chuỗi
    id: Math.floor(Math.random() * 9999).toString(),
    name: name.value,
    age: age.value,
    email: email.value,
    image: image.value,
  };

  //   console.log(student);

  // GỌI API để lưu dữ liệu sau khi người dùng nhập thông tin
  fetch(API, {
    // dùng phương thức POST để lưu dữ liệu lên API
    method: "POST",
    // Dùng JSON.stringify để chuyển object student sang dạng JSON
    body: JSON.stringify(student),
  })
    // Dùng router.push để điều hường sau khi thêm thành công
    .then(() => router.push({ name: "student.list" }));
}
</script>

<template>
  <div class="col-md-12">
    <h3 class="mx-2">Trang thêm sinh viên</h3>
    <div class="card px-3">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          placeholder="Nhập tên..."
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          id="age"
          v-model="age"
          placeholder="Nhập tuổi..."
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Nhập Email..."
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <input
          type="text"
          class="form-control"
          id="image"
          v-model="image"
          placeholder="Nhập link ảnh..."
        />
      </div>
      <button class="btn btn-primary my-2" @click="addStudent">Thêm</button>
    </div>
  </div>
</template>

<style scoped></style>
