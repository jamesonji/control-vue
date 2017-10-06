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
  // get all todos
  allTodos: state => {
    return state.todos
  }
}

const actions = {
  // Toggle todo completed
  toggleTodo ({commit, state}, todoId) {
    // Go through entire list and change the one being edited
    let newState = state.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    commit('updateTodos', newState)
  }
}

const mutations = {
  // Update current todos state
  updateTodos: (state, payload) => {
    state.todos = payload
  },
  // Append a new todo to the list
  appendNewTodo: (state, payload) => {
    state.todos.unshift(payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
