export const userTodos = state => {
  return state.todosModule.todos.filter(todo => {
    return todo.userId === state.userModule.user.id
  })
}

export const signedIn = state => {
  return state.signedIn
}
