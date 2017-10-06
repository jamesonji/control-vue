import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Notifications)
Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,             // use vue-router
  store,              // use vuex store
  template: '<App/>',
  components: { App }
})
