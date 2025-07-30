<script setup>
import { reactive, ref } from "vue";
import UserCard from "./UserCard.vue";
// Props: dùng để truyền dữ liệu từ component cha xuống dưới
// component con

// Dữ liệu
let userName = ref("Tuấn Anh");
let foods = reactive(["bánh mì", "thịt chó", "thịt gà"]);
</script>

<template>
  <!-- Sử dụng props để gửi dữ liệu từ cha xuống con -->
  <UserCard :name="userName" :doAn="foods" />
</template>

<style scoped></style>
