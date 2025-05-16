import { createApp } from "vue";
import "./assets/CSS/reset.css";
import "./assets/CSS/style.css";

import App from "./App.vue";
import router from "./router/index.js";

createApp(App).use(router).mount("#app");
