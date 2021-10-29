import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./css/custom-element-ui.css";
import "./css/custom-bootstrap.css";


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
