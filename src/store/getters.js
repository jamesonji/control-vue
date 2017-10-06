// get user's todo only
export const userTodos = state => {
  return state.todosModule.todos.filter(todo => {
    return todo.userId === state.userModule.user.id
  })
}

// get current signedIn status (true/false)
export const signedIn = state => {
  return state.signedIn
}
