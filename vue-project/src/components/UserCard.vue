<script setup>
// Component nào cần nhận dữ liệu từ cha thì sẽ phải
// Khai báo props
const props = defineProps(["name", "doAn"]);
// Khai báo 1 mảng chứa dữ liệu các món ăn ở component Props
// Hiển thị dữ liệu các món xuống component UserCard
// Giao diện có sử dụng bootstrap
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <h5 class="card-header">Thông tin người dùng</h5>
        <div class="card-body">
          <h5 class="card-title">Họ tên</h5>
          <p class="card-text">
            {{ name }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-4">
      <!-- Giao diện lấy ở bootstrap -->
      <ul class="list-group" v-for="(item, index) in doAn">
        <li class="list-group-item" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
