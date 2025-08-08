<script setup>
import { useRoute } from "vue-router";

// Component nào cần nhận dữ liệu từ cha thì sẽ phải
// Khai báo props
const props = defineProps(["name", "doAn"]);
// Khai báo 1 mảng chứa dữ liệu các món ăn ở component Props
// Hiển thị dữ liệu các món xuống component UserCard
// Giao diện có sử dụng bootstrap

// Lấy param ở url
const route = useRoute();
let personId = route.params.id; // => lấy param sau user-card
// VD:
// user-card/1  => lấy ra số 1
// user-card/2  => lấy ra số 2
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <h5 class="card-header">Thông tin người dùng</h5>
        <div class="card-body">
          <h5 class="card-title">Id: {{ personId }}</h5>
          <h5 class="card-title">Họ tên</h5>
          <p class="card-text">
            {{ name }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <!-- Khi sử dụng nested route phải bổ sung router-view bên trong component cha -->
    <router-view />
    <div class="col-md-12 mt-4">
      <!-- Giao diện lấy ở bootstrap -->
      <ul class="list-group" v-for="(item, index) in doAn">
        <li class="list-group-item" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
