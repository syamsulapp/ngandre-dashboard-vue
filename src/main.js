import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import cors from "cors";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(cors);

app.mount("#app");
