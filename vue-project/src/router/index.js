import { createRouter, createWebHistory } from "vue-router";

import ChildCard from "@/components/ChildCard.vue";
import Demo from "@/components/Demo.vue";
import Props from "@/components/Props.vue";
import UserCard from "@/components/UserCard.vue";
import Bootstrap from "@/components/Bootstrap.vue";

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
  {
    // Khai báo route /user-card có sủ dụng component UserCard
    path: "/user-card/:id", // dynamic routing
    name: "UserCard",
    component: UserCard,
    // nested route: muốn sử dụng nested route phải
    // sử dụng thuộc tính children
    children: [
      {
        // /user-card/:id/edit
        path: "edit",
        component: Bootstrap,
      },
    ],
  },
];

// Khởi tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
