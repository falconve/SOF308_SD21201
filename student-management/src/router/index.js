// Component chứa trang thêm
import StudentAdd from "@/components/StudentAdd.vue";
import StudentDetail from "@/components/StudentDetail.vue";
import StudentEdit from "@/components/StudentEdit.vue";
// Component chứa trang danh sách
import StudentList from "@/components/StudentList.vue";
import { createRouter, createWebHistory } from "vue-router";

// Định nghĩa các đường dẫn có trong dự án
const routes = [
  {
    path: "/students",
    name: "student.list",
    component: StudentList,
  },
  {
    path: "/students/add",
    name: "student.add",
    component: StudentAdd,
  },
  {
    path: "/students/detail/:id",
    name: "student.detail",
    component: StudentDetail,
  },
  {
    path: "/students/edit/:id",
    name: "student.edit",
    component: StudentEdit,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
