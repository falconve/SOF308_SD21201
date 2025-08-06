// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap vào dự án
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App);
// Sử dụng router cho dự án
app.use(router);
app.mount("#app");
