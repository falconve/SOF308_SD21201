<script setup>
import { ref } from "vue";
import Emits from "./Emits.vue";

// Hàm hiển thị
function display(message) {
  alert(message);
}

let name = ref("FPT");
// Khai báo 1 mảng chứa ít nhất 5 dữ liệu
let studentList = ref([
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
function remove(id) {
  studentList.value = studentList.value.filter((student) => student.id !== id);
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mx-auto" style="max-width: 400px">
        <div class="card-body">
          <h3 class="card-title text-center mb-4">Quản lý công việc</h3>

          <div class="mb-3">
            <label class="form-label">Tên công việc:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nhập tên công việc"
            />
          </div>

          <div class="d-grid mb-3">
            <button class="btn btn-primary">Lưu</button>
          </div>

          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Ăn sáng
              <div>
                <button class="btn btn-secondary btn-sm me-2">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </div>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Đi học
              <div>
                <button class="btn btn-secondary btn-sm me-2">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </div>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Chơi bóng rổ
              <div>
                <button class="btn btn-secondary btn-sm me-2">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Emits
    @confirmButton="display"
    :schoolName="name"
    :studentList="studentList"
    @removeStudent="remove"
  />
</template>

<style scoped></style>
