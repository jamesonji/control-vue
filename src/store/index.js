import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from './modules/todos.js'
import userModule from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todosModule,
    userModule
  }
})

export default store
