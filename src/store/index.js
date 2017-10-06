import Vue from 'vue'
import Vuex from 'vuex'
import { createFlashStore } from 'vuex-flash'

import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

import todosModule from './modules/todos.js'
import userModule from './modules/user.js'
import notify from './modules/notify.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // User is not signed in by default
    signedIn: false
  },
  getters,
  actions,
  mutations,
  modules: {
    todosModule,
    userModule,
    notify
  },
  plugins: [
    createFlashStore()
  ]
})

export default store
