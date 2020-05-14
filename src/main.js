import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRoute from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRoute);

const router = new VueRoute({
  routes: Routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
