import Vue from 'vue'
//import App from './App.vue'
//import App from './CalcApp.vue'
import App from './Home.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
