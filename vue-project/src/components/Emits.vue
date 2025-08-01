<script setup>
// Emits: Dùng để truyền dữ liệu từ con về cha
const emits = defineEmits(["confirmButton", "removeStudent"]);
const props = defineProps(["schoolName", "studentList"]);

function confirm() {
  //   emits("confirmButton", "Đã ấn...");
  emits("confirmButton", props.schoolName);
  // props.schoolName tương đương giá trị của
  // biến name là FPT
}

function removeStudent(id) {
  emits("removeStudent", id);
}
// - Khai báo 1 mảng chứa ít nhất 5 dữ liệu
// gồm các thông tin về sinh viên: tên, lớp, msv, id (dữ liệu ở component cha)

// - Hiển thị thông tin sinh viên dưới dạng bảng (component con)
// - Tại mỗi dòng thông tin sinh viên sẽ có 1 nút xoá (component con)
// - Khi ấn nút xoá sẽ xoá sinh viên đó đi (dùng emit ở component con thông báo cho cho cha khi có người
// dùng ấn nút xoá)
// - Gợi ý:
// 1. Hàm xoá sẽ ở component cha. Dùng .filter để xoá
</script>

<template>
  <!-- <button class="btn btn-primary" @click="confirm">Ấn đii...</button> -->
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">MSV</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in studentList">
            <th scope="row">{{ student.id }}</th>
            <td>{{ student.msv }}</td>
            <td>{{ student.fullName }}</td>
            <td>{{ student.class }}</td>
            <td>
              <button class="btn btn-danger" @click="removeStudent(student.id)">
                Xoá
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
