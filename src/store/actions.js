import axios from 'axios'
// Check if user exists
export const signIn = ({ commit, state }, userName) => {
  if (userName === '') {
    // If user name is empry, show error message
    commit('notify/push', {
      title: 'Invalid username',
      text: 'Username can not be empty',
      type: 'warning'
    }, { root: true })
  } else {
    // First fetch user list from API
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    // Check if user exists in the user list provided by API
    .then(users => users.filter(user => user.username === userName))
    .then(user => {
      // If user array is not empty (provided username match with one record)
      if (user.length > 0) {
        // set current user object
        commit('updateUser', user[0])
        // then change signIn status to be true
        // todos will be fetched in component will mount
        commit('setSignedIn', true)
      } else {
        // cannot find a match record
        // sign failed
        commit('setSignedIn', false)
        commit('notify/push', {
          title: 'Notificaton',
          text: 'Failed to login, please try again',
          type: 'warning'
        }, { root: true })
      }
    })
    .catch(err => {
      console.log(err)
      commit('notify/push', {
        title: 'Notificaton',
        text: 'Something went wrong, please try again',
        type: 'warning'
      }, { root: true })
    })
  }
}

export const signOut = ({commit, state}) => {
  commit('updateUser', null)
  commit('setSignedIn', false)
}

export const saveNewTodo = ({commit, state}, newTodo) => {
  if (newTodo === '') {
    // If new todo is empty string
    // show error message
    commit('notify/push', {
      title: 'Invalid todo item',
      text: 'New todo can not be empty.',
      type: 'warning'
    }, { root: true })
  } else {
    // Construct new todo item
    // Then save it to the todo list
    let newTodoObj = {
      userId: state.userModule.user.id,
      id: state.todosModule.todos.length,
      title: newTodo,
      completed: false
    }
    commit('appendNewTodo', newTodoObj)
  }
}
