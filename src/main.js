import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.filter('actorfilter', (data) => {
  const newlist = data.map(item => item.name)
  return newlist.join(' ')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
