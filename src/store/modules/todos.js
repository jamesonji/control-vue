import axios from 'axios'

const state = {
  /* Sample todo from API
  [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }]
  */
  todos: []
}

const getters = {
  todos: state => {
    return state.todos
  }
}

const actions = {
  getTodos ({commit}) {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    // .then(todos => commit('getTodos', todos))
    .then(todos => console.log(todos))
    .catch(err => console.log(err))
  }
}

const mutations = {
  getTodos: (state, payload) => {
    state.value = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
