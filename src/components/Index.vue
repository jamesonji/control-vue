<template>
  <div class="index-container">
    <div class="login-container" v-if="!signedIn">
      <h3>Please enter your username to log in!</h3>
      <input type="text" name="username" v-model="username">
      <button class="login-button" @click="signIn(username)">Login</button>
    </div>
    <template v-else>
      <Todos></Todos>
    </template>
  </div>
</template>

<script>
import Todos from './Todos.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      username: ''
    }
  },
  components: {
    Todos
  },
  computed: {
    ...mapGetters([
      'signedIn'
    ])
  },
  methods: {
    ...mapActions([
      'signIn'
    ])
  }
}
</script>

<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input{
  height: 50px;
  width: 300px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.4rem;
}
.login-button{
  margin-top: 30px;
  display: block;
  height: 60px;
  width: 100px;
  border-radius: 20px;
  border: 3px solid #ffc699;
  cursor: pointer;
  background-color: #e86561;
  color: white;
  font-size: 1.2rem;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
}
.login-button:hover{
  transform: scale(1.1);
}
</style>
