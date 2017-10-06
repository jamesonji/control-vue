import axios from 'axios'
// Check if user exists
export const signIn = ({ commit, state }, userName) => {
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
        commit('setSignedIn', true)
      } else {
        // cannot find a match record
        // sign failed
        commit('setSignedIn', false)
      }
    })
    .catch(err => {
      console.log(err)
    })
  // then show user's todos
  // else, set state signedIn to be false
  // and show error message
}

export const signOut = ({commit, state}) => {
  commit('updateUser', null)
  commit('setSignedIn', false)
}

