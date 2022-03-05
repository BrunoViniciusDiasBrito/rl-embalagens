import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import MdiSvg from "@yeliulee/vue-mdi-svg/v3";

createApp(App).use(store).use(router).use(MdiSvg).mount("#app");
