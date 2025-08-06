import { createRouter, createWebHistory } from "vue-router";

import ChildCard from "@/components/ChildCard.vue";
import Demo from "@/components/Demo.vue";
import Props from "@/components/Props.vue";

// Danh sách các route
const routes = [
  {
    path: "/", // đường dẫn
    name: "ChildCard", // tên của router
    component: ChildCard, // nội dung sẽ được hiển thị khi truy cập vào đường dẫn
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/props",
    name: "",
    component: Props,
  },
];

// Khởi tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
