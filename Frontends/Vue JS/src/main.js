import { createApp } from "troisjs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'atropos/css'
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";


createApp(App).use(router).use(store).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
