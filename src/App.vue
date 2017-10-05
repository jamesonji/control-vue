<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <button @click="getUsers">Get Users</button>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  methods: {
    getUsers () {
      this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res.body))
      .catch(err => console.log(err))
    }
  },
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
