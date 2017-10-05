<template>
  <div class="index-container">
    <input type="text" name="username" v-model="username">
    <button @click="signIn(username)">Auth User</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      username: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'signIn'
    ])
  }
}
</script>

<style scoped>
</style>
