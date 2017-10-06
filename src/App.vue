<template>
  <div id="app">
    <Navigation></Navigation>
    <flash-message variant="success"></flash-message>
    <Index></Index>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Notification from './components/Notification.vue'
import Index from './components/Index.vue'

export default {
  name: 'app',
  methods: {
  },
  components: {
    Navigation,
    Notification,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
