<template>
  <div class="index-container">
    <template v-if="!signedIn">
      <h3>Please enter your username to log in!</h3>
      <input type="text" name="username" v-model="username">
      <button class="login-button" @click="signIn(username)">Auth User</button>
    </template>
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
input{
  height: 50px;
  width: 300px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.4rem;
}
.login-button{
  display: block;
  height: 60px;
  width: 100px;
  border-radius: 20px;
  
}
</style>
