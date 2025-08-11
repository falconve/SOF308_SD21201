<script setup>
import { ref } from "vue";

// tạo biến API để lưu đường link API
let API = `http://localhost:3000/student`;

// tạo biến students với kiểu dữ liệu là mảng và dùng ref để quản lí trạng thái
// biến students sẽ lưu dữ liệu lấy được từ API
let students = ref([]);

// fetch đóng vai trò như 1 trình duyệt
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    // Dùng .value để cập nhật lại giá trị cho biến student
    students.value = data;
  });

// Hàm xoá sinh viên (CHỨC NĂNG XOÁ)
function deleteStudent(studentId) {
  // Khi hộp thoại confirm được hiển thị
  // => Nếu người dùng ấn OK thì xoá
  // => Ngược lại thì không xoá
  if (confirm(`Bạn có có muốn xoá không ?`)) {
    // Khi người dùng ấn OK => thực thi xoá
    fetch(`${API}/${studentId}`, {
      method: "DELETE",
    }).then(() => {
      alert(`Xoá thành công`);
      // Cập nhật lại dữ liệu cho bảng danh sách
      students.value = students.value.filter(
        (student) => student.id !== studentId
      );
    });
  }
}
</script>

<template>
  <div class="col-md-12">
    <RouterLink class="btn btn-primary" to="/students/add">Thêm</RouterLink>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.email }}</td>
          <td>
            <img :src="student.image" alt="" />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteStudent(student.id)"
            >
              Xoá
            </button>
            <a
              :href="`/students/edit/${student.id}`"
              class="btn btn-primary mx-3"
              >Sửa</a
            >
            <a :href="`/students/detail/${student.id}`" class="btn btn-warning"
              >Xem chi tiết</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
