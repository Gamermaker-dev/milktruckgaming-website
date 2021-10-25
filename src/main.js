import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

// Pages
import Home from './pages/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)

const routes = [
    {path: '/', component: Home}
]

const router = new VueRouter({
    routes
})

new Vue({
  router
}).$mount('#app')
