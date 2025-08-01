<script setup>
import { reactive, ref } from "vue";
import Emits from "./Emits.vue";

// Hàm hiển thị
function display(message) {
  alert(message);
}

let name = ref("FPT");
// Khai báo 1 mảng chứa ít nhất 5 dữ liệu
let studentList = reactive([
  {
    id: 1,
    msv: "PP0001",
    fullName: "Tuan Anh",
    class: "WD19301",
  },
  {
    id: 2,
    msv: "PP0002",
    fullName: "Khanh Lam",
    class: "WD19301",
  },
  {
    id: 3,
    msv: "PP0003",
    fullName: "Hoang Thang",
    class: "WD19301",
  },
  {
    id: 4,
    msv: "PP0004",
    fullName: "Duy Tung",
    class: "WD19301",
  },
  {
    id: 5,
    msv: "PP0005",
    fullName: "Thu Phuong",
    class: "WD19301",
  },
]);

// Hàm xoá sinh viên
function remove(id) {}
</script>

<template>
  <Emits
    @confirmButton="display"
    :schoolName="name"
    :studentList="studentList"
  />
</template>

<style scoped></style>
