import Vue from 'vue'
import router from '@/config/routes_register'
import App from '@/webApp'

Vue.config.productionTip = false

new Vue({
  router,
  ...App
}).$mount('#app')
