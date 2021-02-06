import Vue from "vue";
import App from "./App.vue";
import { store } from "@/store";
import { routes } from "@/router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
