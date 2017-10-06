import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,             // use vue-router
  store,              // use vuex store
  template: '<App/>',
  components: { App }
})
