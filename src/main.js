import Vue from 'vue'
import '@/assets/scss/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/api/config'
import './mock'

Vue.use(ElementUI)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  create() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
